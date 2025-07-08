"use client";

import { AboutHeroSection } from "@/components/publicRoutes/about/about-hero-section";
import { OurMissionSection } from "@/components/publicRoutes/about/our-mission-section";
import { OurStorySection } from "@/components/publicRoutes/about/our-story-section";
import { TeamSection } from "@/components/publicRoutes/about/team-section";
import { CoreValuesSection } from "@/components/publicRoutes/about/core-values-section";
import { WhySpendrSection } from "@/components/publicRoutes/about/why-spendr-section";
import { MilestonesSection } from "@/components/publicRoutes/about/milestones-section";
import { PressSection } from "@/components/publicRoutes/about/press-section";
import { JoinUsCTASection } from "@/components/publicRoutes/about/join-us-cta-section";

export default function AboutPage() {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-screen mx-auto relative overflow-x-hidden">
      <AboutHeroSection />
      <OurMissionSection />
      <OurStorySection />
      <CoreValuesSection />
      <WhySpendrSection />
      <TeamSection />
      <MilestonesSection />
      <PressSection />
      <JoinUsCTASection />
    </section>
  );
}
