import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { company, socialLinks } from "@/data/company";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Start a conversation with MEbi Technologies about your next digital product.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's build something useful."
        description="Tell us about the problem you're solving. We'll follow up with next steps."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <Reveal>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Contact Details
                  </h2>
                  <div className="mt-5 space-y-4">
                    <p className="text-ink">
                      {company.email ?? (
                        <span className="text-muted/60">Email — to be added</span>
                      )}
                    </p>
                    <p className="text-ink">
                      {company.phone ?? (
                        <span className="text-muted/60">Phone — to be added</span>
                      )}
                    </p>
                    <p className="text-ink">
                      {company.address ?? (
                        <span className="text-muted/60">Address — to be added</span>
                      )}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-12">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Follow
                  </h2>
                  <div className="mt-5 flex flex-col gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink transition-colors hover:text-primary"
                      >
                        {s.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.05}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
