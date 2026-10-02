import React, { useState, useEffect } from 'react';
import { Cpu, Database, Network, Bot, ShieldCheck, Activity } from 'lucide-react';

interface SystemNode {
  id: string;
  name: string;
  type: string;
  status: string;
  metric: string;
  desc: string;
  x: number;
  y: number;
}

export const HeroSystemVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('agent');
  const [pulseIndex, setPulseIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const nodes: SystemNode[] = [
    {
      id: 'agent',
      name: 'Autonomous Agent',
      type: 'Reasoning Engine',
      status: 'Active',
      metric: '99.4% Precision',
      desc: 'Multi-step planning, tool-calling, and background autonomous workflow execution without human bottleneck.',
      x: 50,
      y: 22,
    },
    {
      id: 'api',
      name: 'High-Throughput API',
      type: 'FastAPI / Node.js',
      status: 'Synchronized',
      metric: '18ms P99 Latency',
      desc: 'Asynchronous event streaming and strongly typed REST/GraphQL contracts powering client apps.',
      x: 24,
      y: 54,
    },
    {
      id: 'db',
      name: 'Enterprise Data Store',
      type: 'PostgreSQL / Vector',
      status: 'Protected',
      metric: 'ACID Compliant',
      desc: 'Normalized relational records paired with vector embeddings for instant semantic search.',
      x: 76,
      y: 54,
    },
    {
      id: 'interface',
      name: 'Responsive Client UI',
      type: 'Next.js & React Native',
      status: 'Connected',
      metric: '60 FPS Native',
      desc: 'Tailored web portals and native mobile clients with offline-first synchronization.',
      x: 50,
      y: 84,
    },
  ];

  const currentNode = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#0F0D1C] via-[#090814] to-[#040308] border border-purple-500/25 p-6 lg:p-7 overflow-hidden shadow-2xl shadow-purple-950/30">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-aurora" />

      {/* Grid line texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Header bar of the system visualizer */}
      <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping shadow-[0_0_10px_#06B6D4]" />
          <span className="text-xs font-mono font-medium luxury-gradient-text tracking-wider">
            PrimeSol Autonomous Node Mesh
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-cyan-300/80">Real-time Operational Pipeline</span>
        </div>
      </div>

      {/* Interactive Topology Graph */}
      <div className="relative h-[280px] sm:h-[310px] w-full flex items-center justify-center">
        {/* SVG connection lines and flowing pulses */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Defs for gradients */}
          <defs>
            <linearGradient id="lineGradCosmic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(192, 132, 252, 0.6)" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.7)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.8)" />
            </linearGradient>
            <linearGradient id="lineGlowCyan" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0.4)" />
            </linearGradient>
          </defs>

          {/* Lines connecting Agent to API and DB */}
          <line x1="50" y1="26" x2="26" y2="52" stroke="url(#lineGlowCyan)" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="50" y1="26" x2="74" y2="52" stroke="url(#lineGlowCyan)" strokeWidth="1" strokeDasharray="3,3" />
          {/* Lines connecting API and DB to UI */}
          <line x1="26" y1="56" x2="50" y2="82" stroke="url(#lineGlowCyan)" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="74" y1="56" x2="50" y2="82" stroke="url(#lineGlowCyan)" strokeWidth="1" strokeDasharray="3,3" />
          {/* Horizontal bus between API and DB */}
          <line x1="30" y1="54" x2="70" y2="54" stroke="url(#lineGradCosmic)" strokeWidth="1.5" />

          {/* Active animated pulses travelling through paths */}
          {pulseIndex === 0 && <circle cx="38" cy="39" r="2.2" fill="#38BDF8" className="animate-ping" />}
          {pulseIndex === 1 && <circle cx="62" cy="39" r="2.2" fill="#C084FC" className="animate-ping" />}
          {pulseIndex === 2 && <circle cx="50" cy="54" r="2.2" fill="#818CF8" className="animate-ping" />}
          {pulseIndex === 3 && <circle cx="38" cy="69" r="2.2" fill="#34D399" className="animate-ping" />}
        </svg>

        {/* System Nodes Buttons */}
        {nodes.map((node) => {
          const isSelected = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute group z-20 flex flex-col items-center cursor-pointer transition-all duration-300 focus:outline-none"
            >
              <div
                className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-br from-purple-900/90 via-indigo-950 to-neutral-950 border-2 border-cyan-400 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.5)] scale-110'
                    : 'bg-[#0E0C1C]/90 border border-purple-500/30 text-neutral-400 hover:border-cyan-400/60 hover:text-white hover:scale-105'
                }`}
              >
                {node.id === 'agent' && <Bot className="w-5 h-5 text-purple-300" />}
                {node.id === 'api' && <Network className="w-5 h-5 text-indigo-300" />}
                {node.id === 'db' && <Database className="w-5 h-5 text-cyan-300" />}
                {node.id === 'interface' && <Cpu className="w-5 h-5 text-emerald-300" />}

                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping shadow-[0_0_10px_#06B6D4]" />
                )}
              </div>
              <span
                className={`mt-2 text-[11px] font-medium tracking-tight whitespace-nowrap px-2 py-0.5 rounded-full transition-all ${
                  isSelected 
                    ? 'text-cyan-200 font-semibold bg-cyan-950/60 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]' 
                    : 'text-neutral-400 group-hover:text-neutral-200'
                }`}
              >
                {node.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Node Detail Box (Inspection Drawer) */}
      <div className="relative z-10 mt-3 pt-3 border-t border-purple-500/20 bg-[#0A0817]/90 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-purple-400 font-medium">[{currentNode.type}]</span>
            <span className="text-xs text-white font-semibold">{currentNode.name}</span>
            <span className="text-[10px] text-cyan-300 font-mono">· {currentNode.metric}</span>
          </div>
          <p className="text-xs text-neutral-300 max-w-xl leading-relaxed">
            {currentNode.desc}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-neutral-300 bg-white/[0.04] px-2.5 py-1.5 rounded-lg border border-purple-500/20">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Production Ready</span>
        </div>
      </div>
    </div>
  );
};
