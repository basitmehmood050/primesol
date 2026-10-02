import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data/primesolData';

interface NavbarProps {
  onBookCall: () => void;
  onOpenCareers: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookCall, onOpenCareers }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#04030A]/90 backdrop-blur-xl border-b border-purple-500/20 py-3.5 shadow-2xl shadow-purple-950/40'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand), Zone 2 (Clean 6 links), Zone 3 (CTA) */}
          <div className="flex items-center justify-between">
            {/* Zone 1: PrimeSol Brand Wordmark */}
            <a
              href="#"
              className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-900/80 via-indigo-950 to-black border border-purple-500/40 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-400/60 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono font-bold text-sm tracking-tighter luxury-gradient-text">P</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute bottom-1 right-1 animate-pulse shadow-[0_0_8px_#06B6D4]" />
              </div>
              <span className="text-xl font-display font-semibold tracking-tight text-white">
                Prime<span className="luxury-gradient-text font-bold">Sol</span>
              </span>
            </a>

            {/* Zone 2: Navigation Links — Exactly: Home, About Us, Services, Projects, Careers, Contact Us */}
            <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-cyan-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:via-indigo-400 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}

              {/* Careers button */}
              <button
                onClick={onOpenCareers}
                className="hover:text-cyan-300 transition-colors py-1 relative text-neutral-300 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Careers</span>
                <span className="text-[10px] text-cyan-300 font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                  Hiring
                </span>
              </button>

              {/* Contact Us button */}
              <a
                href="#contact"
                className="hover:text-cyan-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:via-indigo-400 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-200"
              >
                Contact Us
              </a>
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hidden xl:inline-flex text-xs font-mono text-neutral-400 hover:text-cyan-300 transition-colors py-2 px-2.5"
              >
                {CONTACT_INFO.phoneDisplay}
              </a>
              <button
                onClick={onBookCall}
                className="luxury-prismatic-btn group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl cursor-pointer whitespace-nowrap shadow-lg"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Book a Call</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onBookCall}
                className="luxury-prismatic-btn px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-400 hover:text-white rounded-xl border border-white/10 bg-[#0A0818]/80"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#05040E]/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between border-b border-purple-500/20 animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono pb-2 border-b border-white/10">
              Menu
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-200 hover:text-cyan-300 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCareers();
                }}
                className="text-left text-lg font-medium text-neutral-200 hover:text-cyan-300 py-1 transition-colors flex items-center justify-between"
              >
                <span>Careers</span>
                <span className="text-xs font-mono text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/40">
                  Hiring
                </span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-200 hover:text-cyan-300 py-1 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="text-xs text-neutral-400 font-mono">Direct Communication</div>
            <div className="text-sm text-neutral-300 space-y-1">
              <div>{CONTACT_INFO.email}</div>
              <div>{CONTACT_INFO.phoneDisplay}</div>
              <div className="text-xs text-neutral-400">{CONTACT_INFO.hours}</div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="luxury-prismatic-btn w-full py-3.5 text-center text-sm font-semibold rounded-xl"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      )}
    </>
  );
};
