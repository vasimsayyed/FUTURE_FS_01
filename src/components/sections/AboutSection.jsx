import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Cpu, Terminal, Database, Rocket, ShieldCheck } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import { personalInfo, statsData } from '../../data/portfolioData';

// Counter component for stats
function Counter({ value, isInView }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const nonNumeric = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / (numericValue || 1)));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= numericValue) {
        clearInterval(timer);
        setCount(numericValue);
      }
    }, Math.max(stepTime, 25));

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span>
      {count}
      {nonNumeric}
    </span>
  );
}

export default function AboutSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const coreFocus = [
    {
      icon: Code,
      title: "Frontend Engineering",
      desc: "Creating pixel-perfect, reactive, and fluid 3D web interfaces using React, Vite, Tailwind, and Framer Motion."
    },
    {
      icon: Database,
      title: "Backend & Systems",
      desc: "Building reliable REST APIs, robust database architectures, and systems with Java, OOP, and Node.js."
    },
    {
      icon: Cpu,
      title: "AI & Data Science",
      desc: "Integrating machine learning regression models, automated speech/text analysis, and intelligent real-time platforms."
    },
    {
      icon: Rocket,
      title: "Performance & DX",
      desc: "Optimizing bundle sizes, lazy-loading heavy 3D scenes, clean code standards, and seamless Git workflows."
    }
  ];

  return (
    <section id="about" ref={ref} className="relative py-10 sm:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <SectionHeader
        badge="System Architecture & Profile"
        title="Engineering Intelligent Digital Systems"
        subtitle="Bridging high-performance frontend interactivity with robust enterprise backends and machine learning intelligence."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch mb-8 sm:mb-10 w-full">
        {/* Main 3D Layered Glass Profile Card */}
        <div className="lg:col-span-7 w-full">
          <TiltCard
            className="h-full border border-cyan-500/20 bg-slate-950/60 backdrop-blur-2xl p-5 sm:p-7 flex flex-col justify-between w-full"
            maxTilt={5}
          >
            <div>
              {/* Header / Mac dots */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-cyan-400/80">
                  DEVELOPER_MANIFESTO.log
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">
                Hello, I'm <span className="text-cyan-400">Vasim Sayyed</span>
              </h3>
              <div className="text-xs sm:text-sm font-mono text-slate-400 mb-4">
                Full Stack Software Engineer & AI Developer
              </div>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-5 font-normal">
                I am a dedicated Software Engineer specialized in building full-stack web architectures and AI-driven platforms. With a solid foundation in Data Structures and Algorithms in C/C++ alongside enterprise Java and modern React ecosystems, I craft solutions that balance aesthetic elegance with computational efficiency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 font-mono text-xs text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Problem Solver (DSA Mastery)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Clean Code & Modular Architecture</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <span>Location: {personalInfo.location}</span>
              <span className="text-cyan-400">Status: {personalInfo.status}</span>
            </div>
          </TiltCard>
        </div>

        {/* 4 Pillars Grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-3.5 w-full">
          {coreFocus.map((focus, i) => {
            const Icon = focus.icon;
            return (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-3.5 sm:p-4 rounded-2xl glass-panel border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300 group w-full"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mb-0.5">
                      {focus.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                      {focus.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Orbital Statistics Dashboard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
        {statsData.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative p-3.5 sm:p-5 rounded-2xl glass-panel-glow border border-cyan-500/20 flex flex-col items-center text-center overflow-hidden group hover:border-cyan-500/50 transition-all w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 mb-1 font-mono drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Counter value={stat.value} isInView={isInView} />
              {stat.suffix && <span className="text-xs ml-1 font-sans text-slate-400">{stat.suffix}</span>}
            </div>

            <div className="text-xs sm:text-sm font-semibold text-white tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
