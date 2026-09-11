"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "../data/portfolioData";
import {
  ExternalLink,
  FolderGit2,
  CheckCircle2,
  Sparkles,
  Layers,
  Smartphone,
  Globe,
  Monitor,
  Eye,
  X,
} from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ["All", "Web", "Mobile", "Full Stack"];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative dev-grid-bg">
      {/* Background illumination */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects & Systems
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl">
              Scalable web platforms, SEO-optimized portals, and cross-platform mobile apps engineered
              with clean code and modern full-stack architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-semibold"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.07]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0f1422]/80 border border-white/[0.08] hover:border-emerald-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 group"
            >
              <div>
                {/* Project Mockup Visual Container */}
                <div className="relative h-52 w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  {/* Subtle glass gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1422] via-[#0f1422]/30 to-transparent" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                      {project.category}
                    </span>

                    {project.link && (
                      <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Platform
                      </span>
                    )}
                  </div>

                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-xl bg-zinc-900/90 text-white text-xs font-semibold border border-white/20 hover:border-emerald-400 hover:text-emerald-300 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Project Details
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                    </h3>
                    <div className="text-xs font-mono text-cyan-400/90 mt-0.5">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights (Bullet points) */}
                  <div className="space-y-1.5 mb-5">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-zinc-300 border border-white/[0.07]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Architecture & Features
                </button>

                <div className="flex items-center gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30 hover:border-emerald-400/50 transition-all"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {!project.link && (
                    <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.06]">
                      Production Client
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#0e1320] border border-white/[0.12] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header image banner */}
            <div className="relative h-56 w-full">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1320] via-[#0e1320]/60 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-zinc-300 hover:text-white border border-white/20 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 text-xs font-mono rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{selectedProject.title}</h3>
                <p className="text-xs font-mono text-cyan-300">{selectedProject.subtitle}</p>
              </div>
            </div>

            {/* Scrollable details */}
            <div className="p-6 overflow-y-auto space-y-5 text-sm text-zinc-300">
              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  System Overview
                </h4>
                <p className="leading-relaxed text-zinc-200">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Core Architectural Features
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.05] border border-white/[0.1] text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white/[0.02] border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white"
              >
                Close
              </button>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium shadow-md transition-colors"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
