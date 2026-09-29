import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const sectors = [
  "Government",
  "Healthcare",
  "Education",
  "Financial Services",
  "Retail",
  "Logistics",
];

export function TrustStrip() {
  return (
    <section className="border-t border-ink/10 py-12">
      <Container>
        <Reveal>
          <p className="text-center text-sm text-muted">
            Proudly partnering with organizations building the future of{" "}
            <span className="text-ink">
              {sectors.map((s, i) => (
                <span key={s}>
                  {s}
                  {i < sectors.length - 1 ? " · " : ""}
                </span>
              ))}
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
