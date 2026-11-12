"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Card3D } from "@/components/ui/card-3d";
import {
  ShieldCheckIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  LinkedinIcon,
  DownloadIcon,
  ArrowUpRightIcon,
  SparklesIcon,
  CheckCircleIcon,
  CalculatorIcon,
} from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background 3D Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Tax Advisory & Senior Accounting Roles</span>
            </div>

            {/* Main Title & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {portfolioData.name}
              </span>
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-lg bg-zinc-800/80 border border-white/10 text-zinc-200 text-sm sm:text-base font-semibold tracking-wide">
                {portfolioData.title}
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400 text-sm sm:text-base font-medium">
                Phnom Penh, Cambodia
              </span>
            </div>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {portfolioData.bio}
            </p>

            {/* Pillar Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                "CIFRS for SMEs",
                "Monthly & Annual Tax (GDT)",
                "ACAR Digital Reporting",
                "Tax Audit Defense",
                "Multi-Entity AP/AR",
                "QuickBooks & LocalizeBook",
              ].map((chip) => (
                <div
                  key={chip}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/10 text-xs sm:text-sm text-zinc-300 shadow-inner"
                >
                  <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Consult or Hire</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800/90 border border-white/10 text-zinc-200 font-semibold text-sm sm:text-base hover:bg-zinc-700/80 hover:text-white transition-all duration-200"
              >
                <span>View Track Record</span>
              </a>

              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex items-center justify-center p-3.5 rounded-xl bg-zinc-800/90 border border-white/10 text-zinc-300 hover:text-emerald-400 hover:bg-zinc-700/80 transition-all"
                title="Send Email"
              >
                <MailIcon className="w-5 h-5" />
              </a>

              <a
                href={portfolioData.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3.5 rounded-xl bg-zinc-800/90 border border-white/10 text-zinc-300 hover:text-cyan-400 hover:bg-zinc-700/80 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Visual Profile Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <Card3D maxTilt={10} className="w-full">
                <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/10 shadow-2xl backdrop-blur-xl">
                  <div className="relative bg-[#0d1322] rounded-[22px] p-6 sm:p-8 overflow-hidden border border-white/[0.08]">
                    {/* Interior Radial Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Profile Image & Avatar */}
                    <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 mb-6 group">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 via-cyan-400 to-indigo-500 animate-spin-slow opacity-80 blur-[2px] p-1" />
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0d1322] shadow-2xl bg-zinc-900 flex items-center justify-center">
                        <img
                          src="/images/avatar.jpg"
                          alt="Samphors Sang - Senior Accountant & Tax"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
                        <ShieldCheckIcon className="w-3.5 h-3.5" />
                        <span>KICPAA ATQ & NTS Candidate</span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {portfolioData.name}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                        Capitax Consulting Services Co., Ltd
                      </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/10 text-left">
                      <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                        <span className="text-[11px] text-zinc-400 block">Experience</span>
                        <span className="text-base font-bold text-white">6+ Years</span>
                      </div>
                      <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                        <span className="text-[11px] text-zinc-400 block">Tax Returns</span>
                        <span className="text-base font-bold text-emerald-400">100% Filed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>

              {/* Floating 3D Badge 1: Top Left */}
              <div className="absolute -top-6 -left-6 sm:-left-8 z-20 animate-float hidden sm:block pointer-events-none">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0f172a]/90 backdrop-blur-xl border border-emerald-500/40 shadow-xl shadow-black/60">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <ShieldCheckIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                      Tax Compliance
                    </span>
                    <span className="block text-xs font-semibold text-white">
                      Zero GDT Penalties
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating 3D Badge 2: Bottom Right */}
              <div className="absolute -bottom-6 -right-6 sm:-right-8 z-20 animate-float-delayed hidden sm:block pointer-events-none">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0f172a]/90 backdrop-blur-xl border border-cyan-500/40 shadow-xl shadow-black/60">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <CalculatorIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-cyan-400 font-bold uppercase tracking-wider">
                      ACAR & CIFRS
                    </span>
                    <span className="block text-xs font-semibold text-white">
                      SME Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

