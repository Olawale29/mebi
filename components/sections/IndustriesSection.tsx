import { industries } from "@/data/industries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function IndustriesSection() {
  return (
    <section className="border-t border-ink/10 bg-surface-dark py-24 text-white md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            dark
            label="Industries We Serve"
            title="Built for the sectors that can't afford generic solutions."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/industries" variant="outline-light" size="sm">
              Find Your Industry
            </Button>
          </Reveal>
        </div>

        <div className="mt-14">
          <Carousel dark itemClassName="w-[260px] sm:w-[300px]">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {industry.description}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
