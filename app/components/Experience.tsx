"use client";

import {
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
} from "../data/portfolioData";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Sparkles,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>JOURNEY & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience, Education & Credentials
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Track record in commercial software engineering, strong foundational computer science
            education, and official engineering board certification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Work Experience (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.08]">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Commercial Experience</h3>
                <p className="text-xs text-zinc-400">Production software development</p>
              </div>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-teal-500/40 before:to-transparent">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline indicator node */}
                  <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-4 border-[#090b10] group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-[#0e1320]/80 border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 shadow-lg group-hover:shadow-emerald-950/20">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {exp.role}
                      </h4>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mb-4">
                      <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                        <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1 text-zinc-400">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 font-mono text-[10px]">
                        {exp.type}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {exp.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certification (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.08]">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Education</h3>
                  <p className="text-xs text-zinc-400">Academic foundations</p>
                </div>
              </div>

              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0e1320]/80 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                    <span className="text-[11px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs text-emerald-400 font-medium mb-1">{edu.institution}</div>
                  <div className="text-xs text-zinc-400 mb-4">{edu.location}</div>

                  <div className="pt-3 border-t border-white/[0.06]">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Key Engineering Coursework:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.focus.map((item, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2 py-1 text-[11px] font-mono rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Certification Card */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.08]">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Engineering Certification</h3>
                  <p className="text-xs text-zinc-400">Government recognized professional title</p>
                </div>
              </div>

              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#0e1320] to-[#131b2c] border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 relative overflow-hidden shadow-lg shadow-black/40 group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[40px] rounded-full pointer-events-none" />

                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">{cert.issuer}</div>
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-mono rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 whitespace-nowrap">
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed mt-3 mb-4">
                    {cert.description}
                  </p>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs text-zinc-400 font-mono">Registration Number</span>
                    <span className="text-sm font-bold font-mono text-amber-400">
                      {cert.regNumber}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
