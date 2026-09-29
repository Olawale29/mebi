"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

export function ProcessInteractive({ dark = false }: { dark?: boolean }) {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
      <div>
        {processSteps.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.number}
              onClick={() => setActive(i)}
              className={cn(
                "flex w-full items-center gap-6 border-t py-6 text-left transition-colors first:border-t-0",
                dark ? "border-white/10" : "border-ink/10"
              )}
              aria-pressed={isActive}
            >
              <span
                className={cn(
                  "text-sm font-medium",
                  isActive ? (dark ? "text-accent" : "text-primary") : dark ? "text-white/40" : "text-muted"
                )}
              >
                {s.number}
              </span>
              <span
                className={cn(
                  "text-2xl font-semibold tracking-[-0.01em] transition-colors md:text-3xl",
                  isActive ? (dark ? "text-white" : "text-ink") : dark ? "text-white/40" : "text-ink/40"
                )}
              >
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className={cn("rounded-2xl border p-8 md:p-10", dark ? "border-white/10 bg-white/[0.03]" : "border-ink/10 bg-white")}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={cn("text-6xl font-semibold tracking-[-0.02em] md:text-8xl", dark ? "text-white/15" : "text-ink/10")}>
              {step.number}
            </span>
            <h3 className={cn("mt-6 text-2xl font-semibold tracking-[-0.01em] md:text-3xl", dark ? "text-white" : "text-ink")}>
              {step.title}
            </h3>
            <p className={cn("mt-4 leading-relaxed", dark ? "text-white/65" : "text-muted")}>
              {step.description}
            </p>
            <div className="mt-8 flex gap-2">
              {processSteps.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors",
                    i === active ? "bg-accent" : dark ? "bg-white/10" : "bg-ink/10"
                  )}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
