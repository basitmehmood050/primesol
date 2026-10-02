import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../data/primesolData';

interface FooterProps {
  onOpenCareers: () => void;
  onBookCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCareers, onBookCall }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030308] border-t border-white/[0.08] pt-16 pb-12 text-neutral-400 overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-900/80 via-indigo-950 to-black border border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <span className="font-mono font-bold text-sm tracking-tighter luxury-gradient-text">P</span>
              </div>
              <span className="text-xl font-display font-semibold tracking-tight text-white">
                Prime<span className="luxury-gradient-text font-bold">Sol</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal max-w-sm">
              AI-first software development and automation company helping small and growing businesses build custom platforms, dashboards, and autonomous workflows.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-purple-300/80">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{CONTACT_INFO.website}</span>
              <span>·</span>
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
              Company
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-cyan-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCareers}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Categories */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
              Core Capabilities
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>Custom Web & SaaS Apps</li>
              <li>AI Automation & Agents</li>
              <li>Mobile iOS & Android Apps</li>
              <li>CRM & HRM Business Portals</li>
              <li>Cloud & Database Infrastructure</li>
              <li>UI/UX Design Systems</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white hover:text-cyan-300 transition-colors font-mono"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-neutral-300 hover:text-cyan-300 transition-colors font-mono"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="text-xs text-neutral-400 pt-1">
                Mon - Sat, 9:00 AM - 6:00 PM (PKT)
              </div>
              <div className="pt-2">
                <button
                  onClick={onBookCall}
                  className="luxury-secondary-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-cyan-300 hover:text-white transition-all cursor-pointer shadow-md"
                >
                  <span>Book Consultation Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} PrimeSol. All rights reserved. Built with precision and care.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/primesol-co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
