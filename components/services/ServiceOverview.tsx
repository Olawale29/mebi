import type { Service } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className={`grid grid-cols-1 gap-12 ${service.builtWith ? "lg:grid-cols-2" : ""} lg:gap-16`}>
          <Reveal>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                What this includes
              </h2>
              <ul className="mt-5 space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-4 text-ink/80 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {service.builtWith && (
            <Reveal delay={0.08}>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Built with
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.builtWith.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
