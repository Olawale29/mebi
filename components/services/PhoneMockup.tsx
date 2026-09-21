import { cn } from "@/lib/utils";

export function PhoneMockup({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div
      className={cn(
        "mx-auto w-[260px] overflow-hidden rounded-[2.5rem] border-[8px] shadow-[0_40px_80px_-30px_rgba(18,14,36,0.35)]",
        dark ? "border-surface-dark-2 bg-surface-dark" : "border-ink bg-white",
        className
      )}
    >
      <div className="flex items-center justify-between px-6 pt-4 text-[10px] font-medium">
        <span className={dark ? "text-white/70" : "text-ink/70"}>9:41</span>
        <span className={dark ? "text-white/40" : "text-ink/30"}>●●●</span>
      </div>

      <div className="px-5 pt-6 pb-8">
        <p className={cn("text-xs", dark ? "text-white/50" : "text-muted")}>Good morning</p>
        <p className={cn("mt-1 text-lg font-semibold", dark ? "text-white" : "text-ink")}>
          Your dashboard
        </p>

        <div
          className={cn(
            "mt-5 rounded-2xl p-4",
            dark ? "bg-white/[0.06]" : "bg-primary-light/15"
          )}
        >
          <p className={cn("text-xs", dark ? "text-white/50" : "text-muted")}>Balance</p>
          <p className={cn("mt-1 text-2xl font-semibold", dark ? "text-white" : "text-ink")}>
            ••••••
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "flex items-center justify-between rounded-xl px-3.5 py-3",
                dark ? "bg-white/[0.04]" : "bg-bg"
              )}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-7 w-7 rounded-full bg-accent/30" />
                <span className={cn("h-2 w-16 rounded-full", dark ? "bg-white/20" : "bg-ink/10")} />
              </div>
              <span className={cn("h-2 w-8 rounded-full", dark ? "bg-white/15" : "bg-ink/10")} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-around">
          {["Home", "Cards", "Activity", "You"].map((label, i) => (
            <span
              key={label}
              className={cn(
                "text-[10px] font-medium",
                i === 0 ? "text-accent" : dark ? "text-white/30" : "text-muted/50"
              )}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
