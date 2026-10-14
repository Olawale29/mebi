import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

// Pulls live from data/services.ts so this never drifts out of sync with
// the rate card — if pricing changes there, it updates here automatically.
const featuredSlugs: { slug: string; label: string }[] = [
  { slug: "web-development", label: "Websites" },
  { slug: "software-development", label: "Software & Apps" },
  { slug: "ui-ux-design", label: "UI/UX Design" },
];

const featured = featuredSlugs
  .map(({ slug, label }) => {
    const service = services.find((s) => s.slug === slug);
    return service ? { ...service, label } : null;
  })
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

export function PricingHook() {
  return (
    <section className="border-t border-ink/10 bg-gradient-to-b from-purple-soft/25 via-purple-soft/8 to-transparent py-10 md:py-14">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-semibold tracking-[-0.01em] text-ink md:text-base">
              Real prices. No need to call first.
            </p>

            <div className="grid grid-cols-3 gap-6 md:gap-10">
              {featured.map((item) => (
                <div key={item.slug} className="flex flex-col">
                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted/80">
                    {item.label}
                  </span>
                  <span className="mt-1">
                    <span className="text-xs text-muted">from </span>
                    <span className="text-lg font-semibold tracking-[-0.01em] text-primary md:text-xl">
                      {item.startingPrice}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <Button
              href="/#services"
              variant="ghost"
              size="sm"
              className="shrink-0 self-start md:self-auto"
            >
              See full pricing
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
