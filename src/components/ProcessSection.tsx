import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/primesolData';
import { CheckCircle2, ArrowRight, Clock, Sparkles } from 'lucide-react';

interface ProcessSectionProps {
  onBookCall: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onBookCall }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#04030A] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-purple-500/25">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-mono luxury-gradient-text font-semibold tracking-wider">
                DELIVERY METHODOLOGY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Engineering Sprints & <span className="luxury-gradient-text">Lifecycle</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md leading-relaxed font-normal">
            Predictable delivery cycles with clear staging demos, milestone commitments, and zero scope ambiguity.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="pt-10 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#17122E] to-[#0E0C20] border-purple-500/60 shadow-xl shadow-purple-950/40 text-cyan-200 translate-y-[-2px]'
                      : 'bg-[#090718]/80 border-white/[0.06] hover:border-purple-500/30 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30' : 'bg-white/5 text-purple-400'
                    }`}>
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {step.duration}
                    </span>
                  </div>
                  <div className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                    isActive ? 'text-white' : 'text-neutral-300'
                  }`}>
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="mt-4 rounded-2xl bg-gradient-to-b from-[#110E28] via-[#0A081A] to-[#05040E] border border-purple-500/30 p-6 sm:p-10 shadow-2xl shadow-purple-950/30 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1.5">
              <div className="text-xs font-mono text-cyan-300">
                Phase {PROCESS_STEPS[activeStep].number} · {PROCESS_STEPS[activeStep].duration}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {PROCESS_STEPS[activeStep].name}
              </h3>
              <div className="text-xs font-mono text-purple-300/80">
                Strategic Focus: {PROCESS_STEPS[activeStep].focus}
              </div>
            </div>

            <button
              onClick={onBookCall}
              className="luxury-prismatic-btn inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white rounded-xl cursor-pointer shrink-0 shadow-lg"
            >
              <span>Schedule Scoping Session</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-300/80 font-semibold">
                Execution Narrative
              </div>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                Tangible Phase Deliverables
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROCESS_STEPS[activeStep].deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#070514]/90 border border-purple-500/20 text-xs text-neutral-200 hover:border-cyan-400/40 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
