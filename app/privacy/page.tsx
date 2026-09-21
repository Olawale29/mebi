import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses and protects information.`,
  path: "/privacy",
});

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you contact us through this website — including our project enquiry form or newsletter sign-up — we collect the information you provide, such as your name, email address, company, and details about your project.",
  },
  {
    title: "2. How We Use Information",
    body: "We use the information you provide to respond to enquiries, scope potential projects, and, where you've opted in, send occasional updates. We do not sell your information to third parties.",
  },
  {
    title: "3. Data Storage & Security",
    body: "We take reasonable technical and organizational measures to protect the information you share with us. Full detail on data retention periods and processors will be published here as those arrangements are finalized.",
  },
  {
    title: "4. Cookies",
    body: "This website may use essential cookies required for core functionality. Any analytics or marketing cookies in use will be disclosed here, along with how to manage your preferences.",
  },
  {
    title: "5. Your Rights",
    body: "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us directly.",
  },
  {
    title: "6. Contact",
    body: `Questions about this policy can be sent to ${company.email ?? "the contact details listed on our Contact page"}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Privacy Policy"
        description="Last updated — to be confirmed. This page will be kept current as our data practices are finalized."
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
