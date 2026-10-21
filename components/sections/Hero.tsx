"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroGlobe } from "./HeroGlobe";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-surface-dark via-primary-dark to-primary pt-40 pb-24 text-white md:pt-52 md:pb-32"
    >
      <HeroTriangles />
      <HeroGlobe anchorRef={globeRef} sectionRef={sectionRef} />

      <Container className="relative z-10">
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

          {/* The globe canvas is centred on this empty slot. On small screens it
              sits dimmed behind the headline instead of pushing below it. */}
          <div
            ref={globeRef}
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 top-28 h-[360px] w-[360px] sm:-right-16 sm:h-[460px] sm:w-[460px] lg:pointer-events-auto lg:relative lg:right-auto lg:top-auto lg:h-[560px] lg:w-full"
          />
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
