"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Card3D } from "@/components/ui/card-3d";
import {
  ShieldCheckIcon,
  CalculatorIcon,
  Building2Icon,
  TrendingUpIcon,
  CheckCircleIcon,
  AwardIcon,
} from "@/components/ui/icons";

export function AboutSection() {
  const pillars = [
    {
      title: "Tax Governance & GDT Compliance",
      icon: <ShieldCheckIcon className="w-6 h-6 text-emerald-400" />,
      description:
        "Comprehensive preparation, review, and filing of monthly e-Tax declarations (VAT, Withholding Tax, Salary Tax) and annual Tax on Income (TOI). Defending clients during tax audits with audit-proof documentation.",
    },
    {
      title: "CIFRS for SMEs Financial Statements",
      icon: <CalculatorIcon className="w-6 h-6 text-cyan-400" />,
      description:
        "Full-cycle bookkeeping and financial reporting strictly adhering to CIFRS for SMEs. Preparing trial balances, income statements, cash flow forecasts, and fixed asset depreciation registers.",
    },
    {
      title: "ACAR & Statutory Regulatory Filings",
      icon: <AwardIcon className="w-6 h-6 text-teal-400" />,
      description:
        "Certified in ACAR Digital Financial Reporting Platform. Managing FIN numbers, language notices, external auditor coordination, monthly NSSF declarations, and Ministry of Commerce (MOC) filings.",
    },
    {
      title: "Multi-Entity AP/AR & Treasury",
      icon: <Building2Icon className="w-6 h-6 text-indigo-400" />,
      description:
        "Experienced in managing complex receivables, lease billing, vendor accounts payable, and liquidity control across multi-company structures (up to 5 concurrent corporate entities).",
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Commitment to Integrity, Precision & Compliance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Bridging financial accuracy with Cambodian statutory regulations to safeguard corporate growth and maintain audit readiness.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Senior Accountant & Tax Specialist based in Phnom Penh
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                With a Bachelor of Accounting & Finance from BuildBright University and ongoing credentials from the National Tax School (NTS) and KICPAA (Accounting Technician Qualification), I specialize in eliminating tax exposure, streamlining bookkeeping operations, and delivering transparent financial intelligence to decision-makers.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Over the past 6+ years, I have navigated diverse business environments — from professional tax advisory at Capitax Consulting Services to multi-entity treasury and property finance at Northbridge Communities, commercial distribution at BVL Cambodia Beer, and microfinance cashiering at VIP Capital.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                {[
                  "GDT Monthly & Annual e-Tax",
                  "ACAR Digital Reporting Platform",
                  "CIFRS for SMEs Compliance",
                  "NSSF & MOC Enterprise Filings",
                  "Tax Audit Representation",
                  "QuickBooks & LocalizeBook ERP",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-zinc-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-zinc-400 block">Languages</span>
                <span className="text-sm font-semibold text-white">Khmer (Native) • English (Good)</span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">Location</span>
                <span className="text-sm font-semibold text-white">Sen Sok, Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Card3D maxTilt={7} className="h-full">
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-900/80 to-zinc-950/90 border border-emerald-500/30 backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <TrendingUpIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Guaranteed Audit Readiness
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    &ldquo;My philosophy is simple: accurate monthly bookkeeping prevents costly tax penalties. By aligning books daily with CIFRS for SMEs and GDT standards, our clients pass audits seamlessly.&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">Current Advisory</span>
                    <span className="font-semibold text-emerald-400">Capitax Consulting</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">Education</span>
                    <span className="font-semibold text-zinc-200">BuildBright University</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">Statutory Bodies</span>
                    <span className="font-semibold text-zinc-200">GDT, ACAR, NSSF, MOC</span>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <Card3D key={pillar.title} maxTilt={6} className="h-full">
              <div className="h-full p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}

