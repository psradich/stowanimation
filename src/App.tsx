import React from 'react';
import { motion } from 'motion/react';
import { StowLogo } from './components/StowLogo';
import {
  ClaudeIcon,
  OpenAIIcon,
  GeminiIcon,
  MistralIcon,
  GmailIcon,
  NotionIcon,
  SupabaseIcon,
  GithubIcon,
} from './components/BrandIcons';

const leftNodes = [
  { id: 'claude', name: 'Claude', icon: ClaudeIcon, color: 'text-orange-400', y: 90 },
  { id: 'openai', name: 'OpenAI', icon: OpenAIIcon, color: 'text-emerald-400', y: 230 },
  { id: 'gemini', name: 'Gemini', icon: GeminiIcon, color: 'text-blue-400', y: 370 },
  { id: 'mistral', name: 'Mistral', icon: MistralIcon, color: 'text-amber-400', y: 510 },
];

const rightNodes = [
  { id: 'gmail', name: 'Gmail', icon: GmailIcon, color: 'text-red-400', y: 90 },
  { id: 'notion', name: 'Notion', icon: NotionIcon, color: 'text-slate-200', y: 230 },
  { id: 'supabase', name: 'Supabase', icon: SupabaseIcon, color: 'text-emerald-400', y: 370 },
  { id: 'github', name: 'GitHub', icon: GithubIcon, color: 'text-slate-300', y: 510 },
];

const AnimatedPath: React.FC<{ d: string; delayClass: string; reverseDelayClass?: string }> = ({ d, delayClass, reverseDelayClass }) => (
  <g>
    {/* Base dim path */}
    <path d={d} stroke="#1e293b" strokeWidth="2" fill="none" />
    {/* Animated glowing path (forward) */}
    <path
      d={d}
      stroke="#14b8a6"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeDasharray="50 1000"
      className={`glow-line ${delayClass}`}
    />
    {/* Animated glowing path (reverse) */}
    {reverseDelayClass && (
      <path
        d={d}
        stroke="#14b8a6"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="50 1000"
        className={`glow-line ${reverseDelayClass}`}
      />
    )}
  </g>
);

export default function App() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 font-sans bg-slate-950">
      {/* Graphic Container - Scalable */}
      <div className="relative w-full max-w-4xl aspect-[5/3] max-h-[600px] overflow-visible">
        
        {/* SVG Overlay for Paths */}
        <svg
          viewBox="0 0 1000 600"
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Left to Center Paths */}
          {leftNodes.map((node, i) => (
            <AnimatedPath
              key={`path-l-${node.id}`}
              d={`M 132 ${node.y} C 284 ${node.y}, 284 300, 436 300`}
              delayClass={`animate-travel-delayed-${(i * 3) % 4}`}
              reverseDelayClass={`animate-travel-reverse-delayed-${(i * 2 + 1) % 4}`}
            />
          ))}

          {/* Center to Right Paths */}
          {rightNodes.map((node, i) => (
            <AnimatedPath
              key={`path-r-${node.id}`}
              d={`M 564 300 C 716 300, 716 ${node.y}, 868 ${node.y}`}
              delayClass={`animate-travel-delayed-${(i * 2 + 2) % 4}`}
              reverseDelayClass={`animate-travel-reverse-delayed-${(i * 3 + 3) % 4}`}
            />
          ))}
        </svg>

        {/* HTML Nodes */}
        {/* Left Nodes (AI Agents) */}
        {leftNodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2"
            style={{ left: '10%', top: `${(node.y / 600) * 100}%` }}
          >
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 3 + (i % 2), ease: "easeInOut", delay: i * 0.2 }}
              className="w-12 h-12 md:w-16 md:h-16 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center shadow-lg relative z-10"
            >
              <node.icon className={`w-6 h-6 md:w-8 md:h-8 ${node.color}`} />
            </motion.div>
          </motion.div>
        ))}

        {/* Center Node (Stow) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', bounce: 0.4 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full" />
            <StowLogo className="w-24 h-24 md:w-32 md:h-32" />
          </motion.div>
        </motion.div>

        {/* Right Nodes (Web Services) */}
        {rightNodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2"
            style={{ left: '90%', top: `${(node.y / 600) * 100}%` }}
          >
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 3 + (i % 2), ease: "easeInOut", delay: i * 0.3 }}
              className="w-12 h-12 md:w-16 md:h-16 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center shadow-lg relative z-10"
            >
              <node.icon className={`w-6 h-6 md:w-8 md:h-8 ${node.color}`} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
