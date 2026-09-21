import { cn } from "@/lib/utils";

export function BrowserMockup({
  title = "product.mebi.dev",
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_40px_80px_-30px_rgba(18,14,36,0.25)]",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-ink/10 bg-bg px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-primary-light" />
          <span className="h-2.5 w-2.5 rounded-full bg-purple-soft" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </div>
        <span className="mx-auto rounded-full bg-white px-4 py-1 text-xs text-muted">
          {title}
        </span>
      </div>
      <div className="p-6 md:p-8">{children}</div>
    </div>
  );
}

export function DashboardContent() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr]">
      <div className="hidden flex-col gap-2 md:flex">
        {["Overview", "Projects", "Analytics", "Team", "Settings"].map((item, i) => (
          <span
            key={item}
            className={cn(
              "rounded-lg px-3 py-2.5 text-sm",
              i === 0 ? "bg-primary text-white" : "text-muted"
            )}
          >
            {item}
          </span>
        ))}
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4">
          {["Revenue", "Active Users", "Conversion"].map((label) => (
            <div key={label} className="rounded-xl border border-ink/10 p-4">
              <p className="text-xs text-muted">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-ink">—</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-40 items-end gap-2 rounded-xl border border-ink/10 p-4">
          {[30, 55, 40, 70, 60, 85, 50, 90, 65].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className={cn("w-full rounded-sm", i === 7 ? "bg-accent" : "bg-primary/15")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
