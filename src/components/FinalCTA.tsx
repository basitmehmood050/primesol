import React from 'react';
import { ArrowRight, Calendar, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { HERO_ASSETS } from '../data/primesolData';

interface FinalCTAProps {
  onStartProject: () => void;
  onBookCall: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject, onBookCall }) => {
  return (
    <section className="relative py-24 lg:py-36 bg-[#030308] border-t border-white/[0.08] overflow-hidden">
      {/* Background radial lighting & image overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen">
        <img
          src={HERO_ASSETS.heroSystem}
          alt=""
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-cyan-500/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono luxury-gradient-text font-semibold">
            ACCELERATE YOUR SOFTWARE ROADMAP
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] text-balance">
          Tell us what you are trying to build. We will help you shape the{' '}
          <span className="luxury-gradient-text">right scope, stack, and launch plan.</span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Whether you need an autonomous AI workflow, custom SaaS platform, or mobile app, our engineers are ready to build it right the first time.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onStartProject}
            className="luxury-prismatic-btn inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-xl cursor-pointer whitespace-nowrap group shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onBookCall}
            className="luxury-secondary-btn inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-neutral-200 hover:text-white rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-lg"
          >
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Book a Call</span>
          </button>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-neutral-300">NDA Protected & Confidential</span>
          </div>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-300">Fast Turnaround Proposals</span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-300">Transparent Sprint Contracts</span>
        </div>
      </div>
    </section>
  );
};
