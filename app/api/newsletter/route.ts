import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const submittedEmail =
    body && typeof body === "object" ? (body as Record<string, unknown>).email : undefined;
  const email = typeof submittedEmail === "string" ? submittedEmail.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);

  if (!apiKey || !Number.isInteger(listId) || listId < 1) {
    console.error("[newsletter] Brevo is not configured.");
    return NextResponse.json({ error: "Newsletter signup is unavailable." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("[newsletter] Brevo rejected subscription:", response.status);
      return NextResponse.json(
        { error: "Unable to save your subscription." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[newsletter] Brevo request failed:", error);
    return NextResponse.json(
      { error: "Unable to save your subscription." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
