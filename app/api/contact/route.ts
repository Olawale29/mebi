import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  description: string;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 0 &&
    typeof d.email === "string" &&
    EMAIL_RE.test(d.email) &&
    typeof d.description === "string" &&
    d.description.trim().length > 0
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Name, a valid email and a project description are required." },
      { status: 400 }
    );
  }

  // Forwarding destination (e.g. an email service, CRM or webhook) is
  // configured via environment variables and never exposed client-side.
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;

  try {
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, receivedAt: new Date().toISOString() }),
      });
    } else {
      // No forwarding destination configured yet — log so the enquiry
      // isn't silently lost during local development.
      console.info("[contact] new enquiry (no webhook configured):", body);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[contact] failed to forward enquiry:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 502 }
    );
  }
}
