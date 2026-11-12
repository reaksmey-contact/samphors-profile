"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  DownloadIcon,
  XIcon,
  CheckIcon,
  CopyIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  LinkedinIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  AwardIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const text = `# ${portfolioData.name}
**${portfolioData.title}**
Phone: ${portfolioData.contact.phone} | Email: ${portfolioData.contact.email}
Address: ${portfolioData.contact.address}
LinkedIn: ${portfolioData.contact.linkedIn}

## Professional Summary
${portfolioData.bio}

## Work Experience
${portfolioData.experiences
  .map(
    (exp) => `### ${exp.role} - ${exp.company} (${exp.period})
${
  exp.sections
    ? exp.sections
        .map(
          (s) => `*${s.title}*\n${s.duties.map((d) => `- ${d}`).join("\n")}`
        )
        .join("\n\n")
    : exp.highlights?.map((h) => `- ${h}`).join("\n")
}`
  )
  .join("\n\n")}

## Education
${portfolioData.education
  .map((edu) => `- **${edu.degree}**, ${edu.institution} (${edu.period})`)
  .join("\n")}

## Certifications & Courses
${portfolioData.certifications
  .map((c) => `- **${c.name}** | ${c.issuer} (${c.date})`)
  .join("\n")}

## References
${portfolioData.references
  .map((r) => `- **${r.name}**, ${r.role}, ${r.company} (Phone: ${r.phone})`)
  .join("\n")}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0d1322] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/90 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs sm:text-sm font-semibold text-zinc-300">
              Executive Resume Preview • {portfolioData.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 transition-colors"
              title="Copy Resume as Markdown"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-xs font-semibold text-white shadow-md hover:brightness-110 transition-all"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors ml-2"
              aria-label="Close resume preview"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090d16] text-zinc-200 printable-document">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {portfolioData.name}
              </h1>
              <p className="text-emerald-400 font-semibold text-base mt-0.5">
                {portfolioData.title}
              </p>
            </div>
            <div className="text-xs text-zinc-400 space-y-1 sm:text-right">
              <p>{portfolioData.contact.phone}</p>
              <p>{portfolioData.contact.email}</p>
              <p>{portfolioData.contact.address}</p>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
              <BriefcaseIcon className="w-4 h-4" />
              <span>Executive Profile</span>
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {portfolioData.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-1.5">
              <BriefcaseIcon className="w-4 h-4" />
              <span>Work Experience</span>
            </h2>
            <div className="space-y-6">
              {portfolioData.experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-emerald-500/30 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-base font-bold text-white">
                      {exp.role} <span className="text-zinc-500">|</span>{" "}
                      <span className="text-emerald-400">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">
                      {exp.period}
                    </span>
                  </div>

                  {exp.sections ? (
                    <div className="space-y-3 mt-2">
                      {exp.sections.map((sec) => (
                        <div key={sec.title}>
                          <h4 className="text-xs font-semibold text-zinc-200">
                            {sec.title}
                          </h4>
                          <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 mt-1 leading-relaxed">
                            {sec.duties.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 mt-2 leading-relaxed">
                      {exp.highlights?.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                <GraduationCapIcon className="w-4 h-4" />
                <span>Education</span>
              </h2>
              <div className="space-y-3">
                {portfolioData.education.map((edu) => (
                  <div key={edu.degree}>
                    <h4 className="text-sm font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {edu.institution} ({edu.period})
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                <AwardIcon className="w-4 h-4" />
                <span>Certifications & Short Courses</span>
              </h2>
              <div className="space-y-3">
                {portfolioData.certifications.map((cert) => (
                  <div key={cert.name}>
                    <h4 className="text-xs font-bold text-white">
                      {cert.name}
                    </h4>
                    <p className="text-[11px] text-zinc-400">
                      {cert.issuer} • <span className="font-mono text-emerald-400">{cert.date}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Verified References */}
          <div className="pt-4 border-t border-white/10">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>Verified Professional References</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {portfolioData.references.map((r) => (
                <div key={r.name} className="p-3 rounded-xl bg-zinc-900 border border-white/5">
                  <p className="font-bold text-white">{r.name}</p>
                  <p className="text-zinc-400">{r.role}</p>
                  <p className="text-zinc-400">{r.company}</p>
                  <p className="text-emerald-400 font-mono mt-1">{r.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

