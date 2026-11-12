"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Card3D } from "@/components/ui/card-3d";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  LinkedinIcon,
  CopyIcon,
  CheckIcon,
  ArrowUpRightIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";

export function ContactSection() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Tax Advisory & Compliance",
    message: "",
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "Tax Advisory & Compliance",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MailIcon className="w-3.5 h-3.5" />
            <span>Connect & Consult</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Discuss Your Accounting & Tax Needs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Open for Senior Accounting positions, Corporate Tax Advisory, and Statutory Regulatory consulting in Phnom Penh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Phone Card */}
            <Card3D maxTilt={6}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Direct Phone & Telegram</span>
                    <a
                      href={`tel:${portfolioData.contact.phone}`}
                      className="text-base font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {portfolioData.contact.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(portfolioData.contact.phone, "phone")}
                  className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedType === "phone" ? (
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </Card3D>

            {/* Email Card */}
            <Card3D maxTilt={6}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-zinc-400 block font-medium">Email Address</span>
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(portfolioData.contact.email, "email")}
                  className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors shrink-0"
                  title="Copy Email Address"
                >
                  {copiedType === "email" ? (
                    <CheckIcon className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </Card3D>

            {/* Location Card */}
            <Card3D maxTilt={6}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block font-medium">Residence & Base</span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {portfolioData.contact.address}
                  </span>
                </div>
              </div>
            </Card3D>

            {/* LinkedIn Card */}
            <Card3D maxTilt={6}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">LinkedIn Profile</span>
                    <a
                      href={portfolioData.contact.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                    >
                      <span>sang-samphors-ab2737267</span>
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send an Direct Consultation Inquiry
              </h3>
              <p className="text-sm text-zinc-400 mb-8">
                Inquire about monthly tax compliance, CIFRS implementation, or accounting leadership.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
                    Thank you. I have received your message and will review your requirements promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sokha Chhay / Enterprise Co."
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contact@enterprise.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Tax Advisory & Compliance">
                        Tax Advisory & GDT Monthly/Annual Filings
                      </option>
                      <option value="Senior Accounting Role">
                        Senior Accounting Position (Full-time / Advisory)
                      </option>
                      <option value="ACAR & Non-Audit Financial Statements">
                        ACAR Digital Reporting & FIN Consultation
                      </option>
                      <option value="CIFRS for SMEs Setup">
                        CIFRS for SMEs Financial Setup & Bookkeeping
                      </option>
                      <option value="General Consultation">General Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Message / Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your company's accounting structure or requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                  >
                    Submit Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

