import React from 'react';
import { X, ArrowRight, Briefcase, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/primesolData';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareersModal: React.FC<CareersModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const positions = [
    {
      title: 'Full-Stack Engineer (React / Node / Python)',
      type: 'Full-Time · Hybrid / Lahore',
      experience: '2+ Years',
      description: 'Architecting scalable web applications, REST & GraphQL endpoints, and real-time backend synchronization.',
      stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'AI Automation & Agents Engineer',
      type: 'Full-Time · Hybrid / Lahore',
      experience: '1+ Years',
      description: 'Building autonomous tool-calling agents, vector search retrieval (RAG) pipelines, and LLM evaluation benchmarks.',
      stack: ['Python', 'FastAPI', 'Gemini / OpenAI API', 'LlamaIndex', 'Docker'],
    },
    {
      title: 'Senior UI/UX Product Designer',
      type: 'Full-Time / Contract',
      experience: '3+ Years',
      description: 'Designing intuitive, high-conversion web & mobile interfaces, complete design systems, and Figma component libraries.',
      stack: ['Figma', 'Design Systems', 'Interactive Prototyping', 'Wireframing'],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#120E28] via-[#0A0818] to-[#04030A] border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/40 max-h-[90vh] overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close careers modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREERS AT PRIMESOL</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Build Meaningful Software <span className="luxury-gradient-text">With Us</span>
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            We are a tight-knit squad of software craftsmen who value clean architecture, relentless shipping speed, and deep technical ownership.
          </p>
        </div>

        {/* Culture highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-[#060410] border border-purple-500/20 text-xs">
            <div className="font-semibold text-white">Direct Impact</div>
            <div className="text-neutral-400 mt-0.5 text-[11px]">Ship features used by thousands globally</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#060410] border border-purple-500/20 text-xs">
            <div className="font-semibold text-white">AI-First Tooling</div>
            <div className="text-neutral-400 mt-0.5 text-[11px]">Modern development environment & workflows</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#060410] border border-purple-500/20 text-xs col-span-2 sm:col-span-1">
            <div className="font-semibold text-white">Merit & Autonomy</div>
            <div className="text-neutral-400 mt-0.5 text-[11px]">No micromanagement or bureaucracy</div>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="space-y-4 pt-2">
          <div className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
            Current Open Roles
          </div>

          <div className="space-y-3">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="p-4 sm:p-5 rounded-2xl bg-[#080616]/80 border border-purple-500/20 hover:border-cyan-400/50 hover:bg-[#100D25] transition-all space-y-2.5 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-semibold text-white">
                    {pos.title}
                  </h4>
                  <span className="text-[11px] font-mono text-cyan-300 shrink-0 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {pos.type}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {pos.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pos.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#05040C] text-neutral-300 border border-purple-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="p-5 rounded-2xl bg-[#060410] border border-purple-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ready to Apply?</span>
            </div>
            <p className="text-xs text-neutral-400">
              Send your GitHub profile, portfolio, and CV to{' '}
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-cyan-300 font-mono underline">
                {CONTACT_INFO.email}
              </a>{' '}
              with the role in subject.
            </p>
          </div>

          <a
            href={`mailto:${CONTACT_INFO.email}?subject=PrimeSol Career Application`}
            className="luxury-prismatic-btn inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white rounded-xl cursor-pointer shrink-0 shadow-lg"
          >
            <span>Email Application</span>
            <ArrowRight className="w-3 h-3 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};
