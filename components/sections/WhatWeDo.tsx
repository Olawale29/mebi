import Link from "next/link";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function WhatWeDo() {
  return (
    <section
      className="border-t border-ink/10 bg-gradient-to-b from-purple-soft/25 via-purple-soft/8 to-transparent py-24 md:py-32"
      id="services"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            label="Services"
            title="Built around how your business actually works."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/services" variant="ghost" size="sm">
              View all services
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <Carousel itemClassName="w-[280px] sm:w-[320px]">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-primary/20 bg-surface-tint p-7 transition-colors hover:border-primary/40"
              >
                <span className="text-sm font-semibold text-primary">{service.number}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>
                <div className="mt-5 border-t border-primary/15 pt-4">
                  <span className="block text-[11px] uppercase tracking-[0.1em] text-muted/70">
                    Starting from
                  </span>
                  <span className="text-xl font-semibold text-primary">
                    {service.startingPrice}
                    {service.startingPeriod && (
                      <span className="text-sm font-normal text-muted">{service.startingPeriod}</span>
                    )}
                  </span>
                </div>
              </Link>
            ))}
          </Carousel>
        </Reveal>
      </Container>
    </section>
  );
}
