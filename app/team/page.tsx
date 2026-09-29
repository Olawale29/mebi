import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { team } from "@/data/team";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/team/TeamCard";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Team",
  description: "The people behind MEBI Technology.",
  path: "/team",
});

const values = [
  {
    title: "High ownership",
    description: "Every person on an engagement is a decision-maker, not a pass-through.",
  },
  {
    title: "Cross-disciplinary",
    description: "Designers and engineers work as one team, not handoffs between departments.",
  },
  {
    title: "Direct communication",
    description: "You work with the people actually building the product, not an account layer.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        label="Team"
        title="The people behind the work."
        description="A small, senior team working across design and engineering — every person here is hands-on with the products we ship."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          {team.length === 0 ? (
            <Reveal>
              <div className="rounded-2xl border border-ink/10 bg-white p-10 text-center md:p-16">
                <p className="text-lg text-muted leading-relaxed">
                  Team profiles are being prepared and will appear here soon.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 lg:grid-cols-4">
              {team.map((member, i) => (
                <Reveal key={member.name} delay={0.05 * i}>
                  <TeamCard member={member} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-ink/10 py-24 md:py-32">
        <Container>
          <SectionHeading label="How We Work Together" title="Small team, high ownership." />
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.06 * i}>
                <div className="border-t border-ink/10 pt-6">
                  <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
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
