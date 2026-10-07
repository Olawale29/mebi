import type { PricingTier } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function PricingTiers({ tiers }: { tiers: PricingTier[] }) {
  const hasFeatures = tiers.some((t) => t.features.length > 0);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5",
        hasFeatures ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {tiers.map((tier, i) => (
        <Reveal key={tier.name} delay={0.05 * i}>
          <div
            className={cn(
              "flex h-full flex-col rounded-2xl border p-6",
              tier.highlight
                ? "border-primary bg-gradient-to-br from-primary via-primary-dark to-surface-dark-2 text-white"
                : "border-primary/20 bg-surface-tint"
            )}
          >
            <h3 className={cn("text-base font-semibold", tier.highlight ? "text-white" : "text-ink")}>
              {tier.name}
            </h3>
            <div className="mt-3">
              {tier.price !== "Custom quote" && tier.price !== "Custom" && (
                <span className={cn("text-xs", tier.highlight ? "text-white/60" : "text-muted")}>
                  {tier.period ? "" : "From"}
                </span>
              )}
              <p
                className={cn(
                  "text-2xl font-semibold tracking-[-0.02em]",
                  tier.highlight ? "text-white" : "text-primary"
                )}
              >
                {tier.price}
                {tier.period && (
                  <span className={cn("ml-1 text-sm font-normal", tier.highlight ? "text-white/60" : "text-muted")}>
                    / {tier.period.replace("per ", "")}
                  </span>
                )}
              </p>
            </div>
            {tier.features.length > 0 && (
              <ul className="mt-5 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex items-start gap-2 text-sm leading-relaxed",
                      tier.highlight ? "text-white/80" : "text-ink/75"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-1.5 h-1 w-1 shrink-0 rounded-full",
                        tier.highlight ? "bg-accent" : "bg-primary"
                      )}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
