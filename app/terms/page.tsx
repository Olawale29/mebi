import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `The terms governing use of the ${company.name} website.`,
  path: "/terms",
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing this website, you agree to be bound by these terms and conditions. If you do not agree, please do not use this website.`,
  },
  {
    title: "2. Use of This Website",
    body: "Content on this website is provided for general information about our services. Nothing on this site constitutes a binding proposal; project scope, pricing and timelines are agreed separately in writing.",
  },
  {
    title: "3. Intellectual Property",
    body: `All content on this website — including text, graphics, logos and design work — is the property of ${company.name} unless otherwise stated, and may not be reproduced without permission.`,
  },
  {
    title: "4. Client Work",
    body: "Terms specific to client engagements — including ownership of deliverables, confidentiality and payment terms — are set out in individual project agreements, not on this page.",
  },
  {
    title: "5. Limitation of Liability",
    body: `${company.name} makes reasonable efforts to keep this website accurate and available, but does not guarantee uninterrupted access and is not liable for any loss arising from its use.`,
  },
  {
    title: "6. Changes to These Terms",
    body: "These terms may be updated from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "7. Contact",
    body: `Questions about these terms can be sent to ${company.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Terms & Conditions"
        description="Last updated — to be confirmed. This page will be kept current as our terms are finalized."
      />
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="mx-auto max-w-2xl space-y-12">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-semibold tracking-[-0.01em] text-ink">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
