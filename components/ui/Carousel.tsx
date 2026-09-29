"use client";

import { useRef, useState, useEffect, Children } from "react";
import { cn } from "@/lib/utils";

export function Carousel({
  children,
  className,
  itemClassName,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  dark?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByAmount = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 560);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const count = Children.count(children);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child, i) => (
          <div
            key={i}
            className={cn("shrink-0 snap-start", itemClassName)}
            style={{ scrollSnapStop: "always" }}
          >
            {child}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByAmount(-1)}
            disabled={!canPrev}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border transition-colors disabled:opacity-30",
              dark
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-ink/15 text-ink hover:bg-ink hover:text-white"
            )}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByAmount(1)}
            disabled={!canNext}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border transition-colors disabled:opacity-30",
              dark
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-ink/15 text-ink hover:bg-ink hover:text-white"
            )}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
