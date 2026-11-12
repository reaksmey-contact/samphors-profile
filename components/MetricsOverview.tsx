"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Card3D } from "@/components/ui/card-3d";
import {
  ClockIcon,
  ShieldCheckIcon,
  FileCheckIcon,
  Building2Icon,
  TrendingUpIcon,
} from "@/components/ui/icons";

export function MetricsOverview() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Clock":
        return <ClockIcon className="w-6 h-6 text-emerald-400" />;
      case "ShieldCheck":
        return <ShieldCheckIcon className="w-6 h-6 text-teal-400" />;
      case "FileCheck":
        return <FileCheckIcon className="w-6 h-6 text-cyan-400" />;
      case "Building2":
        return <Building2Icon className="w-6 h-6 text-indigo-400" />;
      default:
        return <TrendingUpIcon className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="metrics" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.metrics.map((metric, idx) => (
            <Card3D key={metric.label} maxTilt={6} className="h-full">
              <div className="h-full p-6 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-emerald-500/40 transition-colors flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      {getIcon(metric.icon)}
                    </div>
                    {metric.trend && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {metric.trend}
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                    {metric.value}
                  </h3>
                  <p className="text-sm font-semibold text-zinc-200 mb-2">
                    {metric.label}
                  </p>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                  {metric.description}
                </p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}

