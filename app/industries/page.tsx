import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/data/industries";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "MEBI Technology delivers tailored technology solutions across government, healthcare, education, finance, retail, logistics, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        label="Industries"
        title="Every industry has different problems. We don't solve them the same way."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <Reveal key={industry.name} delay={0.04 * i}>
                <div className="h-full bg-white p-7">
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                    {industry.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {industry.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
