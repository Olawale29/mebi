import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const disciplines = [
  {
    number: "01",
    title: "Product Design",
    items: ["UI/UX", "Research", "User flows", "Wireframes", "Design systems", "Prototyping"],
  },
  {
    number: "02",
    title: "Engineering",
    items: ["Web applications", "Mobile applications", "Custom software", "APIs", "Backend systems", "Integrations"],
  },
];

export function WhatWeDo() {
  return (
    <section className="border-t border-ink/10 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-4xl text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[58px]">
            Designing the experience.
            <br className="hidden sm:block" /> Engineering the product.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
          {disciplines.map((d, i) => (
            <Reveal key={d.number} delay={0.1 + i * 0.08}>
              <div className="border-t border-ink/10 pt-8">
                <span className="text-sm font-medium text-muted">{d.number}</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.01em] text-ink md:text-3xl">
                  {d.title}
                </h3>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                  {d.items.map((item) => (
                    <li key={item} className="text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
