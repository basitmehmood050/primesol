import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/primesolData';
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#04030A] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none animate-aurora" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-purple-500/25">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-mono luxury-gradient-text font-semibold tracking-wider">
                VERIFIED CLIENT REVIEWS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Trusted by <span className="luxury-gradient-text">Founders Worldwide</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md leading-relaxed font-normal">
            Direct feedback from product owners and executives who scaled their software platforms with PrimeSol.
          </p>
        </div>

        {/* Editorial Featured Testimonial Showcase */}
        <div className="pt-12">
          <div className="relative rounded-2xl bg-gradient-to-b from-[#120E2B] via-[#09071A] to-[#04030A] border border-purple-500/30 p-8 sm:p-12 lg:p-14 shadow-2xl shadow-purple-950/30">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center justify-between">
                <Quote className="w-10 h-10 text-cyan-400/60" />
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-amber-500/30">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-white leading-relaxed text-balance">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/[0.08]">
                <div>
                  <div className="text-base sm:text-lg font-semibold text-white">
                    {current.author}
                  </div>
                  <div className="text-xs font-mono text-neutral-400 mt-0.5">
                    {current.role} · <span className="text-cyan-300 font-semibold">{current.company}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-purple-300 mr-2">
                    0{currentIndex + 1} / 0{TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={prev}
                    className="p-3 rounded-xl bg-white/[0.05] border border-purple-500/30 text-neutral-300 hover:text-white hover:border-cyan-400/60 transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="p-3 rounded-xl bg-white/[0.05] border border-purple-500/30 text-neutral-300 hover:text-white hover:border-cyan-400/60 transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Selector Row for All 5 Testimonials */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {TESTIMONIALS.map((t, index) => {
              const isSelected = currentIndex === index;
              return (
                <button
                  key={t.author}
                  onClick={() => setCurrentIndex(index)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#171130] to-[#0E0C22] border-cyan-400/50 text-cyan-200 shadow-lg shadow-purple-950/40 translate-y-[-2px]'
                      : 'bg-[#080614]/80 border-white/[0.06] text-neutral-400 hover:border-purple-500/30 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-semibold truncate">{t.author}</div>
                  <div className="text-[11px] font-mono text-neutral-400 truncate mt-0.5">{t.company}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
