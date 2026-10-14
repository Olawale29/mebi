import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessCarousel } from "@/components/process/ProcessCarousel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section className="border-t border-ink/10 py-24 md:py-32" id="process">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            label="How We Work"
            title="Clear steps. You’re involved all the way."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/process" variant="ghost" size="sm">
              See the full process
            </Button>
          </Reveal>
        </div>

        <div className="mt-14">
          <ProcessCarousel />
        </div>
      </Container>
    </section>
  );
}
