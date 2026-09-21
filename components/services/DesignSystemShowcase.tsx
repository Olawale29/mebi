export function DesignSystemShowcase() {
  const swatches = [
    { name: "Primary", className: "bg-primary" },
    { name: "Primary Dark", className: "bg-primary-dark" },
    { name: "Primary Light", className: "bg-primary-light" },
    { name: "Purple Soft", className: "bg-purple-soft" },
    { name: "Accent", className: "bg-accent" },
    { name: "Ink", className: "bg-ink" },
  ];

  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_40px_80px_-30px_rgba(18,14,36,0.2)] md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        Design System
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {swatches.map((s) => (
          <div key={s.name}>
            <div className={`h-14 w-full rounded-lg ${s.className}`} />
            <p className="mt-2 text-[11px] text-muted">{s.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-muted">Typography</p>
          <p className="text-3xl font-semibold text-ink">Aa</p>
          <p className="mt-1 text-sm text-muted">Plus Jakarta Sans — 400 / 600 / 700</p>
        </div>
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-muted">Components</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-ink px-5 py-2.5 text-sm text-white">Button</span>
            <span className="rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink">
              Secondary
            </span>
            <span className="rounded-full bg-accent/15 px-4 py-1.5 text-xs text-accent">
              Badge
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {["Card One", "Card Two", "Card Three"].map((label) => (
          <div key={label} className="rounded-xl border border-ink/10 p-4">
            <div className="h-16 w-full rounded-lg bg-purple-soft/40" />
            <p className="mt-3 text-sm font-medium text-ink">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
