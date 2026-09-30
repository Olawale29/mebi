import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

const service = getServiceBySlug("it-consulting")!;

export const metadata: Metadata = buildMetadata({
  title: service.title,
  description: service.heroSub,
  path: "/services/it-consulting",
});

const pillars = [
  {
    title: "Technology Strategy",
    description: "A clear roadmap for where your technology needs to go — and what to prioritize first.",
  },
  {
    title: "Managed IT Services",
    description: "Day-to-day infrastructure management so your team can focus on the business, not the servers.",
  },
  {
    title: "Capacity Building",
    description: "Hands-on training that helps your team get more out of every tool you already own.",
  },
  {
    title: "Infrastructure Audits",
    description: "An honest assessment of what's working, what's at risk, and what needs to change.",
  },
];

export default function ItConsultingPage() {
  return (
    <>
      <PageHeader
        label="Service — IT Consulting & Capacity Building"
        title={service.heroHeadline}
        description={service.heroSub}
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-primary/20 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.06 * i}>
                <div className="h-full bg-surface-tint p-8 md:p-10">
                  <span className="text-sm font-medium text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed">{p.description}</p>
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
