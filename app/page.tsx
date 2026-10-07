import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CoreBusiness } from "@/components/sections/CoreBusiness";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyMebi } from "@/components/sections/WhyMebi";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "MEBI Technology",
  description:
    "MEBI Technology builds custom software, cloud, and digital transformation solutions for growing organizations across Africa and beyond. Where innovation meets possibilities.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CoreBusiness />
      <WhatWeDo />
      <WhyMebi />
      <ProcessSection />
      <IndustriesSection />
      <SelectedWork />
      <Testimonials />
      <CTASection />
    </>
  );
}
