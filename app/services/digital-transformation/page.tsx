import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

const service = getServiceBySlug("digital-transformation")!;

export const metadata: Metadata = buildMetadata({
  title: service.title,
  description: service.heroSub,
  path: "/services/digital-transformation",
});

const flow = ["Manual process", "Mapped & analyzed", "Automated", "Integrated", "Monitored"];

export default function DigitalTransformationPage() {
  return (
    <>
      <PageHeader
        label="Service — Digital Transformation & Automation"
        title={service.heroHeadline}
        description={service.heroSub}
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white p-8 shadow-[0_40px_80px_-30px_rgba(18,14,36,0.2)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                From manual to automated
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {flow.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-medium ${
                        i === flow.length - 1
                          ? "bg-accent text-white"
                          : "border border-ink/10 text-ink/80"
                      }`}
                    >
                      {step}
                    </span>
                    {i < flow.length - 1 && (
                      <span className="text-ink/20" aria-hidden>
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ServiceOverview service={service} />

      <section className="border-t border-ink/10 pb-24 pt-4 md:pb-32">
        <Container className="text-center">
          <Reveal>
            <Button href="/contact" size="md">
              {service.cta}
            </Button>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
