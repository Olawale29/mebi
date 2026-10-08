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
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden
                />
                Where innovation meets possibilities
              </span>
            </motion.div>

            <h1 className="text-balance text-[52px] font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-[68px] lg:text-[84px]">
              {["Technology", "partners who", "actually pay", "attention."].map(
                (line, i) => (
                  <span
                    key={line}
                    className="block overflow-hidden pb-[0.2em] -mb-[0.2em]"
                  >
                    <motion.span
                      className="block"
                      initial={reduceMotion ? undefined : { y: "110%" }}
                      animate={reduceMotion ? undefined : { y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1 + i * 0.08,
                        ease,
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ),
              )}
            </h1>

            <motion.p
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-8 max-w-lg text-balance text-lg leading-relaxed text-white/75 md:text-xl"
            >
              We design, build, and support the software, cloud, and automation
              systems that help organizations move faster. From your first idea
              to support after launch, we work closely with you to get things
              right.
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
              <Button
                href="#what-we-do"
                variant="outline-light"
                size="md"
                arrow={false}
              >
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
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        className="absolute -right-10 -bottom-20 h-[340px] w-[340px] bg-primary-light/70"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        animate={reduceMotion ? undefined : { x: [0, -8, 0], y: [0, -12, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-28 -bottom-14 h-[190px] w-[190px] bg-accent"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        animate={reduceMotion ? undefined : { x: [0, 6, 0], y: [0, -8, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

function NetworkGraphic() {
  const reduceMotion = useReducedMotion();

  const paths = [
    "M40 220L120 140 200 190 290 90 370 150",
    "M120 140L150 50 290 90",
    "M200 190L260 270 370 150",
    "M40 220L90 280 200 190",
  ];

  const nodes = [
    { x: 40, y: 220, r: 5, accent: false },
    { x: 150, y: 50, r: 4, accent: false },
    { x: 260, y: 270, r: 5, accent: false },
    { x: 90, y: 280, r: 4, accent: false },
    { x: 120, y: 140, r: 7, accent: true },
    { x: 290, y: 90, r: 8, accent: true },
    { x: 370, y: 150, r: 5, accent: true },
    { x: 200, y: 190, r: 5, accent: true },
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      className="pointer-events-none absolute -right-10 top-0 h-full w-[min(640px,80%)] opacity-40"
      fill="none"
    >
      {/* Faint connections stay visible. */}
      <g stroke="#9F8DE1" strokeOpacity="0.3">
        {paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      {/* Light travels along each connection. */}
      {!reduceMotion &&
        paths.map((d, i) => (
          <motion.path
            key={`signal-${i}`}
            d={d}
            stroke="#4DBEAB"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 0.18, 0.18, 0],
              pathOffset: [0, 0.15, 0.82, 1],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 3.5,
              delay: i * 0.8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear",
            }}
          />
        ))}

      {nodes.map(({ x, y, r, accent }, i) => (
        <g key={`${x}-${y}`}>
          {/* Soft pulse around the active nodes. */}
          {accent && !reduceMotion && (
            <motion.circle
              cx={x}
              cy={y}
              stroke="#4DBEAB"
              strokeWidth="1"
              initial={{ r, opacity: 0 }}
              animate={{
                r: [r, r + 12],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2.4,
                delay: i * 0.35,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeOut",
              }}
            />
          )}

          <motion.circle
            cx={x}
            cy={y}
            r={r}
            fill={accent ? "#4DBEAB" : "#9F8DE1"}
            initial={false}
            animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>
      ))}
    </svg>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  const bars = [40, 65, 30, 80, 55, 95, 45];

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[560px] lg:max-w-none">
      {/* Dashboard: entrance animation on the outer wrapper. */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, x: 40, y: -10 }}
        animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
        className="absolute left-1/2 top-0 w-[85%] -translate-x-1/2 lg:left-0 lg:translate-x-0"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={reduceMotion ? undefined : { scale: 1.025 }}
          className="rounded-2xl border border-white/10 bg-white p-5 shadow-[0_30px_60px_-20px_rgba(8,6,28,0.5)]"
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {["bg-primary-light", "bg-purple-soft", "bg-accent"].map(
                (color) => (
                  <span
                    key={color}
                    className={`h-2.5 w-2.5 rounded-full ${color}`}
                  />
                ),
              )}
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              Overview
            </span>
          </div>

          {/* A fixed height lets percentage-based bars render properly. */}
          <div aria-hidden="true" className="mt-5 flex h-28 items-end gap-2">
            {bars.map((height, i) => (
              <motion.span
                key={i}
                className={`flex-1 rounded-sm ${
                  i === 5 ? "bg-accent" : "bg-primary/15"
                }`}
                style={{ height: `${height}%` }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        height: [
                          `${height}%`,
                          `${Math.min(height + 12, 100)}%`,
                          `${Math.max(height - 8, 15)}%`,
                          `${height}%`,
                        ],
                      }
                }
                transition={{
                  duration: 5,
                  delay: i * 0.18,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div aria-hidden="true" className="mt-4 h-16 w-full">
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

              {/* A small signal travels along the chart. */}
              {!reduceMotion && (
                <motion.path
                  d="M0 38 C 30 10, 55 45, 85 25 S 140 5, 200 20"
                  stroke="#4DBEAB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0.08, 0.08, 0],
                    pathOffset: [0, 0.1, 0.92, 1],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear",
                  }}
                />
              )}
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Automation card. */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, x: -30, y: 20 }}
        animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className="absolute bottom-0 right-0 w-[52%] lg:bottom-6 lg:right-2"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={reduceMotion ? undefined : { scale: 1.035 }}
          className="rounded-2xl border border-white/15 bg-surface-dark-2 p-5 text-white shadow-[0_30px_60px_-20px_rgba(8,6,28,0.5)]"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
            Automation
          </p>

          <div aria-hidden="true" className="mt-4 space-y-2.5">
            {[80, 60].map((width, i) => (
              <div
                key={width}
                className="h-2.5 overflow-hidden rounded-full bg-white/10"
                style={{ width: `${width}%` }}
              >
                <motion.div
                  className="h-full origin-left rounded-full bg-white/25"
                  initial={false}
                  animate={
                    reduceMotion ? undefined : { scaleX: [0.15, 1, 1, 0.15] }
                  }
                  transition={{
                    duration: 5,
                    times: [0, 0.45, 0.85, 1],
                    delay: i * 0.25,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-2 rounded-xl bg-white/5 p-3">
            <span className="text-xs text-white/70">Workflow automated</span>

            <motion.span
              aria-hidden="true"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-surface-dark"
              animate={reduceMotion ? undefined : { scale: [1, 1, 1.18, 1] }}
              transition={{
                duration: 6,
                times: [0, 0.45, 0.55, 1],
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                <motion.path
                  d="M3 8L6.5 11.5L13 4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={false}
                  animate={
                    reduceMotion ? undefined : { pathLength: [0, 0, 1, 1] }
                  }
                  transition={{
                    duration: 6,
                    times: [0, 0.4, 0.55, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      {/* Integration badge. */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.85 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.8, ease }}
        className="absolute left-0 top-1/3 lg:left-4"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={reduceMotion ? undefined : { y: -4, scale: 1.04 }}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2.5 shadow-[0_20px_40px_-15px_rgba(8,6,28,0.4)]"
        >
          <span aria-hidden="true" className="relative flex h-2 w-2">
            {!reduceMotion && (
              <motion.span
                className="absolute inset-0 rounded-full bg-accent"
                animate={{
                  scale: [1, 2.8],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeOut",
                }}
              />
            )}
            <span className="relative h-2 w-2 rounded-full bg-accent" />
          </span>

          <span className="text-xs font-medium text-ink">
            Systems integrated
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
