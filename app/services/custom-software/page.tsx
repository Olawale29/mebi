import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { BrowserMockup, DashboardContent } from "@/components/services/BrowserMockup";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

const service = getServiceBySlug("custom-software")!;

export const metadata: Metadata = buildMetadata({
  title: service.title,
  description: service.heroSub,
  path: "/services/custom-software",
});

const pillars = [
  { title: "Security", description: "Access control, data protection and secure-by-default architecture." },
  { title: "Scalability", description: "Systems designed to grow with transaction volume and team size." },
  { title: "Performance", description: "Fast under real load, not just in a demo environment." },
  { title: "Maintainability", description: "Documented, well-structured code your team can build on." },
  { title: "Integrations", description: "Connecting cleanly with the tools your business already runs on." },
];

const examples = [
  "CRM",
  "ERP",
  "Inventory systems",
  "Booking platforms",
  "Marketplaces",
  "Business dashboards",
  "Workflow automation",
  "Internal tools",
];

export default function CustomSoftwarePage() {
  return (
    <>
      <PageHeader label="Service — Custom Software" title={service.heroHeadline} description={service.heroSub} />

      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <BrowserMockup title="internal.mebi.dev">
              <DashboardContent />
            </BrowserMockup>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {examples.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/10 px-5 py-2.5 text-sm text-ink/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <Reveal>
            <h2 className="max-w-xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
              Built to hold up under real business use.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div className="h-full bg-bg p-7">
                  <p className="text-lg font-semibold text-ink">{p.title}</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{p.description}</p>
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
