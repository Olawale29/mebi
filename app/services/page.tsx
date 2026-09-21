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
    "UI/UX design, web development, mobile app development, custom software, product strategy and technology consulting — from idea to digital product.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="From idea to digital product."
        description="Every engagement combines product thinking, design and engineering — shaped around your business, not a fixed package."
      />

      <section className="pb-24 md:pb-32">
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
                      {service.hasDedicatedPage ? (
                        <Button href={`/services/${service.slug}`} variant="ghost" size="sm">
                          Learn more
                        </Button>
                      ) : (
                        <Button href="/contact" variant="ghost" size="sm">
                          {service.cta}
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-y-8">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        What we solve
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.whatWeSolve.slice(0, 3).map((item) => (
                          <li key={item} className="text-sm text-ink/80 leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        Capabilities
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.capabilities.slice(0, 6).map((c) => (
                          <span
                            key={c}
                            className="rounded-full border border-ink/10 px-3 py-1 text-xs text-muted"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
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
