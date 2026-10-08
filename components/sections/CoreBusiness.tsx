import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const today = {
  label: "Available now",
  title: "Tailored Digital Services",
  description:
    "Custom software engineering and digital transformation for growing businesses and enterprises.",
  items: [
    "Custom Web & Mobile Apps",
    "Business Process Automation",
    "Systems Integration & Consulting",
  ],
};

const tomorrow = {
  label: "In the pipeline",
  title: "MEBI SaaS & AI Products",
  description:
    "Scalable, MEBI-owned products aimed at solving day-to-day business friction.",
  items: [
    "Sales, Invoicing & Payment Processing",
    "Inventory, HR & CRM Systems",
    "Real-time Business Analytics & Automation",
  ],
};

export function CoreBusiness() {
  return (
    <section className="border-t border-ink/10 py-24 md:py-32" id="what-we-do">
      <Container>
        <SectionHeading
          label="What We Do"
          title={
            <>
              Software built for your business.
              <br />
              Don&apos;t worry, Our own products coming soon...
            </>
          }
          description="We bridge the gap between complex technology and everyday business execution, with tools that are easy to adopt and useful on day one."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-primary/20 bg-surface-tint p-8 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {today.label}
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.01em] text-ink">
                {today.title}
              </h3>

              <p className="mt-3 text-muted leading-relaxed">
                {today.description}
              </p>
              <ul className="mt-6 space-y-3">
                {today.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-surface-dark-2 p-8 text-white md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
              />
              <span className="relative text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {tomorrow.label}
              </span>
              <h3 className="relative mt-3 text-2xl font-semibold tracking-[-0.01em] text-white">
                {tomorrow.title}
              </h3>
              <p className="relative mt-3 text-white/70 leading-relaxed">
                {tomorrow.description}
              </p>
              <ul className="relative mt-6 space-y-3">
                {tomorrow.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
