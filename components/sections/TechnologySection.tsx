import { technologyStack } from "@/data/technology";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function TechnologySection() {
  const allItems = technologyStack.flatMap((group) => group.items);

  return (
    <section className="overflow-hidden bg-surface-dark py-24 text-white md:py-32">
      <Container>
        <SectionHeading
          dark
          label="Technology"
          title="Built with modern technology."
          description="We choose technology based on what the product actually needs — not what's trending."
        />

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-5">
          {technologyStack.map((group, i) => (
            <Reveal key={group.category} delay={0.06 * i}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-lg font-medium text-white/85">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>

      <div className="relative mt-20 border-t border-white/10 py-8">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...allItems, ...allItems].map((item, i) => (
            <span key={i} className="text-2xl font-medium text-white/20 md:text-3xl">
              {item} <span className="text-accent/60">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
