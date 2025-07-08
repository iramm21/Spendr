// app/(publicRoutes)/home/page.tsx
"use client";

import { HeroSection } from "@/components/publicRoutes/home/hero-section";
import { FeaturesSection } from "@/components/publicRoutes/home/features-section";
import { DeepDiveSection } from "@/components/publicRoutes/home/deep-dive-section";
import { TimelineSection } from "@/components/publicRoutes/home/timeline-section";
import { TestimonialsSection } from "@/components/publicRoutes/home/testimonials-section";
import { CommunitySupportSection } from "@/components/publicRoutes/home/community-section";
import { BlogTeaserSection } from "@/components/publicRoutes/home/blog-teaser-section";
import { GamifiedCTASection } from "@/components/publicRoutes/home/gamified-cta-section";
import { FAQSection } from "@/components/publicRoutes/home/faq-section";
import { StickyXPWidget } from "@/components/publicRoutes/home/sticky-xp-widget";
import { LevelSystemSection } from "@/components/publicRoutes/home/level-system-section";
import { RewardsPreviewSection } from "@/components/publicRoutes/home/rewards-preview-section";
import { MobileAppPreview } from "@/components/publicRoutes/home/mobile-app-preview";
import { TrustSection } from "@/components/publicRoutes/home/trust-section";
import { LeaderboardPreview } from "@/components/publicRoutes/home/leaderboard-preview";

export default function HomePage() {
  return (
    <section className="px-4 sm:px-6 py-20 max-w-screen mx-auto relative overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <DeepDiveSection />
      <TimelineSection />
      <TestimonialsSection />
      <CommunitySupportSection />
      <BlogTeaserSection />
      <GamifiedCTASection />
      <LevelSystemSection />
      <RewardsPreviewSection />
      <MobileAppPreview />
      <TrustSection />
      <LeaderboardPreview />
      <FAQSection />
      <StickyXPWidget />
    </section>
  );
}
