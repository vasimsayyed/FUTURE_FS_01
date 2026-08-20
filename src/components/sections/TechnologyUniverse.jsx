import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  FileCode, 
  Layout, 
  Palette, 
  Cpu, 
  Server, 
  Flame, 
  Terminal, 
  Brain, 
  Layers, 
  GitBranch, 
  Binary
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import { skillsData, skillCategories } from '../../data/portfolioData';

const iconMap = {
  Code2,
  FileCode,
  Layout,
  Palette,
  Cpu,
  Server,
  Flame,
  Terminal,
  Brain,
  Layers,
  GitBranch,
  Binary
};

// Circular progress indicator with animated SVG meter
function GlowingCircularProgress({ percentage, color }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-14 h-14 sm:w-18 sm:h-18 flex items-center justify-center shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 70 70">
        {/* Track Background */}
        <circle
          cx="35"
          cy="35"
          r={radius}
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="5"
          fill="transparent"
        />
        {/* Progress Arc */}
        <motion.circle
          cx="35"
          cy="35"
          r={radius}
          stroke={color}
          strokeWidth="5"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          strokeLinecap="round"
          fill="transparent"
          style={{ filter: `drop-shadow(0 0 5px ${color})` }}
        />
      </svg>
      {/* Center percentage text */}
      <span className="absolute font-mono text-[10px] sm:text-xs font-bold text-white">
        {percentage}%
      </span>
    </div>
  );
}

export default function TechnologyUniverse() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skillsData.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <SectionHeader
        badge="Tech Ecosystem & Proficiencies"
        title="The Technology Universe"
        subtitle="Architectural mastery across modern languages, frontend frameworks, enterprise backends, and machine learning pipelines."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-14 w-full">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'text-cyan-300 font-bold'
                  : 'text-slate-400 hover:text-slate-200 glass-pill border border-slate-800'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillCategory"
                  className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Matrix (2-col mobile, 3x3 desktop) */}
      <motion.div
        layout
        className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 w-full"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.icon] || Code2;

            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="group w-full"
              >
                <TiltCard
                  maxTilt={8}
                  className="border border-slate-800/80 hover:border-cyan-500/40 bg-slate-950/70 p-3 sm:p-6 flex flex-col justify-between h-full w-full rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start justify-between gap-1.5 sm:gap-3 mb-2.5 sm:mb-4">
                    {/* Icon container */}
                    <div
                      className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shrink-0"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        borderColor: `${skill.color}40`,
                        boxShadow: `0 0 12px ${skill.color}20`
                      }}
                    >
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: skill.color }} />
                    </div>

                    {/* Circular meter */}
                    <GlowingCircularProgress percentage={skill.percentage} color={skill.color} />
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-base font-bold text-white mb-0.5 sm:mb-1 group-hover:text-cyan-300 transition-colors truncate">
                      {skill.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-normal leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {skill.desc}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
