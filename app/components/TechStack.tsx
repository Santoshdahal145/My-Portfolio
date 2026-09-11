"use client";

import { useState } from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import {
  Code,
  Server,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  Smartphone,
  Globe,
} from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoryIcons: Record<string, typeof Code> = {
    "Frontend & Mobile": Smartphone,
    "Backend & APIs": Server,
    "Databases & Tools": Database,
  };

  const filteredCategories =
    activeCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tech Stack & Technical Skills
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Modern, production-tested technologies I utilize to build performant web applications,
            robust microservices, and cross-platform mobile experiences.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {["All", "Frontend & Mobile", "Backend & APIs", "Databases & Tools"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20 font-semibold"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.07]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.category] || Code;

            return (
              <div
                key={category.category}
                className="rounded-2xl bg-[#0f1422]/70 border border-white/[0.08] hover:border-emerald-500/30 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-wide">
                        {category.category}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2.5 mt-5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-200 group/badge"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 group-hover/badge:text-emerald-400" />
                        <span className="text-xs font-medium text-zinc-200 group-hover/badge:text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-black/40">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-footer inside card */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="text-emerald-400/80 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Production Tested
                  </span>
                  <span>{category.skills.length} core competencies</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner / Full Stack Architecture Quote */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-950/20 via-zinc-900/60 to-cyan-950/20 border border-white/[0.08] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Full Cycle Development Architecture</div>
              <div className="text-xs text-zinc-400">
                From responsive UI and mobile native build to database schema, caching, and server deployment.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              TypeScript First
            </span>
            <span className="text-xs font-mono text-cyan-400 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              Clean Architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
