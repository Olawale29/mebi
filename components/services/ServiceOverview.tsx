import type { Service } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <Reveal>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                What we solve
              </h2>
              <ul className="mt-5 space-y-4">
                {service.whatWeSolve.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-4 text-ink/80 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                What we deliver
              </h2>
              <ul className="mt-5 space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-4 text-ink/80 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Capabilities
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.capabilities.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-8 border-t border-ink/10 pt-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Typical engagement
                </h3>
                <p className="mt-2 text-ink/80">{service.typicalEngagement}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
