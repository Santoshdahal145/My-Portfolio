"use client";

import { INTERESTS, LANGUAGES } from "../data/portfolioData";
import {
  Compass,
  Cpu,
  UtensilsCrossed,
  Languages,
  Sparkles,
  Heart,
  Globe2,
} from "lucide-react";

// Chess icon representation
function ChessPieceIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 20l1-5h6l1 5H8z" />
      <path d="M12 4c1.5 0 3 .8 3 2.5 0 1-.8 1.8-1.5 2.2l.5 6.3h-4l.5-6.3C9.8 8.3 9 7.5 9 6.5 9 4.8 10.5 4 12 4z" />
      <path d="M10 2h4" />
      <path d="M6 22h12" />
    </svg>
  );
}

export default function BeyondCode() {
  const getInterestIcon = (title: string) => {
    switch (title) {
      case "Playing Chess":
        return <ChessPieceIcon className="w-6 h-6 text-amber-400" />;
      case "Traveling & Exploring":
        return <Compass className="w-6 h-6 text-emerald-400" />;
      case "Tech Discussions":
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case "Cooking & Recipes":
        return <UtensilsCrossed className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="interests" className="py-24 relative dev-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <Heart className="w-3.5 h-3.5 text-purple-400" />
            <span>PERSONALITY & PURSUITS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Beyond the Code
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Curiosity doesn&apos;t stop at the terminal. Here is what fuels my strategic thinking,
            creativity, and global perspective outside of engineering.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {INTERESTS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0f1422]/80 border border-white/[0.08] hover:border-purple-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getInterestIcon(item.title)}
                </div>

                <div className="text-[11px] font-mono text-purple-400 mb-1">{item.category}</div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Personal Interest</span>
                <span className="text-purple-400 group-hover:translate-x-1 transition-transform">
                  ✦
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Banner */}
        <div className="rounded-2xl bg-[#0e1320]/90 border border-white/[0.08] p-7 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Linguistic Proficiency</h3>
                <p className="text-xs text-zinc-400">
                  Multilingual communication across global & regional teams
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
              <Languages className="w-3.5 h-3.5" />
              <span>3 Languages Spoken</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LANGUAGES.map((lang, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-white">{lang.language}</span>
                  <span className="text-xs font-mono text-emerald-400">{lang.level}</span>
                </div>
                <div className="w-full bg-zinc-800/80 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
