import React, { useState } from 'react';
import { FAQS } from '../data/primesolData';
import { Plus, Minus, ArrowRight, Sparkles } from 'lucide-react';

interface FAQSectionProps {
  onBookCall: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onBookCall }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#040309] border-t border-white/[0.08] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Support Prompt */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-purple-500/25">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-mono luxury-gradient-text font-semibold tracking-wider">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.1] text-balance">
              Clear Answers to <span className="luxury-gradient-text">Engineering Inquiries</span>
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed font-normal">
              Everything you need to know about our project scope, contracting, technical stack, and post-launch partnership.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#110E28] to-[#070514] border border-purple-500/25 space-y-3.5 shadow-xl shadow-purple-950/20">
              <div className="text-xs font-mono text-cyan-300 font-semibold">Have a unique scope or stack?</div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Book a direct scoping session with our lead engineers to assess feasibility and architecture.
              </p>
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors pt-1 cursor-pointer group"
              >
                <span>Book technical consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-gradient-to-r from-[#16112E] to-[#0D0B1F] border-purple-500/60 shadow-xl shadow-purple-950/30'
                      : 'bg-[#080616]/80 border-white/[0.06] hover:border-purple-500/30 hover:bg-[#100D24]'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                      isOpen ? 'text-cyan-200' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-lg border shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-cyan-950/60 border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                        : 'bg-white/[0.04] border-white/10 text-neutral-400'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal border-t border-white/[0.06]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
