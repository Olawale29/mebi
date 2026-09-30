import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "accent";
}) {
  const tones: Record<string, string> = {
    light: "border-primary/15 text-ink/70 bg-surface-tint",
    dark: "border-white/15 text-white/80 bg-white/5",
    accent: "border-accent/30 text-accent bg-accent/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.12em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
