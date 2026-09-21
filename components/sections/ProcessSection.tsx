import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessInteractive } from "@/components/process/ProcessInteractive";
import { Button } from "@/components/ui/Button";

export function ProcessSection() {
  return (
    <section className="border-t border-ink/10 py-24 md:py-32" id="process">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading label="Process" title="From idea to impact." />
          <Button href="/process" variant="ghost" size="sm" className="shrink-0">
            See the full process
          </Button>
        </div>

        <div className="mt-14">
          <ProcessInteractive />
        </div>
      </Container>
    </section>
  );
}
