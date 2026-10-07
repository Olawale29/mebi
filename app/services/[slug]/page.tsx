import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { services, getServiceBySlug } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PricingTiers } from "@/components/services/PricingTiers";
import { BrowserMockup, DashboardContent } from "@/components/services/BrowserMockup";
import { PhoneMockup } from "@/components/services/PhoneMockup";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service)
    return buildMetadata({ title: "Service Not Found", description: "This service could not be found.", path: "/services" });

  return buildMetadata({
    title: service.title,
    description: service.heroSub,
    path: `/services/${service.slug}`,
  });
}

const visuals: Record<string, "browser" | "phone" | "both" | null> = {
  "web-development": "browser",
  "software-development": "both",
  "ui-ux-design": "phone",
  "digital-transformation": null,
  "maintenance-support": null,
  "add-ons": null,
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  const visual = visuals[service.slug];

  return (
    <>
      <PageHeader
        label={`Service ${service.number} — ${service.title}`}
        title={service.heroHeadline}
        description={service.heroSub}
      />

      {visual && (
        <section className="pb-20 md:pb-24">
          <Container>
            {visual === "browser" && (
              <Reveal>
                <BrowserMockup>
                  <DashboardContent />
                </BrowserMockup>
              </Reveal>
            )}
            {visual === "phone" && (
              <Reveal>
                <PhoneMockup />
              </Reveal>
            )}
            {visual === "both" && (
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
            )}
          </Container>
        </section>
      )}

      <section className={visual ? "border-t border-ink/10 py-24 md:py-32" : "pb-24 pt-4 md:pb-32"}>
        <Container>
          <Reveal>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Pricing</h2>
          </Reveal>
          <div className="mt-6">
            <PricingTiers tiers={service.tiers} />
          </div>
          {service.note && (
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">{service.note}</p>
            </Reveal>
          )}
          <Reveal delay={0.15}>
            <p className="mt-2 text-xs text-muted/70">
              Prices are starting prices and may increase based on scope of work. A formal quotation is
              issued and agreed before work begins.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 pb-24 pt-10 md:pb-32">
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
