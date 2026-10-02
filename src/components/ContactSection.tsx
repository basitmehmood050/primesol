import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, SERVICE_CATEGORIES } from '../data/primesolData';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceNeeded: prefilledService || 'AI Automation',
    projectBudget: '$5k - $15k',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: prefilledService }));
    }
  }, [prefilledService]);

  // All 20 services extracted for dropdown
  const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services.map((s) => s.name));

  const budgetOptions = [
    '< $5,000 (Scoping & MVP)',
    '$5,000 - $15,000 (Standard Release)',
    '$15,000 - $35,000 (Full-Scale System)',
    '$35,000+ (Enterprise Architecture)',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please briefly share what you are building';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate real-time API transmission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#04030A] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none animate-aurora" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-purple-500/25">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-mono luxury-gradient-text font-semibold tracking-wider">
                  DIRECT COMMUNICATION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.1]">
                Start Your Project With <span className="luxury-gradient-text">PrimeSol</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Tell us about your application, workflow challenges, or timeline. You&apos;ll receive a response from our product lead within 24 hours.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#090718]/80 border border-purple-500/20 hover:border-cyan-400/40 transition-colors">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-900/60 to-black border border-purple-500/30 text-cyan-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400">Email Inquiry</div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#090718]/80 border border-purple-500/20 hover:border-cyan-400/40 transition-colors">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-900/60 to-black border border-purple-500/30 text-cyan-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400">Direct Phone / WhatsApp</div>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-base font-semibold text-white hover:text-cyan-300 transition-colors font-mono"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#090718]/80 border border-purple-500/20 hover:border-cyan-400/40 transition-colors">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-900/60 to-black border border-purple-500/30 text-cyan-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400">Engineering Headquarters</div>
                  <div className="text-base font-medium text-white">
                    {CONTACT_INFO.location}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#090718]/80 border border-purple-500/20 hover:border-cyan-400/40 transition-colors">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-900/60 to-black border border-purple-500/30 text-cyan-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400">Operational Hours</div>
                  <div className="text-base font-medium text-white">
                    {CONTACT_INFO.hours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-b from-[#110E28] via-[#0A081A] to-[#05040E] border border-purple-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-purple-950/30 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                    Inquiry Received
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-200 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Our lead team has received your inquiry for{' '}
                    <span className="text-cyan-300 font-semibold">{formData.serviceNeeded}</span>. We will review your project details and reach out to {formData.email} within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        serviceNeeded: 'AI Automation',
                        projectBudget: '$5k - $15k',
                        projectDetails: '',
                      });
                    }}
                    className="luxury-prismatic-btn inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-lg"
                  >
                    <span>Send Another Message</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-white tracking-tight">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Fill out this quick form or reach out directly at {CONTACT_INFO.email}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-neutral-300">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Usman Ashraf"
                        className={`w-full px-4 py-3 rounded-xl bg-[#060410] border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all ${
                          errors.fullName
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-purple-500/25 focus:border-cyan-400/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-neutral-300">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#060410] border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-purple-500/25 focus:border-cyan-400/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-neutral-300">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#060410] border border-purple-500/25 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all"
                      />
                    </div>

                    {/* Service Needed */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-neutral-300">
                        Service Needed
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#060410] border border-purple-500/25 text-sm text-white focus:outline-none focus:border-cyan-400/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all cursor-pointer"
                      >
                        {allServices.map((svc) => (
                          <option key={svc} value={svc} className="bg-[#090718] text-white">
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-300">
                      Anticipated Budget Range
                    </label>
                    <select
                      value={formData.projectBudget}
                      onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#060410] border border-purple-500/25 text-sm text-white focus:outline-none focus:border-cyan-400/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#090718] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-300">
                      Project Scope & Goals <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us what you are trying to build, key target users, target launch date, and any existing systems or links..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#060410] border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all resize-none ${
                        errors.projectDetails
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-purple-500/25 focus:border-cyan-400/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="text-[11px] text-red-400">{errors.projectDetails}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="luxury-prismatic-btn w-full py-4 px-6 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xl"
                    >
                      {loading ? (
                        <span>Transmitting Specification...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
