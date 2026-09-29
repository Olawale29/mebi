import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-28 text-white md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary-light/20 blur-3xl"
      />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance text-[38px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[52px] lg:text-[64px]">
            Let&apos;s build something that actually fits.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/75 md:text-xl">
            Tell us what you&apos;re working on — we&apos;ll tell you honestly
            whether we&apos;re the right fit before you spend a dollar.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="light" size="md">
              Book a Free Consultation
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-white/60">
            <a href={`mailto:${company.email}`} className="hover:text-white">
              {company.email}
            </a>
            {" · "}
            <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="hover:text-white">
              {company.phones[0]}
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
