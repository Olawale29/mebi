import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "From custom software to cloud infrastructure and automation, MEBI Technology delivers end-to-end technology services built around your business.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Four services. One standard of rigor."
        description="Whether you need a single custom build or an end-to-end digital transformation, every MEBI engagement runs through the same disciplined process — and gets the same level of attention."
      />

      <section className="bg-gradient-to-b from-purple-soft/20 via-purple-soft/5 to-transparent pb-24 md:pb-32">
        <Container>
          <div className="flex flex-col gap-20 md:gap-28">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={0.04 * i}>
                <div className="grid grid-cols-1 gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[100px_1fr_1fr] lg:gap-12">
                  <span className="text-sm font-medium text-muted">{service.number}</span>

                  <div>
                    <h2 className="text-3xl font-semibold tracking-[-0.01em] text-ink md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-md text-muted leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <Button href={`/services/${service.slug}`} variant="ghost" size="sm">
                        {service.cta}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-y-8">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        What this includes
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.includes.map((item) => (
                          <li key={item} className="text-sm text-ink/80 leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.builtWith && (
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                          Built with
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {service.builtWith.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-ink/10 px-3 py-1 text-xs text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
