"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Card3D } from "@/components/ui/card-3d";
import {
  CalculatorIcon,
  ShieldCheckIcon,
  LayersIcon,
  TrendingUpIcon,
  SparklesIcon,
} from "@/components/ui/icons";

export function SkillsSection() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Calculator":
        return <CalculatorIcon className="w-6 h-6 text-emerald-400" />;
      case "ShieldCheck":
        return <ShieldCheckIcon className="w-6 h-6 text-teal-400" />;
      case "Layers":
        return <LayersIcon className="w-6 h-6 text-cyan-400" />;
      case "TrendingUp":
        return <TrendingUpIcon className="w-6 h-6 text-indigo-400" />;
      default:
        return <SparklesIcon className="w-6 h-6 text-emerald-400" />;
    }
  };

  const softwareStack = [
    { name: "QuickBooks Online & Desktop", type: "Core Accounting ERP", icon: "QB", level: "Advanced" },
    { name: "LocalizeBook ERP", type: "Cambodia Localized Accounting", icon: "LB", level: "Certified" },
    { name: "Microsoft Excel", type: "Financial Modeling & Analysis", icon: "XL", level: "Expert" },
    { name: "GDT e-Tax & E-Filing", type: "Tax Submissions Portal", icon: "GDT", level: "Specialist" },
    { name: "ACAR Digital Reporting", type: "Statutory Reporting Platform", icon: "ACAR", level: "Certified" },
    { name: "NSSF Online Portal", type: "Social Security Administration", icon: "NSSF", level: "Proficient" },
    { name: "MOC Business Portal", type: "Annual Enterprise Declarations", icon: "MOC", level: "Proficient" },
    { name: "Outlook & Office 365", type: "Corporate Communication", icon: "O365", level: "Advanced" },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Financial Expertise & Software Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Bridging international accounting frameworks (CIFRS for SMEs) with Cambodian statutory mandates and modern enterprise ERP tools.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {portfolioData.skills.map((category) => (
            <Card3D key={category.title} maxTilt={5} className="h-full">
              <div className="h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-inner">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-zinc-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List with Progress */}
                  <div className="space-y-4 mt-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-emerald-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-zinc-800/80 overflow-hidden p-[1px] border border-white/5">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Dedicated 3D Software & Platform Badges */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Specialized Accounting Software & Regulatory Portals
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Platforms utilized daily for accounting, payroll, tax filing, and digital reporting.
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold self-start md:self-center">
              100% Cloud & Desktop Proficient
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softwareStack.map((tool) => (
              <div
                key={tool.name}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-all group flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center text-xs font-bold text-emerald-400 font-mono shrink-0 group-hover:scale-105 transition-transform">
                  {tool.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">{tool.type}</p>
                  <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 text-zinc-300">
                    {tool.level}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Languages Section */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block mb-1">
                Language Proficiencies
              </span>
              <p className="text-sm text-zinc-300">
                Seamless communication with local tax authorities, domestic enterprises, and international corporate stakeholders.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {portfolioData.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 flex items-center gap-3"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <span className="text-sm font-bold text-white block">
                      {lang.name}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {lang.proficiency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

