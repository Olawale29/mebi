import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const principles = [
  {
    number: "01",
    title: "Innovation-Driven",
    description:
      "We embrace emerging technologies to create forward-thinking solutions that drive business transformation.",
  },
  {
    number: "02",
    title: "End-to-End Excellence",
    description:
      "From strategy and execution to support, we deliver seamless solutions at every stage.",
  },
  {
    number: "03",
    title: "Scalable Solutions",
    description:
      "Our technology is built to evolve with your business, ensuring long-term value and flexibility.",
  },
  {
    number: "04",
    title: "Client-Centric Approach",
    description:
      "Every solution is designed around your unique goals, challenges, and opportunities.",
  },
  {
    number: "05",
    title: "Quality & Reliability",
    description:
      "We are committed to delivering secure, reliable, and high-performing solutions that exceed expectations.",
  },
  {
    number: "06",
    title: "Partnership",
    description:
      "We work as an extension of your team, building relationships founded on trust and shared success.",
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
              <SectionLabel className="text-purple-soft">
                Why Choose MEBI
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 max-w-2xl text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[48px]">
                An extension of your team, not just a vendor.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/process" variant="outline-light" size="sm">
              See Our Full Process
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.number} delay={0.06 * i}>
              <div className="h-full bg-white/[0.03] p-8">
                <span className="text-sm font-medium text-white/40">
                  {p.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em] text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
