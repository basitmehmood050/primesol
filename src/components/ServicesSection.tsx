import React, { useState } from 'react';
import { 
  SERVICE_CATEGORIES, 
  ServiceItem 
} from '../data/primesolData';
import { 
  Bot, 
  Code, 
  Briefcase, 
  Palette, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ChevronRight,
  Zap
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onBookCall: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onBookCall }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(SERVICE_CATEGORIES[0].id);
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICE_CATEGORIES[0].services[0]);

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeCategoryId) || SERVICE_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-automation':
        return <Bot className="w-4 h-4" />;
      case 'software-development':
        return <Code className="w-4 h-4" />;
      case 'business-systems':
        return <Briefcase className="w-4 h-4" />;
      case 'design-growth':
        return <Palette className="w-4 h-4" />;
      case 'infrastructure-support':
        return <Server className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#040308] overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none animate-aurora" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with dynamic animated gradient text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-purple-500/25">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-mono luxury-gradient-text font-semibold tracking-wider">
                CAPABILITIES & ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              AI-First <span className="luxury-gradient-text">Digital Solutions</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md leading-relaxed font-normal">
            From autonomous agents and automated business pipelines to native mobile apps and multi-tenant SaaS architectures.
          </p>
        </div>

        {/* Category Navigation Bar (Interactive Tab Controls) */}
        <div className="pt-8 pb-10">
          <div className="flex items-center gap-2.5 p-1.5 bg-[#0A0818]/80 border border-purple-500/20 rounded-2xl overflow-x-auto no-scrollbar backdrop-blur-md">
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = activeCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategoryId(category.id);
                    setSelectedService(category.services[0]);
                  }}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-900/80 via-indigo-900/80 to-cyan-950/80 text-white shadow-lg border border-cyan-400/40 shadow-purple-950/50'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={isActive ? 'text-cyan-300' : 'text-neutral-500'}>
                    {getCategoryIcon(category.id)}
                  </span>
                  <span>{category.name}</span>
                  <span className={`text-[11px] font-mono ml-1 px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-cyan-400/20 text-cyan-200' : 'text-neutral-500'
                  }`}>
                    {category.services.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Subtitle */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm sm:text-base text-neutral-200 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{activeCategory.tagline}</span>
          </p>
          <span className="hidden sm:inline-block text-xs font-mono text-purple-300/80">
            Select a service to inspect architectural deliverables
          </span>
        </div>

        {/* Main Grid: Service Selection List + Rich Technical Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Services List in this Category */}
          <div className="lg:col-span-5 space-y-2.5">
            {activeCategory.services.map((service, index) => {
              const isSelected = selectedService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  onMouseEnter={() => setSelectedService(service)}
                  className={`group relative p-4 rounded-xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#17112E] to-[#0E0C1F] border-purple-500/60 shadow-xl shadow-purple-950/40 translate-x-1.5'
                      : 'bg-[#090814]/80 border-white/[0.06] hover:border-purple-500/30 hover:bg-[#110E24]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-purple-400/80">
                          0{index + 1}.
                        </span>
                        <h3 className={`text-base font-semibold tracking-tight transition-colors ${
                          isSelected ? 'text-cyan-300' : 'text-neutral-200 group-hover:text-white'
                        }`}>
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className={`p-1.5 rounded-lg border transition-colors shrink-0 mt-1 ${
                      isSelected 
                        ? 'border-cyan-400/50 bg-cyan-950/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]' 
                        : 'border-white/5 bg-neutral-900/40 text-neutral-500 group-hover:text-white group-hover:border-white/10'
                    }`}>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Technical Deliverables & Deep Architecture Inspector */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#100D24] via-[#0A0818] to-[#05040B] border border-purple-500/30 p-7 sm:p-8 space-y-7 shadow-2xl shadow-purple-950/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                    <span>{selectedService.category}</span>
                    <span aria-hidden="true" className="text-neutral-600">/</span>
                    <span className="text-cyan-400">Service Specification</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                    {selectedService.name}
                  </h3>
                </div>

                <button
                  onClick={() => onSelectService(selectedService.name)}
                  className="luxury-prismatic-btn inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white rounded-xl cursor-pointer shrink-0 shadow-lg"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

              {/* Service Description */}
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                {selectedService.description}
              </p>

              {/* Architectural Deliverables */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core Engineering Deliverables</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#070512]/90 border border-purple-500/20 text-xs text-neutral-200 hover:border-cyan-400/40 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Alignment */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                  Primary Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#070512] border border-purple-500/25 text-purple-200 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span>Includes 30-Day Post-Launch Warranty & Documentation</span>
                </div>
                <button
                  onClick={onBookCall}
                  className="text-cyan-300 hover:text-cyan-200 font-medium inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Schedule technical discovery call</span>
                  <ArrowRight className="w-3 h-3 text-cyan-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
