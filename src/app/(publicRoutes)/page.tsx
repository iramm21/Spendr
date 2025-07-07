// app/(publicRoutes)/home/page.tsx
"use client";

import { HeroSection } from "@/components/public/home/hero-section";
import { FeaturesSection } from "@/components/public/home/features-section";
import { DeepDiveSection } from "@/components/public/home/deep-dive-section";
import { TimelineSection } from "@/components/public/home/timeline-section";
import { TestimonialsSection } from "@/components/public/home/testimonials-section";
import { CommunitySupportSection } from "@/components/public/home/community-section";
import { BlogTeaserSection } from "@/components/public/home/blog-teaser-section";
import { GamifiedCTASection } from "@/components/public/home/gamified-cta-section";
import { FAQSection } from "@/components/public/home/faq-section";
import { StickyXPWidget } from "@/components/public/home/sticky-xp-widget";
import { LevelSystemSection } from "@/components/public/home/level-system-section";
import { RewardsPreviewSection } from "@/components/public/home/rewards-preview-section";
import { MobileAppPreview } from "@/components/public/home/mobile-app-preview";
import { TrustSection } from "@/components/public/home/trust-section";
import { LeaderboardPreview } from "@/components/public/home/leaderboard-preview";

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
