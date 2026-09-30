import { cn } from "@/lib/utils";

const base =
  "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light/40 via-purple-soft/50 to-accent/20";

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/60 bg-white/90 shadow-[0_20px_40px_-15px_rgba(18,14,36,0.25)] backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function FintechCover() {
  return (
    <div className={base}>
      <Card className="w-[62%] max-w-[220px] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
            Portfolio
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
        <div className="mt-3 flex items-end gap-1.5">
          {[35, 60, 45, 80, 55, 95, 40].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className={cn("w-full rounded-sm", i === 5 ? "bg-accent" : "bg-primary/20")}
            />
          ))}
        </div>
        <div className="mt-3 h-8 w-full">
          <svg viewBox="0 0 200 40" className="h-full w-full" fill="none">
            <path
              d="M0 30 C 30 8, 55 35, 85 18 S 140 4, 200 15"
              stroke="#3816A9"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </Card>
    </div>
  );
}

function LogisticsCover() {
  return (
    <div className={base}>
      <Card className="w-[68%] max-w-[240px] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
            Live Routes
          </span>
          <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[8px] font-semibold text-accent">
            Active
          </span>
        </div>
        <svg viewBox="0 0 220 90" className="mt-3 h-20 w-full" fill="none">
          <path
            d="M10 70 C 50 20, 90 80, 130 35 S 190 10, 210 25"
            stroke="#9F8DE1"
            strokeWidth="2"
            strokeDasharray="4 5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="70" r="4" fill="#3816A9" />
          <circle cx="130" cy="35" r="4" fill="#3816A9" />
          <circle cx="210" cy="25" r="5" fill="#4DBEAB" />
        </svg>
        <div className="mt-2 flex justify-between text-[8px] text-muted">
          <span>Depot</span>
          <span>Hub</span>
          <span>Delivered</span>
        </div>
      </Card>
    </div>
  );
}

function HealthcareCover() {
  return (
    <div className={base}>
      <Card className="w-[54%] max-w-[190px] p-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
          Upcoming
        </p>
        <div className="mt-3 space-y-2">
          {["Mon 10:30", "Wed 14:00"].map((slot, i) => (
            <div
              key={slot}
              className={cn(
                "flex items-center justify-between rounded-lg px-2.5 py-2 text-[9px]",
                i === 0 ? "bg-primary/10" : "bg-bg"
              )}
            >
              <span className="text-ink/80">{slot}</span>
              <span className="h-4 w-4 rounded-full bg-accent/30" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-lg bg-accent/10 px-2.5 py-2">
          <span className="text-[9px] text-accent">Confirmed</span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[8px] text-white">
            ✓
          </span>
        </div>
      </Card>
    </div>
  );
}

function EcommerceCover() {
  return (
    <div className={base}>
      <Card className="w-[64%] max-w-[220px] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
            Storefront
          </span>
          <span className="text-[9px] font-semibold text-ink">Cart · 2</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-square rounded-md bg-primary-light/25" />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="h-2 w-16 rounded-full bg-ink/10" />
          <span className="rounded-full bg-ink px-2.5 py-1 text-[8px] text-white">Checkout</span>
        </div>
      </Card>
    </div>
  );
}

function BusinessOpsCover() {
  const columns = [
    { label: "To Do", items: 2 },
    { label: "In Progress", items: 1 },
    { label: "Done", items: 3 },
  ];
  return (
    <div className={base}>
      <Card className="w-[70%] max-w-[260px] p-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
          Workflow
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {columns.map((col) => (
            <div key={col.label}>
              <p className="text-[8px] font-medium text-muted">{col.label}</p>
              <div className="mt-1.5 space-y-1.5">
                {Array.from({ length: col.items }).map((_, i) => (
                  <div key={i} className="h-5 rounded-md bg-primary/10" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

const covers: Record<string, React.ComponentType> = {
  "fintech-platform": FintechCover,
  "logistics-platform": LogisticsCover,
  "healthcare-product": HealthcareCover,
  "ecommerce-experience": EcommerceCover,
  "business-management-platform": BusinessOpsCover,
};

export function ProjectCover({
  slug,
  className,
  size = "md",
}: {
  slug: string;
  className?: string;
  size?: "md" | "lg";
}) {
  const Cover = covers[slug];

  return (
    <div className={cn("h-full w-full overflow-hidden", className)}>
      <div className={cn("h-full w-full", size === "lg" && "scale-[1.7]")}>
        {Cover ? (
          <Cover />
        ) : (
          <div className={base}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark/60">
              {slug}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
