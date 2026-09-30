import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { projects, getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return projects.map((p) => ({ project: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}): Promise<Metadata> {
  const { project: slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project)
    return buildMetadata({
      title: "Project Not Found",
      description: "This project could not be found.",
      path: "/work",
    });

  return buildMetadata({
    title: project.name,
    description: project.description,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <Container>
          {project.isPlaceholder && (
            <Reveal>
              <span className="mb-6 inline-block rounded-full bg-purple-soft/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary-dark">
                Illustrative case study
              </span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <SectionLabel>{project.industry}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-3xl text-balance text-[42px] font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-[56px] lg:text-[68px]">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-balance text-lg text-muted md:text-xl">
              {project.description}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <Reveal>
            <div className="h-[340px] w-full overflow-hidden rounded-2xl md:h-[480px]">
              <ProjectCover slug={project.slug} size="lg" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-20">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Industry</p>
              <p className="mt-2 text-ink">{project.industry}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Services</p>
              <p className="mt-2 text-ink">{project.services.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Timeline</p>
              <p className="mt-2 text-ink">{project.timeline}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Technology</p>
              <p className="mt-2 text-ink">{project.technology.join(", ")}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionLabel>The Challenge</SectionLabel>
              <p className="mt-5 text-balance text-2xl font-medium leading-relaxed text-ink md:text-3xl">
                {project.challenge}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionLabel>The Approach</SectionLabel>
              <ul className="mt-5 space-y-5">
                {project.approach.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-5 text-muted leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {project.results && project.results.length > 0 && (
        <section className="border-t border-ink/10 py-20 md:py-28">
          <Container>
            <SectionLabel>Results</SectionLabel>
            <ul className="mt-6 space-y-3">
              {project.results.map((r) => (
                <li key={r} className="text-lg text-ink/80">
                  {r}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="border-t border-ink/10 py-16">
        <Container className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Next project
            </p>
            <p className="mt-1 text-2xl font-semibold text-ink">{next.name}</p>
          </div>
          <Button href={`/work/${next.slug}`} variant="ghost" size="sm">
            View
          </Button>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
