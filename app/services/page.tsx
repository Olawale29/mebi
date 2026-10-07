import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Websites, software, UI/UX, automation, and ongoing support — built around how your business actually works, with transparent starting prices.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Built around how your business actually works."
        description="Every engagement is scoped to your goals. The prices below show where our work begins — your final quote reflects what you need."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={0.04 * i}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
          <p className="mt-10 text-sm text-muted">
            Want to know what your project would cost?{" "}
            <a href="/contact" className="font-medium text-primary hover:text-primary-dark">
              Request a tailored quote
            </a>
            . Scope and price are agreed in writing before work begins.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
