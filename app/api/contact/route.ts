import { NextResponse } from "next/server";
import { company } from "@/data/company";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  helpType?: string;
  description: string;
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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.error("[contact] Brevo is not configured.");
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 503 }
    );
  }

  const rows: [string, string | undefined][] = [
    ["Name", body.name],
    ["Email", body.email],
    ["Company / Organization", body.company],
    ["Phone Number", body.phone],
    ["What do you need help with?", body.helpType],
  ];

  const detailsHtml = rows
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value as string)}</p>`)
    .join("");

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "MEBI Technology Website", email: company.email },
        to: [{ email: company.email }],
        replyTo: { email: body.email, name: body.name },
        subject: `New project enquiry from ${body.name}`,
        htmlContent: `
          <h2>New project enquiry</h2>
          ${detailsHtml}
          <p><strong>Project description:</strong></p>
          <p>${escapeHtml(body.description).replace(/\n/g, "<br />")}</p>
        `,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("[contact] Brevo rejected the email:", response.status, await response.text());
      return NextResponse.json(
        { error: "Something went wrong. Please try again shortly." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[contact] Failed to send enquiry email:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
