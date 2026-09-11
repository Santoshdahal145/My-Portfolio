"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  Mail,
  MessageCircle,
  Phone,
  Send,
  Copy,
  Check,
  MapPin,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare mailto link with encoded parameters
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Santosh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Trigger user's email client
      window.open(mailtoUrl, "_blank");
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden w-full max-w-full scroll-mt-24">
      {/* Background radial glow contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-emerald-600/10 via-cyan-600/5 to-transparent blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Have an open full-stack role, upcoming freelance project, or technical idea? Send a
            message or connect directly on WhatsApp.
          </p>
        </div>

        {/* Direct Action Quick Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {/* WhatsApp Direct Action Button */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-[#0e1320] border border-emerald-500/30 hover:border-emerald-400/70 transition-all flex items-center justify-between group shadow-lg shadow-black/40 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5 fill-emerald-400/30" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-emerald-400">Fastest Response</div>
                <div className="text-sm font-semibold text-white">Chat on WhatsApp</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* Email Direct Action Button */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-4 rounded-2xl bg-[#0e1320] border border-white/[0.08] hover:border-cyan-500/50 transition-all flex items-center justify-between group shadow-lg shadow-black/40 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-cyan-400">Direct Email</div>
                <div className="text-sm font-semibold text-white">Send an Email</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* Call Directly Action Button */}
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="p-4 rounded-2xl bg-[#0e1320] border border-white/[0.08] hover:border-indigo-500/50 transition-all flex items-center justify-between group shadow-lg shadow-black/40 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-indigo-400">Direct Call</div>
                <div className="text-sm font-semibold text-white">+977 9805324548</div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Main Form & Contact Info Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left: Contact Info details */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0e1320]/80 border border-white/[0.08] p-7 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Direct Contact Details</h3>
                <p className="text-xs text-zinc-400">
                  Feel free to reach out directly via your preferred channel.
                </p>
              </div>

              {/* Location Badge */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-zinc-400">Location</div>
                  <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Kathmandu Valley, Nepal</div>
                </div>
              </div>

              {/* Email with copy button */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-zinc-400">Email Address</div>
                    <div className="text-sm font-semibold text-white break-all">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-zinc-400">Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-white">{PERSONAL_INFO.phone}</div>
                </div>
              </div>

              {/* Certification note */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-amber-400">Nepal Engineering Council</div>
                  <div className="text-xs text-zinc-300">Registered Professional Engineer (PE #83661)</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/[0.06] mt-6">
              <div className="text-xs font-mono text-zinc-400 mb-3">Online Profiles</div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] text-zinc-200 text-xs font-medium hover:text-white transition-all"
                >
                  <LinkedInIcon className="w-4 h-4 text-cyan-400" />
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] text-zinc-200 text-xs font-medium hover:text-white transition-all"
                >
                  <GitHubIcon className="w-4 h-4 text-zinc-200" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right: Functional Contact Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0e1320]/80 border border-white/[0.08] p-7">
            <h3 className="text-lg font-bold text-white mb-1">Send a Direct Message</h3>
            <p className="text-xs text-zinc-400 mb-6">
              Fill out the details below to initiate contact.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Message Prepared!</h4>
                <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Your email client has been opened with your pre-filled inquiry. You can also send
                  a quick message right now via WhatsApp for an immediate response.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300 text-xs font-medium transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-zinc-300 mb-1.5"
                    >
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-white placeholder:text-zinc-500 text-xs outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-zinc-300 mb-1.5"
                    >
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-white placeholder:text-zinc-500 text-xs outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-zinc-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-white placeholder:text-zinc-500 text-xs outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-zinc-300 mb-1.5"
                  >
                    Your Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Describe your project, requirements, timeline, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 text-white placeholder:text-zinc-500 text-xs outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Preparing Message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
