"use client";

import {
  PERSONAL_INFO,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
  SKILL_CATEGORIES,
  PROJECTS,
} from "../data/portfolioData";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] rounded-2xl bg-[#0c0f18] border border-white/[0.12] shadow-2xl flex flex-col overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080a10] border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono text-zinc-300">
              Santosh_Dahal_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium shadow transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 overflow-y-auto space-y-8 print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-base font-medium text-emerald-400 mt-1">
                {PERSONAL_INFO.role}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="text-xs text-zinc-300 space-y-1 sm:text-right font-mono">
              <div>
                Email:{" "}
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                Phone:{" "}
                <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="text-emerald-400 hover:underline">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="text-amber-400">
                NEC PE Reg No: 83661
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              Commercial Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <div className="text-sm font-bold text-white">
                      {exp.role} — <span className="text-emerald-400">{exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-zinc-400">{exp.location}</div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-zinc-300 pl-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              Key Featured Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                >
                  <div className="font-semibold text-xs text-white flex justify-between items-center">
                    <span>{proj.title}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{proj.category}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1 mb-2 leading-snug">
                    {proj.description}
                  </p>
                  <div className="text-[10px] font-mono text-zinc-400">
                    Tech: {proj.tech.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              Technical Core Skills
            </h2>
            <div className="space-y-2">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="text-xs">
                  <span className="font-semibold text-zinc-200">{cat.category}: </span>
                  <span className="text-zinc-400">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
                Education
              </h2>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="font-bold text-white">{edu.degree}</div>
                  <div className="text-zinc-300">{edu.institution}</div>
                  <div className="text-zinc-400 font-mono text-[11px]">{edu.period}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
                Professional Engineering License
              </h2>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="font-bold text-white">{cert.title}</div>
                  <div className="text-zinc-300">{cert.issuer}</div>
                  <div className="text-amber-400 font-mono text-[11px]">
                    Registration No: {cert.regNumber} (Verified)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
