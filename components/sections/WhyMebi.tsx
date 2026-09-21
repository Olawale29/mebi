import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    number: "01",
    title: "Business First",
    description: "We start with the problem, not the technology.",
  },
  {
    number: "02",
    title: "Designed Before It Is Built",
    description: "We clarify the experience before engineering the product.",
  },
  {
    number: "03",
    title: "Built to Scale",
    description: "Architecture should support where the business is going.",
  },
  {
    number: "04",
    title: "Obsessed With Details",
    description: "Small details create exceptional digital experiences.",
  },
];

export function WhyMebi() {
  return (
    <section className="border-t border-ink/10 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel>Why MEbi</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-3xl text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[54px]">
            Technology should solve a business problem.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.number} delay={0.08 * i}>
              <div className="h-full bg-bg p-8 md:p-10">
                <span className="text-sm font-medium text-muted">{p.number}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-ink md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
