import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { team, getTeamMemberBySlug } from "@/data/team";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member)
    return buildMetadata({
      title: "Team Member Not Found",
      description: "This team member could not be found.",
      path: "/team",
    });

  return buildMetadata({
    title: member.name,
    description: `${member.role} at MEBI Technology.`,
    path: `/team/${member.slug}`,
  });
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return notFound();

  const currentIndex = team.findIndex((m) => m.slug === slug);
  const next = team[(currentIndex + 1) % team.length];

  const initials = member.name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("");

  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <Container>
          <Reveal>
            <Button href="/team" variant="ghost" size="sm">
              ← Back to Team
            </Button>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
            <Reveal delay={0.05}>
              <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5 lg:max-w-none">
                {member.photo ? (
                  <div
                    className="absolute inset-x-0 top-0 h-[125%] origin-top"
                    style={
                      member.frame
                        ? {
                            transform: `translateY(${member.frame.y}%) scale(${member.frame.scale})`,
                          }
                        : undefined
                    }
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 320px, 90vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-purple-soft/30">
                    <span className="text-4xl font-semibold text-primary-dark/50">
                      {initials}
                    </span>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionLabel>{member.role}</SectionLabel>
              <h1 className="mt-5 text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[46px]">
                {member.name}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
                {member.bio}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-16">
        <Container className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Next up
            </p>
            <p className="mt-1 text-2xl font-semibold text-ink">{next.name}</p>
          </div>
          <Button href={`/team/${next.slug}`} variant="ghost" size="sm">
            View
          </Button>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
