"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  source: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
  source: "",
};

const projectTypes = [
  "UI/UX Design",
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "Not sure yet",
];

const budgets = ["Under $10k", "$10k – $25k", "$25k – $50k", "$50k+", "Not sure yet"];

const timelines = ["ASAP", "1–3 months", "3–6 months", "Flexible"];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.description.trim()) next.description = "Tell us a little about the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-ink/10 bg-white p-10 text-center md:p-16"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-white">
          ✓
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-[-0.01em] text-ink md:text-3xl">
          Thanks. We&apos;ve received your project brief.
        </h2>
        <p className="mt-3 text-muted">
          We&apos;ll be in touch shortly to discuss next steps.
        </p>
        <Button
          className="mt-8"
          size="sm"
          variant="ghost"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name} required>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field label="Company">
          <input
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Phone">
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Field label="Project Type">
          <select
            value={form.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            className={inputClass}
          >
            <option value="">Select</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget Range">
          <select
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={inputClass}
          >
            <option value="">Select</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline">
          <select
            value={form.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            className={inputClass}
          >
            <option value="">Select</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project Description" error={errors.description} required>
        <textarea
          rows={5}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.description}
        />
      </Field>

      <Field label="How did you hear about us?">
        <input
          type="text"
          value={form.source}
          onChange={(e) => update("source", e.target.value)}
          className={inputClass}
        />
      </Field>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            Something went wrong sending your message. Please try again.
          </motion.p>
        )}
      </AnimatePresence>

      <Button type="submit" size="md" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Start the Conversation"}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-muted/50 transition-colors focus:border-primary focus:outline-none";

function Field({
  label,
  children,
  error,
  required,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-sm text-red-600" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
