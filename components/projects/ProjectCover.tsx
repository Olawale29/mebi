import Image from "next/image";
import { cn } from "@/lib/utils";

const base =
  "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light/40 via-purple-soft/50 to-accent/20";

export function ProjectCover({
  slug,
  image,
  className,
  size = "md",
}: {
  slug: string;
  image?: string;
  className?: string;
  size?: "md" | "lg";
}) {
  if (image) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden", className)}>
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className={cn("h-full w-full overflow-hidden", className)}>
      <div className={cn("h-full w-full", size === "lg" && "scale-[1.7]")}>
        <div className={base}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark/60">
            {slug}
          </span>
        </div>
      </div>
    </div>
  );
}
