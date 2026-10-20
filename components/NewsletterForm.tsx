"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Subscription failed");

      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
        Newsletter
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-white/60">
        Practical ideas on technology, business, and building what&apos;s next.
      </p>
      <form onSubmit={handleSubmit} className="mt-4" aria-label="Newsletter signup">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <div className="flex gap-2">
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="you@example.com"
            required
            disabled={status === "submitting"}
            className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white focus:bg-white/15 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-white px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-purple-soft disabled:pointer-events-none disabled:opacity-60"
          >
            {status === "submitting" ? "Joining…" : "Join"}
          </button>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-white/45">
          No spam. Unsubscribe anytime.
        </p>
        {status === "success" && (
          <p className="mt-3 text-sm text-purple-soft" role="status" aria-live="polite">
            You&apos;re on the list. Welcome aboard.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-200" role="alert">
            We couldn&apos;t add you right now. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
