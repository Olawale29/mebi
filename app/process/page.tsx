import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { processSteps } from "@/data/process";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProcessInteractive } from "@/components/process/ProcessInteractive";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Process",
  description: "The 8-stage delivery methodology MEBI Technology runs every engagement through.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="Process"
        title="A disciplined process, not a black box."
        description="Every engagement runs through the same 8-stage methodology — so you always know what's happening and why."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <ProcessInteractive />
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-surface-dark py-24 text-white md:py-32">
        <Container>
          <Reveal>
            <h2 className="max-w-2xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
              Eight stages. One continuous process.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={0.06 * i}>
                <div className="border-t border-white/10 py-8 pr-8">
                  <span className="text-4xl font-semibold text-white/20">{step.number}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
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
