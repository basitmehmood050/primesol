import React, { useState } from 'react';
import { WHY_PRIMESOL } from '../data/primesolData';
import { Monitor, Layers, Cpu, MessageSquare, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface WhyPrimeSolProps {
  onBookCall: () => void;
}

export const WhyPrimeSol: React.FC<WhyPrimeSolProps> = ({ onBookCall }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Monitor className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 2:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 3:
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-[#05040B] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-purple-500/25">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-mono luxury-gradient-text font-semibold tracking-wider">
                ENGINEERING PRINCIPLES
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.1] text-balance">
              Why Teams Work With <span className="luxury-gradient-text">PrimeSol</span>
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed font-normal">
              Most software agencies push generic templates or over-engineered bloat. We treat engineering as a craft—focusing on clarity, longevity, and genuine business impact.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#100D24] to-[#080614] border border-purple-500/25 space-y-3.5 shadow-xl shadow-purple-950/20">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-purple-300 font-semibold tracking-wide">PrimeSol Standard</span>
              </div>
              <div className="text-sm text-neutral-200 leading-relaxed">
                100% in-house software engineering team. No outsourced subcontracting or hidden communication layers.
              </div>
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors pt-1 cursor-pointer group"
              >
                <span>Discuss your system requirements</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars Split Layout */}
          <div className="lg:col-span-7 space-y-5">
            {WHY_PRIMESOL.map((pillar, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={pillar.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#16122C] to-[#0D0B1C] border-purple-500/60 shadow-2xl shadow-purple-950/40 translate-x-1.5'
                      : 'bg-[#090814]/80 border-white/[0.06] hover:border-purple-500/30 hover:bg-[#110E24]'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-mono text-purple-400 font-semibold mb-2">
                        {pillar.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-[#060410] border border-purple-500/20 shadow-inner">
                        {getPillarIcon(idx)}
                      </div>
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="text-xs font-mono text-cyan-300 font-medium uppercase tracking-wider">
                        {pillar.subtitle}
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-neutral-300 leading-relaxed pt-1 font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
