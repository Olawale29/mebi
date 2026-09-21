import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pt-24">
      <Container className="text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
          404
        </span>
        <h1 className="mx-auto mt-5 max-w-2xl text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[54px]">
          This page went off the grid.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-10">
          <Button href="/">Back Home</Button>
        </div>
      </Container>
    </section>
  );
}
