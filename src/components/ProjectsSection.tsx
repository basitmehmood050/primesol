import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/primesolData';
import { ArrowUpRight, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';

const CATEGORIES = [
  'All',
  'UI/UX',
  'Websites',
  'SaaS',
  'E-Commerce',
  'Mobile Apps',
  'AI & Blockchain',
  'EdTech',
];

interface ProjectsSectionProps {
  onSelectProjectForContact: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProjectForContact }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categories.includes(activeFilter));

  // Flagship projects for large editorial showcase
  const flagshipProjects = filteredProjects.slice(0, 3);
  const remainingProjects = filteredProjects.slice(3);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#030308] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-l from-purple-600/10 via-indigo-600/10 to-transparent rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none animate-aurora" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-purple-500/25">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-mono luxury-gradient-text font-semibold tracking-wider">
                CURATED PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Featured Case Studies & <span className="luxury-gradient-text">Systems</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md leading-relaxed font-normal">
            Real software systems, platforms, mobile apps, and automated workflows engineered for ambitious teams worldwide.
          </p>
        </div>

        {/* Filter Bar (Interactive Segmented Tabs) */}
        <div className="pt-8 pb-10">
          <div className="flex items-center gap-2 p-1.5 bg-[#090818]/80 border border-purple-500/20 rounded-2xl overflow-x-auto no-scrollbar backdrop-blur-md">
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-cyan-950/90 text-white border border-cyan-400/40 shadow-lg shadow-purple-950/50'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Part 1: Large Editorial Flagship Showcase (Prominent viewports) */}
        <div className="space-y-12">
          {flagshipProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-gradient-to-b from-[#100D24] via-[#090718] to-[#04030A] border border-purple-500/25 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden cursor-pointer shadow-2xl shadow-purple-950/20 luxury-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
                {/* Visual / Screenshot column */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-white/[0.08] bg-[#070512] group-hover:border-cyan-500/50 transition-colors shadow-inner">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#120E29] to-[#080614] p-6">
                        <span className="text-xl font-display font-semibold text-neutral-300">
                          {project.title}
                        </span>
                      </div>
                    )}
                    {/* Subtle overlay badge */}
                    {project.metricsLabel && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono text-cyan-300 shadow-lg">
                        {project.metricsLabel}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-5 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Zero-Pill metadata: unboxed text with middle-dot separator */}
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-300/80">
                    <span>{project.categories.join(' · ')}</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-purple-400 font-medium">
                      {project.type}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#070512] border border-purple-500/20 text-neutral-300 group-hover:border-cyan-400/40 group-hover:text-cyan-200 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    <span>View Project Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Grid for Additional Selected Projects */}
        {remainingProjects.length > 0 && (
          <div className="mt-14 pt-12 border-t border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-300/80 font-semibold">
                Additional Deployments ({remainingProjects.length})
              </span>
              <span className="text-xs text-neutral-400">Click any card to inspect system details</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {remainingProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group p-5 rounded-2xl bg-[#080616]/80 border border-purple-500/20 hover:border-cyan-400/50 hover:bg-[#100D25] transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 shadow-xl shadow-purple-950/20 hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-purple-300/70">
                      <span>{project.categories[0]}</span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <div>
                      <h4 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h4>
                      <div className="text-xs font-mono text-purple-400 mt-0.5">
                        {project.type}
                      </div>
                    </div>

                    <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#05040C] text-neutral-400 border border-white/5 group-hover:border-purple-500/25"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 text-neutral-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(name) => {
          onSelectProjectForContact(name);
        }}
      />
    </section>
  );
};
