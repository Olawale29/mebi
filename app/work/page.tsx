import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { WorkGrid } from "@/components/work/WorkGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "A selection of MEbi Technologies' work across web, mobile, UI/UX and custom software.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Work"
        title="Selected work."
        description="Digital experiences designed around real business problems. Filter by discipline to see how we approach different kinds of products."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <WorkGrid />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
