import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type PriceItem = {
  label: string;
  price: string;
};

const prices: PriceItem[] = [
  { label: "Websites", price: "₦450K" },
  { label: "Apps", price: "₦2M" },
  { label: "Design", price: "₦100K" },
];

export function PricingHook() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-dark to-surface-dark-2 py-6 text-white md:py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary-light/10 blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Eyebrow */}
            <p className="text-sm font-semibold tracking-[-0.01em] text-white md:text-base">
              Did you know you can build a
            </p>

            {/* Price list — 3 items, no scroll */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {prices.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/55">
                    {item.label}
                  </span>
                  <span className="mt-1 flex flex-col md:block">
                    <span className="text-xs font-normal text-accent">
                      from
                    </span>
                    <span className="text-lg font-semibold tracking-[-0.01em] text-white md:ml-1.5 md:inline md:text-xl">
                      {item.price}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom line + button */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
              <p className="text-sm font-semibold tracking-[-0.01em] text-white md:text-base">
                here at MEBI?
              </p>
              <Button
                href="/#services"
                variant="outline-light"
                size="sm"
                className="self-start md:self-auto"
              >
                See full pricing
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
