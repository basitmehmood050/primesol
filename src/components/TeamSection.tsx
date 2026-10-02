import React from 'react';
import { TEAM_MEMBERS } from '../data/primesolData';
import { Linkedin, ArrowUpRight, Sparkles } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-[#05040D] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-purple-500/25">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-mono luxury-gradient-text font-semibold tracking-wider">
                CORE LEADERSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              The Engineers Behind <span className="luxury-gradient-text">PrimeSol</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md leading-relaxed font-normal">
            Hands-on technical founders and operators leading every product from architectural design to deployment.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="group p-6 rounded-2xl bg-gradient-to-b from-[#100D26] via-[#090718] to-[#04030A] border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl shadow-purple-950/20 hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                {/* Avatar Initial Emblem with gradient shine */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-900/60 via-indigo-950 to-black border border-purple-500/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <span className="text-xl font-display font-bold luxury-gradient-text">
                    {member.initials}
                  </span>
                  <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06B6D4]" />
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-purple-300 font-medium mt-0.5">
                    {member.role}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#060410] border border-purple-500/20 text-neutral-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <a
                  href={member.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
