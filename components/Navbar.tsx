"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ResumeModal } from "@/components/ResumeModal";
import {
  MenuIcon,
  XIcon,
  PhoneIcon,
  DownloadIcon,
  ArrowUpRightIcon,
} from "@/components/ui/icons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Overview", href: "#metrics" },
    { label: "Experience", href: "#experience" },
    { label: "Skills & Tools", href: "#skills" },
    { label: "Compliance & Advisory", href: "#compliance" },
    { label: "Certifications", href: "#certifications" },
    // { label: "References", href: "#references" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-[#090d16]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#"
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 shadow-lg shadow-emerald-500/25 p-[2px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#0b101d] rounded-[10px] flex items-center justify-center">
                  <span className="font-bold text-lg tracking-wider bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent font-mono">
                    SS
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-white text-base sm:text-lg group-hover:text-emerald-400 transition-colors">
                  {portfolioData.name}
                </span>
                <span className="text-[11px] font-medium text-emerald-400/90 tracking-wide flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Senior Accountant & Tax
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#101726]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08] shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-800/90 border border-white/10 text-zinc-200 text-xs sm:text-sm font-semibold hover:bg-zinc-700 hover:text-white transition-all"
              >
                <DownloadIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Resume / CV</span>
              </button> */}

              {/* <a
                href={`tel:${portfolioData.contact.phone}`}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-600/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Call Direct</span>
              </a> */}

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-zinc-800/80 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-700/80 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#090d16]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6 transition-all duration-300">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-zinc-200 hover:text-emerald-400 hover:bg-white/5 font-medium transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRightIcon className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsResumeOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 border border-white/10 text-white font-semibold"
                >
                  <DownloadIcon className="w-4 h-4 text-emerald-400" />
                  <span>Preview & Print Resume</span>
                </button>
                <a
                  href={`tel:${portfolioData.contact.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-600/30"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>Call {portfolioData.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Full Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
