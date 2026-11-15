
"use client";

import React, { useState } from "react";

import { HomeNavbar } from "@/modules/home/ui/components/home-navbar";
import { HeroSection } from "@/modules/home/ui/components/hero-section";
import { DashboardPreview } from "@/modules/home/ui/components/dashboard-preview";
import { LogoCloud } from "@/modules/home/ui/components/logo-cloud";
import { FeaturesGrid } from "@/modules/home/ui/components/features-grid";
import { HowItWorks } from "@/modules/home/ui/components/how-it-works";
import { PricingSection } from "@/modules/home/ui/components/pricing-section";
import { Testimonials } from "@/modules/home/ui/components/testimonials";
import { FaqSection } from "@/modules/home/ui/components/faq-section";
import { CtaBanner } from "@/modules/home/ui/components/cta-banner";
import { HomeFooter } from "@/modules/home/ui/components/home-footer";
import { DemoVideoModal } from "@/modules/home/ui/components/demo-video-modal";

export const HomeView = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FF2D95] selection:text-white overflow-x-hidden">
      <HomeNavbar />

      <HeroSection />

      <DashboardPreview />

      <LogoCloud />

      <FeaturesGrid />

      <HowItWorks />

      <Testimonials />

      <PricingSection />

      <FaqSection />

      <CtaBanner />

      <HomeFooter />

      <DemoVideoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
};
