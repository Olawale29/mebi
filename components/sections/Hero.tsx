"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface-dark via-primary-dark to-primary pt-40 pb-24 text-white md:pt-52 md:pb-32">
      <HeroTriangles />
      <NetworkGraphic />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Where innovation meets possibilities
              </span>
            </motion.div>

            <h1 className="text-balance text-[52px] font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-[68px] lg:text-[84px]">
              {["Technology", "partners who", "actually pay", "attention."].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.2em] -mb-[0.2em]">
                  <motion.span
                    className="block"
                    initial={reduceMotion ? undefined : { y: "110%" }}
                    animate={reduceMotion ? undefined : { y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-8 max-w-lg text-balance text-lg leading-relaxed text-white/75 md:text-xl"
            >
              We design, build, and support the software, cloud, and
              automation systems that help organizations move faster — with
              the kind of hands-on partnership most firms outgrow after the
              sales call.
            </motion.p>

            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" variant="light" size="md">
                Book a Free Consultation
              </Button>
              <Button href="#what-we-do" variant="outline-light" size="md" arrow={false}>
                See What We Do ↓
              </Button>
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}

function HeroTriangles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -right-10 -bottom-20 h-[340px] w-[340px] bg-primary-light/70"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute right-28 -bottom-14 h-[190px] w-[190px] bg-accent"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />
    </div>
  );
}

function NetworkGraphic() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 300"
      className="pointer-events-none absolute -right-10 top-0 h-full w-[min(640px,80%)] opacity-40"
      fill="none"
    >
      <g stroke="#9F8DE1" strokeOpacity="0.6">
        <path d="M40 220L120 140 200 190 290 90 370 150" />
        <path d="M120 140L150 50 290 90" />
        <path d="M200 190L260 270 370 150" />
        <path d="M40 220L90 280 200 190" />
      </g>
      <g fill="#9F8DE1">
        <circle cx="40" cy="220" r="5" />
        <circle cx="150" cy="50" r="4" />
        <circle cx="260" cy="270" r="5" />
        <circle cx="90" cy="280" r="4" />
      </g>
      <g fill="#4DBEAB">
        <circle cx="120" cy="140" r="7" />
        <circle cx="290" cy="90" r="8" />
        <circle cx="370" cy="150" r="5" />
        <circle cx="200" cy="190" r="5" />
      </g>
    </svg>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[560px] lg:max-w-none">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, x: 40, y: -10 }}
        animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
        className="absolute left-1/2 top-0 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-white p-5 shadow-[0_30px_60px_-20px_rgba(8,6,28,0.5)] lg:left-0 lg:translate-x-0"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary-light" />
            <span className="h-2.5 w-2.5 rounded-full bg-purple-soft" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            Overview
          </span>
        </div>
        <div className="mt-5 flex items-end gap-2">
          {[40, 65, 30, 80, 55, 95, 45].map((h, i) => (
            <motion.span
              key={i}
              initial={reduceMotion ? undefined : { height: 0 }}
              animate={reduceMotion ? undefined : { height: `${h}%` }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.05, ease }}
              style={{ height: `${h}%` }}
              className={`w-full rounded-sm ${
                i === 5 ? "bg-accent" : "bg-primary/15"
              }`}
            />
          ))}
        </div>
        <div className="mt-4 h-16 w-full">
          <svg viewBox="0 0 200 50" className="h-full w-full" fill="none">
            <motion.path
              d="M0 38 C 30 10, 55 45, 85 25 S 140 5, 200 20"
              stroke="#3816A9"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={reduceMotion ? undefined : { pathLength: 0 }}
              animate={reduceMotion ? undefined : { pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.9, ease }}
            />
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, x: -30, y: 20 }}
        animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className="absolute bottom-0 right-0 w-[52%] rounded-2xl border border-white/15 bg-surface-dark-2 p-5 text-white shadow-[0_30px_60px_-20px_rgba(8,6,28,0.5)] lg:bottom-6 lg:right-2"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
          Automation
        </p>
        <div className="mt-4 space-y-2.5">
          <div className="h-2.5 w-4/5 rounded-full bg-white/15" />
          <div className="h-2.5 w-3/5 rounded-full bg-white/15" />
        </div>
        <div className="mt-5 flex items-center justify-between rounded-xl bg-white/5 p-3">
          <span className="text-xs text-white/70">Workflow automated</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] text-surface-dark">
            ✓
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.85 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.8, ease }}
        className="absolute left-0 top-1/3 flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2.5 shadow-[0_20px_40px_-15px_rgba(8,6,28,0.4)] lg:left-4"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-xs font-medium text-ink">Systems integrated</span>
      </motion.div>
    </div>
  );
}
