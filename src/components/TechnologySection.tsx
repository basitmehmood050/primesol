import React, { useState } from 'react';
import { TECHNOLOGIES } from '../data/primesolData';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>(TECHNOLOGIES[0].name);

  const active = TECHNOLOGIES.find((t) => t.name === selectedTech) || TECHNOLOGIES[0];

  return (
    <section id="tech" className="relative py-24 lg:py-32 bg-[#04030A] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-purple-500/25">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-mono luxury-gradient-text font-semibold tracking-wider">
                ENGINEERING ECOSYSTEM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Modern Technical <span className="luxury-gradient-text">Stack</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md leading-relaxed font-normal">
            Battle-tested frameworks, typed architectures, and low-latency cloud infrastructure selected for reliability and longevity.
          </p>
        </div>

        {/* Technical Ecosystem Visualization */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tech Nodes List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {TECHNOLOGIES.map((tech) => {
              const isSelected = selectedTech === tech.name;
              return (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTech(tech.name)}
                  onMouseEnter={() => setSelectedTech(tech.name)}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#17112E] to-[#0E0C22] border-purple-500/60 shadow-xl shadow-purple-950/40 translate-x-1.5'
                      : 'bg-[#080616]/80 border-white/[0.06] hover:border-purple-500/30 hover:bg-[#110E24]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-base font-display font-bold text-white">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed font-normal">
                    {tech.role}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Stack Visualizer & Integration Spec */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-[#110E28] via-[#09071A] to-[#04030A] border border-purple-500/30 space-y-6 shadow-2xl shadow-purple-950/30 sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping shadow-[0_0_8px_#06B6D4]" />
                  <span className="text-xs font-mono text-neutral-300">Stack Architectural Inspection</span>
                </div>
                <span className="text-xs font-mono text-purple-400">v2026.1</span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                  Selected Component
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                  {active.name}
                </h3>
                <div className="text-xs font-mono text-cyan-300">
                  Category: {active.category}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#060410] border border-purple-500/20 space-y-2">
                <div className="text-xs font-mono text-purple-300 font-semibold">Role in PrimeSol Systems:</div>
                <p className="text-sm text-neutral-200 leading-relaxed font-normal">
                  {active.role}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-cyan-300 uppercase font-semibold">Production Invariants</div>
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Strict TypeScript typing with zero unvalidated any types</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Automated containerized CI/CD with staging preview branches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Observability, structured error logging, and latency tracing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
