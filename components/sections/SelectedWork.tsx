import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCover } from "@/components/projects/ProjectCover";

export function SelectedWork() {
  return (
    <section className="py-24 md:py-32" id="work">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            label="Selected Work"
            title="Digital experiences designed around real business problems."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/work" variant="ghost" size="sm">
              View all work
            </Button>
          </Reveal>
        </div>

        <div className="mt-14">
          <Carousel itemClassName="w-[300px] sm:w-[380px]">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/20"
              >
                <div className="h-52 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <ProjectCover slug={project.slug} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-sm text-muted">{project.index}</span>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
                    View Case Study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
