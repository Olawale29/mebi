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

const service = getServiceBySlug("web-development")!;

export const metadata: Metadata = buildMetadata({
  title: service.title,
  description: service.heroSub,
  path: "/services/web-development",
});

const stages = [
  { title: "Strategy", description: "Defining what the platform needs to do and for whom." },
  { title: "Architecture", description: "Structuring data, systems and integrations before development starts." },
  { title: "Development", description: "Building the frontend and backend on a modern, maintainable stack." },
  { title: "Testing", description: "QA across devices, browsers and real usage scenarios." },
  { title: "Deployment", description: "Shipping to production with monitoring in place." },
  { title: "Optimization", description: "Improving speed, SEO and conversion after launch." },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <PageHeader label="Service — Web Development" title={service.heroHeadline} description={service.heroSub} />

      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <BrowserMockup>
              <DashboardContent />
            </BrowserMockup>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <Reveal>
            <h2 className="max-w-xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
              From strategy to a live, optimized product.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage, i) => (
              <Reveal key={stage.title} delay={0.05 * i}>
                <div className="h-full bg-bg p-7">
                  <span className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-lg font-semibold text-ink">{stage.title}</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{stage.description}</p>
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
