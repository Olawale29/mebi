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

const service = getServiceBySlug("data-cloud-security")!;

export const metadata: Metadata = buildMetadata({
  title: service.title,
  description: service.heroSub,
  path: "/services/data-cloud-security",
});

const pillars = [
  { title: "Cloud Migration", description: "Moving infrastructure to Azure, AWS, or Google Cloud without disrupting the business." },
  { title: "Business Intelligence", description: "Dashboards that turn raw data into decisions, built in Power BI or Tableau." },
  { title: "Database Design", description: "Data architecture that stays fast and reliable as it scales." },
  { title: "Cybersecurity", description: "Assessments and hardening that close gaps before they become incidents." },
];

export default function DataCloudSecurityPage() {
  return (
    <>
      <PageHeader
        label="Service — Data, Cloud & Cybersecurity"
        title={service.heroHeadline}
        description={service.heroSub}
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <BrowserMockup title="secure.mebitechnology.com">
              <DashboardContent />
            </BrowserMockup>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <Reveal>
            <h2 className="max-w-xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
              Security built in from the start.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-primary/20 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.06 * i}>
                <div className="h-full bg-surface-tint p-7">
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
