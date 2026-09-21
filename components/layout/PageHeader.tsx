import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  label,
  title,
  description,
  dark = false,
  className,
}: {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "pt-40 pb-20 md:pt-48 md:pb-28",
        dark ? "bg-surface-dark text-white" : "bg-bg text-ink",
        className
      )}
    >
      <Container>
        <div className="max-w-3xl">
          {label && (
            <Reveal>
              <SectionLabel className={cn("mb-6", dark && "text-purple-soft")}>
                {label}
              </SectionLabel>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-balance text-[42px] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-[56px] lg:text-[68px]">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p
                className={cn(
                  "mt-6 max-w-xl text-balance text-lg leading-relaxed md:text-xl",
                  dark ? "text-white/70" : "text-muted"
                )}
              >
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
