import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/primesolData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#120E28] via-[#0A0818] to-[#04030A] border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-purple-400">
            {project.categories.map((c, i) => (
              <span key={c}>
                {c}{i < project.categories.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-cyan-300">
            {project.type}
          </p>
        </div>

        {/* Featured Image if available */}
        {project.image && (
          <div className="relative rounded-xl overflow-hidden border border-purple-500/25 aspect-video bg-[#070512]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Description */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-purple-300/80 font-semibold">
            Project Overview
          </div>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
            Architecture & Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-[#070512] border border-purple-500/20 text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-purple-300/80">
            PrimeSol Engineered Project
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestSimilar(project.title);
                onClose();
              }}
              className="w-full sm:w-auto luxury-prismatic-btn inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white rounded-xl cursor-pointer shadow-lg"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
