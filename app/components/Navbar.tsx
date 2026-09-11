"use client";

import { useState, useEffect, useCallback } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  Menu,
  X,
  MessageCircle,
  Download,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Beyond Code", href: "#interests", id: "interests" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    // If near bottom of the page, highlight contact
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 70
    ) {
      setActiveSection("contact");
      return;
    }

    const sections = [
      "about",
      "skills",
      "projects",
      "experience",
      "interests",
      "contact",
    ];
    const scrollPosition = window.scrollY + 140;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full max-w-full ${
        scrolled
          ? "bg-[#090b10]/92 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#about"
            onClick={() => handleNavClick("about")}
            className="flex items-center gap-2.5 group cursor-pointer shrink-0"
            aria-label="Santosh Dahal Portfolio Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/60 group-hover:scale-105 transition-all duration-300">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                Santosh Dahal
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-zinc-400">
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 border border-white/[0.08] p-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "text-emerald-300 bg-emerald-500/20 border-emerald-500/40 shadow-sm shadow-emerald-500/25 font-semibold"
                      : "text-zinc-300 border-transparent hover:text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 active:scale-95"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Direct Download CV from Assets */}
            <a
              href="/assets/Santosh_Dahal_Resume.pdf"
              download="Santosh_Dahal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-zinc-200 bg-white/[0.05] border border-white/[0.1] hover:bg-emerald-500/15 hover:text-emerald-300 hover:border-emerald-500/40 transition-all cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download CV</span>
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-md shadow-emerald-950/50 hover:shadow-emerald-500/25 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 text-emerald-100" />
            </a>
          </div>

          {/* Clean Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 mb-1 rounded-xl text-zinc-200 bg-white/[0.05] border border-white/[0.1] hover:text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all focus:outline-none focus:ring-1 focus:ring-emerald-500/50 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-emerald-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14]/98 backdrop-blur-2xl border-b border-white/[0.1] px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200 shadow-2xl">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? "text-emerald-300 bg-emerald-500/20 border-emerald-500/40 font-semibold shadow-sm shadow-emerald-500/15"
                      : "text-zinc-300 border-transparent hover:text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 active:bg-emerald-500/15"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Row inside Mobile Drawer */}
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2.5">
            {/* Direct Download PDF in Assets */}
            <a
              href="/assets/Santosh_Dahal_Resume.pdf"
              download="Santosh_Dahal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600/30 border border-emerald-500/40 hover:bg-emerald-600/40 transition-all shadow-sm"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download CV (PDF)</span>
            </a>

            {/* WhatsApp Direct */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
