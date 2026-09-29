import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

export function Testimonials() {
  return (
    <section className="border-t border-ink/10 py-24 md:py-32">
      <Container>
        <SectionHeading
          label="Client Trust"
          title="What it's like to work with MEBI."
        />

        <div className="mt-14">
          <Carousel itemClassName="w-[300px] sm:w-[380px]">
            {testimonials.map((t, i) => (
              <div key={t.name + i} className="h-full">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}
