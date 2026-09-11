"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  MapPin,
  MessageCircle,
  Download,
  ArrowDown,
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  Phone,
  Terminal,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden dev-grid-bg w-full max-w-full scroll-mt-24"
    >
      {/* Strictly contained ambient background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Bio & Core Action CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{PERSONAL_INFO.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>NEC Reg: 83661</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Santosh Dahal
                <span className="block text-xl sm:text-3xl lg:text-4xl font-semibold mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Key Stack Micro-Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {[
                "Next.js",
                "React",
                "React Native / Expo",
                "Node.js",
                "TypeScript",
                "Express.js",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-md bg-zinc-900/80 text-zinc-300 border border-white/[0.07] hover:border-emerald-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Calls to Action (CTA) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-2">
              {/* High Priority WhatsApp CTA */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span className="p-1 rounded-md bg-white/20">
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                </span>
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* View Projects CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold border border-white/[0.1] hover:border-zinc-500 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
              </a>

              {/* Direct Download CV (PDF in Assets) */}
              <a
                href="/assets/Santosh_Dahal_Resume.pdf"
                download="Santosh_Dahal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-emerald-300 text-xs sm:text-sm font-semibold border border-white/[0.09] hover:border-emerald-500/40 transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Direct Communication & Social Links Row */}
            <div className="pt-4 border-t border-white/[0.07] flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-zinc-400">
              {/* Email with 1-click copy */}
              <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-white/[0.07] px-3 py-1.5 rounded-lg max-w-full">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-emerald-300 transition-colors truncate max-w-[190px] sm:max-w-none"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="ml-1 p-1 rounded hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <a
                href={`tel:${PERSONAL_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 bg-zinc-900/60 border border-white/[0.07] px-3 py-1.5 rounded-lg hover:text-emerald-300 hover:border-emerald-500/30 transition-all shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              {/* Socials */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900/60 border border-white/[0.07] hover:text-white hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all"
                  aria-label="Santosh Dahal LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 text-zinc-300" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900/60 border border-white/[0.07] hover:text-white hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all"
                  aria-label="Santosh Dahal GitHub"
                >
                  <GitHubIcon className="w-4 h-4 text-zinc-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Terminal & Metrics Card */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 max-w-full">
            {/* Terminal Mockup Card */}
            <div className="rounded-2xl bg-[#0d111b]/90 border border-white/[0.09] shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-xl max-w-full">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080a10] border-b border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>santosh-dahal.config.ts</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400/80 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  READY
                </div>
              </div>

              {/* Code Snippet Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed space-y-1.5 sm:space-y-2 text-zinc-300 overflow-x-auto max-w-full">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span> = &#123;
                </p>
                <p className="pl-3 sm:pl-4">
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-emerald-300">&quot;Santosh Dahal&quot;</span>,
                </p>
                <p className="pl-3 sm:pl-4">
                  <span className="text-zinc-400">role:</span>{" "}
                  <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,
                </p>
                <p className="pl-3 sm:pl-4">
                  <span className="text-zinc-400">location:</span>{" "}
                  <span className="text-emerald-300">&quot;Lokanthali, Kathmandu, Nepal&quot;</span>,
                </p>
                <p className="pl-3 sm:pl-4">
                  <span className="text-zinc-400">experience:</span>{" "}
                  <span className="text-amber-300">&quot;~2 Years&quot;</span>,
                </p>
                <p className="pl-3 sm:pl-4">
                  <span className="text-zinc-400">specialties:</span> [
                </p>
                <p className="pl-6 sm:pl-8 text-cyan-300">
                  &quot;Next.js&quot;, &quot;React&quot;, &quot;React Native / Expo&quot;,
                </p>
                <p className="pl-6 sm:pl-8 text-cyan-300">
                  &quot;Node.js&quot;, &quot;TypeScript&quot;, &quot;MongoDB&quot;
                </p>
                <p className="pl-3 sm:pl-4">],</p>
                <p className="pl-3 sm:pl-4">
                  <span className="text-zinc-400">certification:</span> &#123;
                </p>
                <p className="pl-6 sm:pl-8 text-zinc-400">
                  title: <span className="text-emerald-300">&quot;Professional Engineer (PE)&quot;</span>,
                </p>
                <p className="pl-6 sm:pl-8 text-zinc-400">
                  council: <span className="text-emerald-300">&quot;Nepal Engineering Council&quot;</span>,
                </p>
                <p className="pl-6 sm:pl-8 text-zinc-400">
                  regNo: <span className="text-amber-300">83661</span>
                </p>
                <p className="pl-3 sm:pl-4">&#125;,</p>
                <p className="pl-3 sm:pl-4">
                  <span className="text-zinc-400">openForHiring:</span>{" "}
                  <span className="text-emerald-400">true</span>
                </p>
                <p>&#125;;</p>
                <p className="pt-2 text-zinc-500 flex items-center gap-2">
                  <span className="text-emerald-400">➜</span>
                  <span className="truncate">ready to build scalable apps</span>
                  <span className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse shrink-0" />
                </p>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-full">
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/30 transition-all text-center">
                <div className="text-lg sm:text-2xl font-bold text-white font-mono flex items-center justify-center gap-0.5 sm:gap-1">
                  2+
                  <span className="text-emerald-400 text-xs sm:text-sm">yrs</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5 truncate">Industry Exp</div>
              </div>

              <div className="p-2.5 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/30 transition-all text-center">
                <div className="text-lg sm:text-2xl font-bold text-white font-mono flex items-center justify-center gap-0.5 sm:gap-1">
                  5+
                  <span className="text-cyan-400 text-xs sm:text-sm">apps</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5 truncate">Production Apps</div>
              </div>

              <div className="p-2.5 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/30 transition-all text-center">
                <div className="text-base sm:text-2xl font-bold text-white font-mono flex items-center justify-center">
                  #83661
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5 truncate">Registered PE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
