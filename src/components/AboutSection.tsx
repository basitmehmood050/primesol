import React from 'react';
import { COMPANY_STORY, HERO_ASSETS } from '../data/primesolData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#04030A] border-t border-white/[0.08] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none animate-aurora" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-purple-500/25">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-mono luxury-gradient-text font-semibold tracking-wider">
                OUR FOUNDING JOURNEY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              From a Hostel Room to <span className="luxury-gradient-text">PrimeSol</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md leading-relaxed font-normal">
            Founded on engineering rigor, late-night curiosity, and an unshakeable belief that software should be built with craft and care.
          </p>
        </div>

        {/* Studio & Mission Split */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 aspect-video shadow-2xl shadow-purple-950/30 bg-[#070512]">
              <img
                src={HERO_ASSETS.studioOffice}
                alt="PrimeSol Engineering Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>PrimeSol Engineering HQ</span>
                </span>
                <span className="text-cyan-300">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Crafted by Engineers, Trusted by Founders
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              PrimeSol was born out of a shared obsession for solving hard technical problems. What started as late-night coding sessions in a university hostel grew into an international software agency trusted by entrepreneurs across North America, Europe, Asia, and the Middle East.
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              We eliminated the traditional agency fluff: no endless slide decks, no account managers who can&apos;t read code, and no technical debt pushed onto clients. Every solution is architected with modern modularity and tested under production workloads.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#110E28] to-[#070514] border border-purple-500/25 shadow-lg">
                <div className="text-2xl sm:text-3xl font-display font-bold luxury-gradient-text">100%</div>
                <div className="text-xs text-neutral-300 font-medium mt-1">In-House Engineering</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#110E28] to-[#070514] border border-purple-500/25 shadow-lg">
                <div className="text-2xl sm:text-3xl font-display font-bold luxury-gradient-text">AI-First</div>
                <div className="text-xs text-neutral-300 font-medium mt-1">Production Workflows</div>
              </div>
            </div>
          </div>
        </div>

        {/* Authentic Company Evolution Timeline */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-300/80 font-semibold">
              The Path to PrimeSol
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
              Milestones of Growth
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_STORY.map((milestone, idx) => (
              <div
                key={milestone.title}
                className="relative p-6 rounded-2xl bg-[#080616]/80 border border-purple-500/20 hover:border-cyan-400/50 hover:bg-[#100D25] transition-all duration-300 space-y-3 shadow-xl shadow-purple-950/20 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {milestone.period}
                  </span>
                </div>

                <h5 className="text-lg font-display font-bold text-white tracking-tight">
                  {milestone.title}
                </h5>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
