import Link from "next/link";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal } from "@/components/ui/Reveal";

export function WhatWeDo() {
  return (
    <section className="border-t border-ink/10 py-24 md:py-32" id="what-we-do">
      <Container>
        <SectionHeading label="What We Do" title="Four ways we help you move faster." />

        <Reveal delay={0.1} className="mt-14">
          <Carousel itemClassName="w-[300px] sm:w-[360px]">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-primary/20 bg-surface-tint p-8 transition-colors hover:border-primary/40"
              >
                <span className="text-sm font-semibold text-primary">{service.number}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  Explore
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </Carousel>
        </Reveal>
      </Container>
    </section>
  );
}
