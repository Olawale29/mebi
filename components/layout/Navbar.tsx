"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/data/nav";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // The homepage Hero is a dark, full-bleed gradient — the unscrolled nav
  // needs light text/logo there, unlike every other page's light header.
  const onDarkHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          animate={{
            paddingTop: scrolled ? 10 : 22,
            paddingBottom: scrolled ? 10 : 22,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={
            scrolled
              ? "border-b border-ink/10 bg-bg/80 backdrop-blur-md"
              : "border-b border-transparent bg-transparent"
          }
        >
          <Container className="flex items-center justify-between">
            <Link href="/" aria-label="MEBI Technology — Home">
              <Logo type="mark" variant={onDarkHero ? "white" : "color"} className="h-8 md:h-9" />
            </Link>

            <nav
              className="hidden items-center gap-9 lg:flex"
              aria-label="Primary"
            >
              {primaryNav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-[15px] font-medium transition-colors",
                      onDarkHero
                        ? active
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                        : active
                          ? "text-ink"
                          : "text-muted hover:text-ink"
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-accent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Button href="/contact" variant={onDarkHero ? "light" : "primary"} size="sm">
                Start a Project
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "flex items-center gap-2 text-sm font-medium lg:hidden",
                onDarkHero ? "text-white" : "text-ink"
              )}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              Menu
              <span
                className={cn(
                  "flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border",
                  onDarkHero ? "border-white/30" : "border-ink/15"
                )}
              >
                <span className={cn("h-[1.5px] w-4", onDarkHero ? "bg-white" : "bg-ink")} />
                <span className={cn("h-[1.5px] w-4", onDarkHero ? "bg-white" : "bg-ink")} />
              </span>
            </button>
          </Container>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
