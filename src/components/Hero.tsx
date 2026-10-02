import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code2, Layers, Zap } from 'lucide-react';
import { HeroSystemVisual } from './HeroSystemVisual';

interface HeroProps {
  onBookCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  // Dynamic rotating animated text for the hero headline
  const phrases = [
    'AI-Powered Software',
    'Autonomous AI Agents',
    'Custom Web & Mobile Apps',
    'Enterprise Automation Systems',
    'Intelligent Dashboards',
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setFadeState('fade-in');
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#030308]">
      {/* Background multi-layer luxury mesh gradients with breathing animation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-purple-600/15 via-indigo-600/15 to-cyan-500/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none animate-float" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-emerald-500/8 rounded-full blur-[110px] pointer-events-none animate-aurora" />

      {/* Subtle geometric luxury grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Messaging */}
          <div className="lg:col-span-6 space-y-7">
            {/* Editorial subtle kicker with animated gradient badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-purple-500/25 shadow-[0_0_15px_rgba(168,85,247,0.15)] backdrop-blur-md">
              <span className="font-mono text-xs font-semibold tracking-wider luxury-gradient-text">PRIMESOL</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-xs text-neutral-300 font-medium tracking-tight">AI-FIRST SOFTWARE & AUTOMATION</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ONLINE 2026</span>
              </span>
            </div>

            {/* Main Headline with dynamic animated rotating text */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-bold tracking-tight text-white leading-[1.08] text-balance">
              We Help Businesses Scale with{' '}
              <span className="block mt-1 min-h-[1.2em]">
                <span
                  className={`luxury-gradient-text transition-all duration-300 transform inline-block ${
                    fadeState === 'fade-in'
                      ? 'opacity-100 translate-y-0 filter blur-0'
                      : 'opacity-0 -translate-y-2 filter blur-sm'
                  }`}
                >
                  {phrases[phraseIndex]}
                </span>
              </span>
            </h1>

            {/* Supporting Text directly from current website */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl font-normal">
              PrimeSol helps small and growing businesses go digital, automate operations, and use practical AI through websites, web apps, mobile apps, dashboards, and AI agents.
            </p>

            {/* Action buttons with luxury gradient styling and shimmer animations */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                className="luxury-prismatic-btn inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold rounded-xl cursor-pointer whitespace-nowrap group"
              >
                <span>Explore AI Services</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="luxury-secondary-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-200 hover:text-white rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <span>View Projects</span>
              </a>

              <button
                onClick={onBookCall}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer whitespace-nowrap group"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-12 transition-transform" />
                <span className="underline decoration-cyan-400/40 underline-offset-4 group-hover:decoration-cyan-400">Book a Call</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust highlights with animated gradient accents */}
            <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2 group cursor-default">
                <Code2 className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-neutral-300 font-medium">Production TypeScript & Python</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <Layers className="w-4 h-4 text-indigo-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-neutral-300 font-medium">Zero-Legacy Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2 group cursor-default">
                <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-neutral-300 font-medium">100% Turnkey Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Digital System Visualization */}
          <div className="lg:col-span-6 lg:pl-4">
            <HeroSystemVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
