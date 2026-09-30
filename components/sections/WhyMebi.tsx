import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const principles = [
  {
    number: "01",
    title: "Real attention, not templated delivery",
    description: "Fewer clients, closer partnership.",
  },
  {
    number: "02",
    title: "A process you can see",
    description:
      "Our 8-stage delivery methodology means you always know what's happening and why.",
  },
  {
    number: "03",
    title: "Enterprise-grade rigor from day one",
    description: "We hold ourselves to the same standard whether it's your first project with us or your fifth.",
  },
  {
    number: "04",
    title: "Built to scale with you",
    description: "Solutions designed for where you're headed, not just where you are today.",
  },
];

export function WhyMebi() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-24 text-white md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary-light/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel className="text-purple-soft">Why Organizations Choose MEBI</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 max-w-2xl text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[48px]">
                We&apos;re not trying to be everyone&apos;s technology partner.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/process" variant="outline-light" size="sm">
              See Our Full Process
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.number} delay={0.08 * i}>
              <div className="h-full bg-white/[0.03] p-8 md:p-10">
                <span className="text-sm font-medium text-white/40">{p.number}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-white md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-white/60 leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
