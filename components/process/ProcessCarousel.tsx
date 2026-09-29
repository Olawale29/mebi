import { processSteps } from "@/data/process";
import { Carousel } from "@/components/ui/Carousel";
import { cn } from "@/lib/utils";

export function ProcessCarousel({ dark = false }: { dark?: boolean }) {
  return (
    <Carousel dark={dark} itemClassName="w-[260px] sm:w-[300px]">
      {processSteps.map((step) => (
        <div
          key={step.number}
          className={cn(
            "flex h-full flex-col rounded-2xl border p-7",
            dark ? "border-white/10 bg-white/[0.03]" : "border-ink/10 bg-white"
          )}
        >
          <span className={cn("text-4xl font-semibold tracking-[-0.02em]", dark ? "text-white/20" : "text-ink/15")}>
            {step.number}
          </span>
          <h3 className={cn("mt-5 text-xl font-semibold tracking-[-0.01em]", dark ? "text-white" : "text-ink")}>
            {step.title}
          </h3>
          <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-white/60" : "text-muted")}>
            {step.description}
          </p>
        </div>
      ))}
    </Carousel>
  );
}
