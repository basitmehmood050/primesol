import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, User, Mail, Video } from 'lucide-react';
import { CONTACT_INFO } from '../data/primesolData';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'schedule' | 'confirmed'>('schedule');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'AI Automation & Agents',
    date: '2026-10-06',
    time: '03:00 PM PKT (10:00 AM UTC)',
  });
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const topics = [
    'AI Automation & Agents',
    'Custom Web / Mobile App Development',
    'SaaS Product Architecture & Multi-Tenancy',
    'CRM / HRM / Internal Business Systems',
    'Architecture Audit & Cloud Scaling',
  ];

  const availableTimes = [
    '02:00 PM PKT (09:00 AM UTC)',
    '03:00 PM PKT (10:00 AM UTC)',
    '04:30 PM PKT (11:30 AM UTC)',
    '06:00 PM PKT (01:00 PM UTC)',
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setStep('confirmed');
    }, 750);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-gradient-to-b from-[#120E28] via-[#0A0818] to-[#04030A] border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/40 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] border border-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'schedule' ? (
          <form onSubmit={handleBook} className="space-y-5">
            <div className="space-y-1 pr-6">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <Video className="w-3.5 h-3.5 text-purple-400" />
                <span>30-Min Technical Discovery Call</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Schedule a Call with <span className="luxury-gradient-text">PrimeSol</span>
              </h3>
              <p className="text-xs text-neutral-400">
                Direct conversation with our product and engineering leadership. No sales intermediaries.
              </p>
            </div>

            <div className="space-y-4 pt-1">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-300">Your Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-purple-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#060410] border border-purple-500/25 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-300">Work Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-purple-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#060410] border border-purple-500/25 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  />
                </div>
              </div>

              {/* Topic */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-300">Primary Discussion Focus</label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#060410] border border-purple-500/25 text-sm text-white focus:outline-none focus:border-cyan-400/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] cursor-pointer"
                >
                  {topics.map((t) => (
                    <option key={t} value={t} className="bg-[#090718] text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Available Time Slots */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-300">Select Convenient Time</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#060410] border border-purple-500/25 text-sm text-white focus:outline-none focus:border-cyan-400/80 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] cursor-pointer font-mono text-xs"
                >
                  {availableTimes.map((tm) => (
                    <option key={tm} value={tm} className="bg-[#090718] text-white">
                      {tm}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="luxury-prismatic-btn w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-xl"
              >
                {submitting ? (
                  <span>Securing Calendar Slot...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Confirm Call Reservation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center space-y-5 animate-in fade-in duration-200">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Meeting Confirmed
              </h3>
              <p className="text-sm text-neutral-200 max-w-sm mx-auto leading-relaxed font-normal">
                We have reserved your session with the PrimeSol engineering lead.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#060410] border border-purple-500/20 text-left text-xs font-mono space-y-1.5 max-w-sm mx-auto">
              <div className="text-neutral-400">Host: Usman Ali Ashraf (Product Lead)</div>
              <div className="text-neutral-400">Topic: {formData.topic}</div>
              <div className="text-cyan-300 font-semibold">Time: {formData.time}</div>
              <div className="text-purple-300/80 pt-1">Google Meet link sent to {formData.email}</div>
            </div>

            <button
              onClick={() => {
                setStep('schedule');
                onClose();
              }}
              className="luxury-prismatic-btn px-6 py-2.5 text-xs font-semibold text-white rounded-xl cursor-pointer shadow-lg"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
