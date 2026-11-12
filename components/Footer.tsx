"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowUpRightIcon,
  PhoneIcon,
  MailIcon,
  LinkedinIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#05080f] pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-white font-mono shadow-md shadow-emerald-500/20">
                SS
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {portfolioData.name}
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
              Senior Accountant & Tax Professional specializing in CIFRS for SMEs, General Department of Taxation (GDT) compliance, and ACAR statutory digital reporting in Cambodia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 flex items-center justify-center transition-all"
                title="Call"
              >
                <PhoneIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-all"
                title="Email"
              >
                <MailIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-blue-400 hover:border-blue-500/40 flex items-center justify-center transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#metrics" className="hover:text-emerald-400 transition-colors">
                  Key Metrics
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">
                  Accounting & ERP Stack
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-emerald-400 transition-colors">
                  Compliance Roadmap
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-emerald-400 transition-colors">
                  Certifications & Education
                </a>
              </li>
              <li>
                <a href="#references" className="hover:text-emerald-400 transition-colors">
                  References & Verification
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <p>
                <strong className="text-zinc-200 block">Phone / Telegram:</strong>
                <a href={`tel:${portfolioData.contact.phone}`} className="hover:text-emerald-400 transition-colors">
                  {portfolioData.contact.phone}
                </a>
              </p>
              <p>
                <strong className="text-zinc-200 block">Email:</strong>
                <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-cyan-400 transition-colors">
                  {portfolioData.contact.email}
                </a>
              </p>
              <p>
                <strong className="text-zinc-200 block">Location:</strong>
                {portfolioData.contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 {portfolioData.name}. All rights reserved. Professional Portfolio.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <span className="font-mono">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

