"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { primaryNav } from "@/data/nav";
import { socialLinks } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex flex-col bg-surface-dark text-white lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <Container className="flex items-center justify-between py-6">
        <Link href="/" aria-label="MEBI Technology — Home">
          <Logo type="mark" variant="white" className="h-8" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xl leading-none"
        >
          ×
        </button>
      </Container>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
        {primaryNav.map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="block py-3 text-[42px] font-semibold leading-none tracking-[-0.02em]"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <Container className="flex flex-col gap-6 pb-10">
        <Button
          href="/contact"
          variant="secondary"
          size="md"
          arrow={false}
          className="w-full"
          onClick={onClose}
        >
          Start a Project
        </Button>
        <div className="flex items-center gap-6 text-sm text-white/60">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
