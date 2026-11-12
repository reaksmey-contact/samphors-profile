import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricsOverview } from "@/components/MetricsOverview";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TaxComplianceWidget } from "@/components/TaxComplianceWidget";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070a12] text-zinc-100 relative selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Global Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Single-Page Sections */}
      <main className="flex-grow flex flex-col relative z-10">
        <Hero />
        <MetricsOverview />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <TaxComplianceWidget />
        <CertificationsSection />
        {/* <ReferencesSection /> */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
