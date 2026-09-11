"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none group">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative hidden sm:flex items-center gap-2 bg-[#0e1320] text-zinc-200 border border-emerald-500/30 px-3.5 py-2 rounded-2xl shadow-xl shadow-black/60 text-xs font-medium backdrop-blur-md animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>Quick Chat on WhatsApp</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-zinc-500 hover:text-zinc-300 ml-1 p-0.5"
            title="Dismiss tooltip"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Arrow pointer */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-emerald-500/30" />
        </div>
      )}

      {/* Floating Button with Pulse Ring */}
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quick Chat on WhatsApp with Santosh Dahal"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-950/70 hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-400/80 animate-pulse-ring pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
