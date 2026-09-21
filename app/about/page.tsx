import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { technologyStack } from "@/data/technology";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "MEbi Technologies is a digital product studio designing and engineering websites, applications and software for ambitious businesses.",
  path: "/about",
});

const beliefs = [
  {
    title: "Business first",
    description: "Every design and engineering decision is judged against the business problem it's solving.",
  },
  {
    title: "Design before build",
    description: "The experience is defined and validated before production code is written.",
  },
  {
    title: "Built to last",
    description: "We build systems that hold up under real use, not just in a demo.",
  },
  {
    title: "Detail is the work",
    description: "The difference between good and exceptional is almost always in the details.",
  },
];

const capabilities = [
  "UI/UX Design",
  "Web Development",
  "Mobile App Development",
  "Custom Software Development",
  "Digital Product Design",
  "Technology Consulting",
];

const workingSteps = [
  { title: "We listen first", description: "Every engagement starts with understanding your business, not pitching a solution." },
  { title: "We design in the open", description: "You see the work as it develops — flows, wireframes, prototypes — not just a final reveal." },
  { title: "We build with intent", description: "Engineering decisions are made for maintainability, not shortcuts." },
  { title: "We stay accountable", description: "Clear scope, clear timelines, and honest updates when something changes." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About MEbi"
        title="We build what's next."
        description="MEbi Technologies designs and engineers digital products for businesses that need more than a template and less than a full internal engineering team."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="mt-5 text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
                A studio built around design and engineering, together.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  MEbi Technologies exists to close the gap between a good idea
                  and a working digital product — the gap where most projects
                  lose momentum, coherence, or both.
                </p>
                <p>
                  We work as a single team across design and engineering, so
                  the product that gets built is the product that was designed
                  — not a compromise made under deadline pressure.
                </p>
                <p className="text-sm text-muted/70">
                  Full company history and milestones will be added here as
                  MEbi&apos;s story develops.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <SectionHeading label="What We Believe" title="Principles that shape every engagement." />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={0.06 * i}>
                <div className="h-full bg-bg p-8 md:p-10">
                  <h3 className="text-xl font-semibold tracking-[-0.01em] text-ink">{b.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <SectionLabel>Our Capabilities</SectionLabel>
          <div className="mt-8 flex flex-wrap gap-3">
            {capabilities.map((c, i) => (
              <Reveal key={c} delay={0.04 * i}>
                <span className="inline-block rounded-full border border-ink/10 px-5 py-2.5 text-sm text-ink/80">
                  {c}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-surface-dark py-24 text-white md:py-32">
        <Container>
          <SectionHeading dark label="How We Work" title="A process built on visibility, not surprises." />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workingSteps.map((s, i) => (
              <Reveal key={s.title} delay={0.06 * i}>
                <div className="border-t border-white/10 pt-6">
                  <span className="text-sm text-white/40">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <SectionHeading
            label="Our Culture"
            title="Small team, high ownership."
            description="Every person on an engagement is a decision-maker, not a pass-through. That keeps feedback loops short and quality consistent."
          />
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel>Team</SectionLabel>
              <h2 className="mt-5 max-w-xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
                The people behind the work.
              </h2>
              <p className="mt-4 max-w-md text-muted leading-relaxed">
                A small, senior team working across design and engineering —
                every person is hands-on with the products we ship.
              </p>
            </div>
            <Reveal delay={0.1} className="shrink-0">
              <Button href="/team" variant="ghost" size="sm">
                Meet the team
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <SectionHeading label="Technology" title="The tools behind the work." />
          <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-5">
            {technologyStack.map((group, i) => (
              <Reveal key={group.category} delay={0.05 * i}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-ink/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
