import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getServiceBySlug } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { PhoneMockup } from "@/components/services/PhoneMockup";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

const service = getServiceBySlug("mobile-app-development")!;

export const metadata: Metadata = buildMetadata({
  title: service.title,
  description: service.heroSub,
  path: "/services/mobile-app-development",
});

const capabilities = [
  "iOS",
  "Android",
  "Cross-platform",
  "API integration",
  "Authentication",
  "Payments",
  "Push notifications",
  "Analytics",
  "App Store deployment",
];

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <PageHeader
        label="Service — Mobile App Development"
        title={service.heroHeadline}
        description={service.heroSub}
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:gap-16">
            <Reveal>
              <PhoneMockup />
            </Reveal>
            <Reveal delay={0.12}>
              <PhoneMockup dark />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <Reveal>
            <h2 className="max-w-xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
              Everything a modern mobile product needs.
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {capabilities.map((item, i) => (
              <Reveal key={item} delay={0.03 * i}>
                <span className="inline-block rounded-full border border-ink/10 px-5 py-2.5 text-sm text-ink/80">
                  {item}
                </span>
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
