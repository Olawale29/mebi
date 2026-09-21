import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { DesignSystemShowcase } from "@/components/services/DesignSystemShowcase";
import { PhoneMockup } from "@/components/services/PhoneMockup";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

const service = getServiceBySlug("ui-ux-design")!;

export const metadata: Metadata = buildMetadata({
  title: service.title,
  description: service.heroSub,
  path: "/services/ui-ux-design",
});

const disciplines = [
  "User Research",
  "Information Architecture",
  "User Flows",
  "Wireframes",
  "UI Design",
  "Design Systems",
  "Prototyping",
  "Usability Testing",
  "Design Handoff",
];

export default function UiUxDesignPage() {
  if (!service) return notFound();

  return (
    <>
      <PageHeader label="Service — UI/UX Design" title={service.heroHeadline} description={service.heroSub} />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <DesignSystemShowcase />
            </Reveal>
            <Reveal delay={0.1}>
              <PhoneMockup />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <Reveal>
            <h2 className="max-w-xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
              Every design discipline, applied end to end.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-3">
            {disciplines.map((item, i) => (
              <Reveal key={item} delay={0.04 * i}>
                <div className="h-full bg-bg p-6">
                  <span className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-medium text-ink">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
