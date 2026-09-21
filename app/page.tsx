import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyMebi } from "@/components/sections/WhyMebi";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "MEbi Technologies",
  description:
    "MEbi Technologies designs and engineers digital products — websites, applications and software — that help ambitious businesses operate, compete and grow.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <WhatWeDo />
      <ServicesGrid />
      <WhyMebi />
      <ProcessSection />
      <TechnologySection />
      <Testimonials />
      <CTASection />
    </>
  );
}
