import React from 'react';
import { STATISTICS } from '../data/primesolData';

export const Metrics: React.FC = () => {
  return (
    <section id="metrics" className="relative border-y border-white/[0.08] bg-gradient-to-r from-[#06050C] via-[#0A0818] to-[#06050C] py-14 overflow-hidden">
      {/* Background subtle light pulse */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-32 bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-aurora" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          {STATISTICS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`group py-6 lg:py-2 transition-all duration-300 hover:bg-white/[0.02] p-4 rounded-xl cursor-default ${
                idx % 2 === 0 ? 'pr-4 sm:pr-8' : 'pl-4 sm:pl-8'
              } ${idx === 0 ? 'lg:pl-0' : ''} ${idx === STATISTICS.length - 1 ? 'lg:pr-0' : ''}`}
            >
              <div className="space-y-2.5">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight font-mono-code luxury-gradient-text group-hover:scale-105 transition-transform duration-300 origin-left inline-block">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-neutral-100 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span>{stat.label}</span>
                </div>
                <p className="text-xs text-neutral-400 max-w-xs leading-relaxed font-normal group-hover:text-neutral-300 transition-colors">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
