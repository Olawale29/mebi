import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { company, socialLinks } from "@/data/company";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with MEBI Technology for software development, IT consulting, digital transformation, and cloud & security services.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's talk about what you're building."
        description="Fill out the form and we'll get back to you within 1–2 business days — or reach us directly below."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <Reveal>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Direct Contact
                  </h2>
                  <div className="mt-5 space-y-4">
                    <a href={`mailto:${company.email}`} className="block text-ink hover:text-primary">
                      {company.email}
                    </a>
                    {company.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block text-ink hover:text-primary"
                      >
                        {phone}
                      </a>
                    ))}
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-ink hover:text-primary"
                    >
                      www.mebitechnology.com
                    </a>
                    <p className="max-w-xs pt-2 text-sm leading-relaxed text-muted">
                      {company.address}
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
