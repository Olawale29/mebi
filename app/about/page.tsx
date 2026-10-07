import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { technologyStack } from "@/data/technology";
import { leadership } from "@/data/team";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TeamCard } from "@/components/team/TeamCard";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn why MEBI Technology exists, what we believe, and who's behind the firm building enterprise-grade technology solutions with a personal touch.",
  path: "/about",
});

const snapshot = [
  { label: "Timeline", value: "Active since 2026, built from day one on structured discipline" },
  { label: "Focus", value: "Depth over breadth — fewer clients, closer partnership" },
  { label: "Standard", value: "Enterprise-grade rigor from our very first project" },
];

const values = [
  { title: "Innovation", description: "We challenge convention to build practical solutions for tomorrow." },
  { title: "Mastery", description: "We pursue excellence through learning, expertise, and continuous improvement." },
  { title: "Partnership", description: "We believe lasting partnerships create sustainable success." },
  { title: "Adaptability", description: "We embrace change and evolve with every challenge." },
  { title: "Commitment", description: "We deliver excellence with consistency, accountability, and purpose." },
  { title: "Trust", description: "Integrity is at the heart of everything we do." },
];

const futureAreas = [
  {
    title: "Software & Cloud Engineering",
    description: "Full-stack development, modern web architectures, and cloud DevOps.",
  },
  {
    title: "Product Design (UI/UX) & Management",
    description: "User experience design, product strategy, and agile delivery frameworks.",
  },
  {
    title: "Artificial Intelligence & Data",
    description: "Applied machine learning, data engineering, and smart business analytics.",
  },
  {
    title: "Cybersecurity & Systems Architecture",
    description: "Threat detection, infrastructure security, and enterprise systems architecture.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About MEBI"
        title="We started MEBI because “generic” wasn't good enough."
        description="We saw organizations across sectors underserved by technology partners who treat every engagement as generic. We're building something different."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="mt-5 text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
                Fewer clients. Closer partnership.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  We started MEBI Technology because we saw organizations
                  across sectors underserved by technology partners who treat
                  every engagement as generic. We&apos;re building something
                  different — a firm that gives every client real attention,
                  and is ambitious enough to hold itself to the standards of
                  the best in the industry from day one.
                </p>
                <p>
                  What we may lack in years, we make up for in rigor: a
                  disciplined delivery methodology, deep technical expertise
                  across modern stacks, and leadership that is personally
                  invested in every project&apos;s outcome.
                </p>
                <p className="font-medium text-ink">
                  Every client today helps shape the firm MEBI becomes
                  tomorrow.
                </p>
              </div>

              <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
                {snapshot.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {s.label}
                    </dt>
                    <dd className="mt-2 text-sm text-ink/80 leading-relaxed">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-surface-dark py-24 text-white md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <Reveal>
              <SectionLabel className="text-purple-soft">Vision</SectionLabel>
              <p className="mt-5 text-balance text-2xl font-medium leading-relaxed text-white md:text-3xl">
                To be a leading global technology company that transforms
                lives and drives technological excellence — at the forefront
                of innovation, pushing the boundaries of what&apos;s possible.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionLabel className="text-purple-soft">Mission</SectionLabel>
              <p className="mt-5 text-balance text-2xl font-medium leading-relaxed text-white md:text-3xl">
                To empower minds, enrich lives, and transform the world
                through the limitless potential of technology. We believe
                every individual, business, and community deserves access to
                solutions that unlock new opportunities and drive real
                progress.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="mt-16 border-t border-white/10 pt-10 text-balance text-lg text-white/60">
              &ldquo;We are the present and the future, and we look forward to
              making the world a better place through technological
              expertise.&rdquo;
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-gradient-to-b from-purple-soft/20 via-purple-soft/5 to-transparent py-24 md:py-32">
        <Container>
          <SectionHeading label="Our Values" title="Creating lasting impact through technology." />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-primary/20 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.05 * i}>
                <div className="h-full bg-surface-tint p-8">
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel>Leadership Team</SectionLabel>
              <h2 className="mt-5 max-w-xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
                The people leading MEBI.
              </h2>
            </div>
            <Reveal delay={0.1} className="shrink-0">
              <Button href="/team" variant="ghost" size="sm">
                Meet the full team
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {leadership.map((member, i) => (
              <Reveal key={member.name} delay={0.06 * i}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <SectionHeading label="Technology" title="The tools behind the work." />
          <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4">
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

      <section className="border-t border-white/10 bg-surface-dark py-24 text-white md:py-32">
        <Container>
          <SectionLabel className="text-purple-soft">MEBI&apos;s Future</SectionLabel>
          <h2 className="mt-5 max-w-2xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[38px]">
            Empowerment through education and technical mastery.
          </h2>
          <p className="mt-4 max-w-2xl text-white/60 leading-relaxed">
            Our long-term roadmap includes expanding our ecosystem by building
            dedicated training facilities to empower the next generation of
            innovators with hands-on expertise across specialized tech fields.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {futureAreas.map((area, i) => (
              <Reveal key={area.title} delay={0.06 * i}>
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{area.description}</p>
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
