"use client";

import React, { useState } from "react";
import { Card3D } from "@/components/ui/card-3d";
import {
  ShieldCheckIcon,
  CalculatorIcon,
  CalendarIcon,
  FileCheckIcon,
  CheckCircleIcon,
  TrendingUpIcon,
} from "@/components/ui/icons";

export function TaxComplianceWidget() {
  const [selectedTab, setSelectedTab] = useState<"roadmap" | "calculator">("roadmap");

  // Mini Withholding & VAT Calculator State
  const [invoiceAmount, setInvoiceAmount] = useState<number>(1000);
  const [expenseType, setExpenseType] = useState<string>("service"); // 'service' (15%), 'rental' (10%), 'goods' (0%)
  const [includeVAT, setIncludeVAT] = useState<boolean>(true);

  // Tax rates
  const vatRate = includeVAT ? 0.1 : 0;
  const whtRate =
    expenseType === "service" ? 0.15 : expenseType === "rental" ? 0.1 : 0.0;

  const vatAmount = invoiceAmount * vatRate;
  const whtAmount = invoiceAmount * whtRate;
  const netPayable = invoiceAmount + vatAmount - whtAmount;

  const complianceTimeline = [
    {
      day: "8th of Every Month",
      title: "Tenant Invoicing & AR Reminders",
      agency: "Internal Treasury",
      description:
        "Generate commercial invoices, follow up on outstanding balances, and distribute formal reminder memos to ensure timely receivables.",
      badge: "Cash Flow",
    },
    {
      day: "20th of Every Month",
      title: "GDT Monthly E-Tax Return Filing",
      agency: "General Dept of Taxation",
      description:
        "Declare Prepayment of Tax on Income (1%), Withholding Tax (WHT), Tax on Salary & Fringe Benefits, and Value Added Tax (VAT 10%).",
      badge: "Statutory GDT",
    },
    {
      day: "20th of Every Month",
      title: "NSSF Employee Declaration",
      agency: "National Social Security Fund",
      description:
        "Submit monthly electronic employee register, healthcare contributions, and occupational risk insurance declarations.",
      badge: "Statutory NSSF",
    },
    {
      day: "March 31st Annually",
      title: "Annual Tax on Income (TOI)",
      agency: "General Dept of Taxation",
      description:
        "Reconcile annual CIFRS financial statements, compute minimum tax vs standard 20% TOI, and submit audit workpapers.",
      badge: "Annual GDT",
    },
    {
      day: "Mid-Year",
      title: "ACAR Digital Financial Reporting",
      agency: "Accounting & Auditing Regulator",
      description:
        "Submit non-audit financial statements, update FIN registration, and verify CIFRS for SMEs compliance on the ACAR platform.",
      badge: "ACAR Portal",
    },
    {
      day: "Annual Schedule",
      title: "MOC Enterprise Declaration",
      agency: "Ministry of Commerce",
      description:
        "File the Annual Declaration of Commercial Enterprise online to maintain active good standing for the company registration.",
      badge: "Statutory MOC",
    },
  ];

  return (
    <section id="compliance" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheckIcon className="w-3.5 h-3.5" />
            <span>Interactive Governance Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cambodia Statutory Compliance Roadmap
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            How I orchestrate statutory deadlines across GDT, ACAR, NSSF, and MOC to safeguard enterprises from penalties and audit disruptions.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 rounded-2xl bg-zinc-900 border border-white/10 mt-8 shadow-inner">
            <button
              type="button"
              onClick={() => setSelectedTab("roadmap")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedTab === "roadmap"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Statutory Filing Timeline
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab("calculator")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedTab === "calculator"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Interactive WHT & VAT Estimator
            </button>
          </div>
        </div>

        {/* Tab 1: Compliance Roadmap */}
        {selectedTab === "roadmap" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceTimeline.map((item, idx) => (
              <Card3D key={item.title} maxTilt={6} className="h-full">
                <div className="h-full p-6 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono font-bold text-emerald-400 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        {item.day}
                      </span>
                      <span className="text-[11px] font-semibold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400 mb-3">
                      {item.agency}
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                    <span>Active Compliance Routine</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        )}

        {/* Tab 2: Interactive Tax Calculator */}
        {selectedTab === "calculator" && (
          <div className="max-w-3xl mx-auto">
            <Card3D maxTilt={5}>
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-emerald-500/30 backdrop-blur-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CalculatorIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Cambodia Withholding Tax (WHT) & VAT Simulator
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      Standard Cambodian statutory tax calculation demonstration.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Base Amount */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Base Invoice Amount (USD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-mono text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        min="10"
                        step="50"
                        value={invoiceAmount}
                        onChange={(e) => setInvoiceAmount(Math.max(0, Number(e.target.value)))}
                        className="w-full pl-8 pr-4 py-3 rounded-xl bg-zinc-800 border border-white/10 text-white font-mono text-base focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Transaction Category */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Transaction Category
                    </label>
                    <select
                      value={expenseType}
                      onChange={(e) => setExpenseType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500"
                    >
                      <option value="service">Domestic Services (15% WHT)</option>
                      <option value="rental">Immovable Property Rental (10% WHT)</option>
                      <option value="goods">Supply of Goods (0% WHT)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeVAT}
                      onChange={(e) => setIncludeVAT(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-500 focus:ring-0 bg-zinc-800 border-white/20"
                    />
                    <span className="text-sm font-medium text-zinc-200">
                      Apply Standard 10% VAT (Value Added Tax)
                    </span>
                  </label>
                </div>

                {/* Calculation Output Card */}
                <div className="p-6 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-400">Base Expense:</span>
                    <span className="font-mono text-white font-semibold">
                      ${invoiceAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-400">Output VAT (+10%):</span>
                    <span className="font-mono text-cyan-400 font-semibold">
                      +${vatAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-400">
                      Withholding Tax ({whtRate * 100}% WHT withheld for GDT):
                    </span>
                    <span className="font-mono text-amber-400 font-semibold">
                      -${whtAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex justify-between items-center text-base sm:text-lg">
                    <span className="font-bold text-white">Net Cash Disbursed to Vendor:</span>
                    <span className="font-mono font-extrabold text-emerald-400">
                      ${netPayable.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-[11px] text-zinc-500 leading-relaxed text-center">
                  * Note: WHT is remitted directly to the General Department of Taxation by the 20th of the following month with the monthly e-Tax declaration.
                </p>
              </div>
            </Card3D>
          </div>
        )}
      </div>
    </section>
  );
}

