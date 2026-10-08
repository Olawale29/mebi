import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/data/nav";
import { company, socialLinks } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative -mt-px overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-primary) 0%, var(--color-primary) 12%, var(--color-surface-dark) 42%, var(--color-surface-dark) 100%)",
      }}
    >
      <Image
        data-moon-foreground
        src="/footer-landscape-foreground.png"
        alt=""
        width={2048}
        height={768}
        sizes="100vw"
        className="pointer-events-none absolute left-1/2 top-0 z-20 h-auto w-[max(100%,64rem)] max-w-none -translate-x-1/2 select-none"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[max(37.5vw,24rem)] z-[25] h-28 -translate-y-full bg-gradient-to-b from-transparent to-surface-dark"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-dark/65"
      />

      <Container className="relative z-30 pt-64 pb-10 md:pt-80 lg:pt-96">
        <div className="flex flex-col justify-between gap-12 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
          <div className="max-w-md">
            <Link href="/" aria-label="MEBI Technology — Home">
              <Logo type="full" variant="white" className="h-11" />
            </Link>
            <p className="mt-5 text-white/60 leading-relaxed">
              {company.positioning}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
              {company.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <Button href="/contact" variant="secondary" size="md">
            Book a Free Consultation
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
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Office
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/60">{company.address}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. RC: {company.rcNumber}.
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
