import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32" id="services">
      <Container>
        <SectionHeading
          label="Services"
          title="Everything a digital product needs, under one roof."
          description="From the first research interview to the production deploy — design and engineering, working as one team."
        />

        <div className="mt-14">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
