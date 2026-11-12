"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Card3D } from "@/components/ui/card-3d";
import {
  PhoneIcon,
  ShieldCheckIcon,
  Building2Icon,
  CheckCircleIcon,
} from "@/components/ui/icons";

export function ReferencesSection() {
  return (
    <section id="references" className="py-20 relative z-10 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheckIcon className="w-3.5 h-3.5" />
            <span>Professional Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Professional References
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Executives, Managing Directors, and Finance Leaders available for direct verification of my technical expertise and integrity.
          </p>
        </div>

        {/* 3 Reference Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.references.map((ref) => (
            <Card3D key={ref.name} maxTilt={6} className="h-full">
              <div className="h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-emerald-500/40 transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-700 text-white font-bold flex items-center justify-center text-lg shadow-lg shadow-emerald-500/20 font-mono">
                      {ref.name
                        .replace("Mr. ", "")
                        .replace("Mrs. ", "")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <CheckCircleIcon className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {ref.name}
                  </h3>
                  <p className="text-sm font-semibold text-zinc-200 mt-0.5">
                    {ref.role}
                  </p>
                  <p className="text-xs text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                    <Building2Icon className="w-3.5 h-3.5 text-zinc-500" />
                    {ref.company}
                  </p>

                  <p className="text-xs text-zinc-400 mt-4 leading-relaxed italic border-l-2 border-emerald-500/40 pl-3">
                    &ldquo;{ref.relation}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <a
                    href={`tel:${ref.phone}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 text-xs sm:text-sm font-semibold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-md group-hover:scale-[1.02]"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    <span>Contact: {ref.phone}</span>
                  </a>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}

