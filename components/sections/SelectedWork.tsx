import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function SelectedWork() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 md:py-32" id="work">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            label="Selected Work"
            title="Digital experiences designed around real business problems."
          />
          <Reveal delay={0.15} className="shrink-0">
            <Button href="/work" variant="ghost" size="sm" className="whitespace-nowrap">
              View all work
            </Button>
          </Reveal>
        </div>

        <div className="mt-14">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
