import Link from "next/link";
import { footerNav } from "@/data/nav";
import { company, socialLinks } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-white">
      <Container className="pt-20 pb-10 md:pt-28">
        <div className="flex flex-col justify-between gap-12 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
          <div className="max-w-md">
            <Link href="/" aria-label="MEbi Technologies — Home">
              <Logo type="full" variant="white" className="h-11" />
            </Link>
            <p className="mt-5 text-white/60 leading-relaxed">
              {company.positioning}
            </p>
          </div>
          <Button href="/contact" variant="secondary" size="md">
            Start a Project
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Connect
            </h3>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              {company.email && (
                <li>
                  <a href={`mailto:${company.email}`} className="text-white/70 hover:text-white">
                    {company.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Newsletter
            </h3>
            <p className="mt-5 text-white/60">
              Occasional notes on design and engineering. No spam.
            </p>
            <form className="mt-4 flex items-center gap-2 border-b border-white/20 pb-2">
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email address"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 text-sm font-medium text-accent"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
