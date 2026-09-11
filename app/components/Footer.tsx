"use client";

import { PERSONAL_INFO } from "../data/portfolioData";
import {
  MapPin,
  MessageCircle,
  Mail,
  ArrowUp,
  Heart,
  Code2,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#07080d] border-t border-white/[0.08] pt-14 pb-10 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-wide">
                Santosh Dahal
              </div>
              <div className="text-zinc-400 flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-zinc-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-zinc-300 hover:text-white hover:border-white/[0.2] transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all ml-2 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Santosh Dahal. All rights reserved. Registered Professional
            Engineer (NEC #83661).
          </div>

          <div className="flex items-center gap-1">
            Built with Next.js, React, TypeScript &amp; Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
