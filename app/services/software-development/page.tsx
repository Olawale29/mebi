import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { BrowserMockup, DashboardContent } from "@/components/services/BrowserMockup";
import { PhoneMockup } from "@/components/services/PhoneMockup";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

const service = getServiceBySlug("software-development")!;

export const metadata: Metadata = buildMetadata({
  title: service.title,
  description: service.heroSub,
  path: "/services/software-development",
});

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <PageHeader
        label="Service — Software & Solution Development"
        title={service.heroHeadline}
        description={service.heroSub}
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            <Reveal>
              <BrowserMockup>
                <DashboardContent />
              </BrowserMockup>
            </Reveal>
            <Reveal delay={0.1}>
              <PhoneMockup dark />
            </Reveal>
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
