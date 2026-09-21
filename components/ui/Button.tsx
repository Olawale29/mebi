import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline-light" | "light";
  size?: "sm" | "md";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  arrow?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 font-medium tracking-[-0.01em] transition-all duration-300 rounded-full disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<string, string> = {
  primary: "bg-ink text-white hover:bg-primary",
  secondary: "bg-primary text-white hover:bg-primary-dark",
  ghost: "bg-transparent text-ink hover:text-primary",
  "outline-light":
    "border border-white/30 text-white hover:bg-white hover:text-ink",
  light: "bg-white text-primary hover:bg-bg",
};

const sizes: Record<string, string> = {
  sm: "text-sm px-5 py-2.5",
  md: "text-[15px] px-7 py-4",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  disabled,
  arrow = true,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
