"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Card3D } from "@/components/ui/card-3d";
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  Building2Icon,
  FileCheckIcon,
  AwardIcon,
} from "@/components/ui/icons";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const experiences = portfolioData.experiences;
  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((exp) => exp.id === activeTab);

  return (
    <section id="experience" className="py-20 relative z-10 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BriefcaseIcon className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Track Record
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Over 6 years of progressive accounting and tax governance across consulting, educational real-estate communities, distribution, and finance.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === "all"
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20"
                : "bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800"
            }`}
          >
            All Experience ({experiences.length})
          </button>
          {experiences.map((exp) => (
            <button
              key={exp.id}
              type="button"
              onClick={() => setActiveTab(exp.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === exp.id
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {exp.company.split(" ")[0]} ({exp.badge})
            </button>
          ))}
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-10">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                      {exp.badge}
                    </span>
                    {exp.type && (
                      <span className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium">
                        {exp.type}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300 mt-1">
                    <span className="font-semibold text-emerald-400">
                      {exp.company}
                    </span>
                    {exp.location && (
                      <>
                        <span className="text-zinc-600">•</span>
                        <span className="flex items-center gap-1 text-zinc-400">
                          <MapPinIcon className="w-4 h-4 text-zinc-500" />
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/90 border border-white/10 text-zinc-300 text-xs sm:text-sm font-semibold self-start lg:self-center">
                  <CalendarIcon className="w-4 h-4 text-teal-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Multi-Section Duties (e.g. Capitax, Northbridge) */}
              {exp.sections && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {exp.sections.map((sec, secIdx) => (
                    <div
                      key={sec.title}
                      className="p-5 rounded-2xl bg-zinc-900/70 border border-white/5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-3.5">
                          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                            {secIdx === 0 ? (
                              <ShieldCheckIcon className="w-4 h-4" />
                            ) : secIdx === 1 ? (
                              <FileCheckIcon className="w-4 h-4" />
                            ) : (
                              <Building2Icon className="w-4 h-4" />
                            )}
                          </div>
                          <h4 className="font-bold text-sm sm:text-base text-zinc-100">
                            {sec.title}
                          </h4>
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                          {sec.duties.map((duty, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                              <span>{duty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights List (e.g. BVL, VIP Capital) */}
              {exp.highlights && (
                <div className="mt-6 p-5 rounded-2xl bg-zinc-900/70 border border-white/5">
                  <h4 className="font-bold text-sm sm:text-base text-zinc-100 mb-3 flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                    <span>Key Accounting & Financial Responsibilities</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

