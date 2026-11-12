"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Card3D } from "@/components/ui/card-3d";
import {
  AwardIcon,
  GraduationCapIcon,
  CalendarIcon,
  MapPinIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative z-10 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <AwardIcon className="w-3.5 h-3.5" />
            <span>Credentials & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Accreditations & Academic Background
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Continuous professional development accredited by the National Tax School, KICPAA, and the Accounting & Auditing Regulator (ACAR).
          </p>
        </div>

        {/* 4 Professional Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {portfolioData.certifications.map((cert) => (
            <Card3D key={cert.name} maxTilt={6} className="h-full">
              <div className="h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-amber-500/40 transition-colors flex flex-col justify-between group">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <AwardIcon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold tracking-wider uppercase">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-3">
                    <span>{cert.issuer}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400 font-mono">{cert.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {cert.topics && (
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider block mb-2">
                      Competency Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-zinc-300 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card3D>
          ))}
        </div>

        {/* Academic Education Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Formal Academic Degrees</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Foundational degree in finance, economics, and corporate auditing.
            </p>
          </div>

          <div className="space-y-6">
            {portfolioData.education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <GraduationCapIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-emerald-400 mt-0.5">
                      {edu.institution}
                    </p>
                    {edu.details && (
                      <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 shrink-0 self-start sm:self-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-800 text-zinc-200 text-xs font-semibold">
                    <CalendarIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.location && (
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <MapPinIcon className="w-3.5 h-3.5 text-zinc-500" />
                      {edu.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

