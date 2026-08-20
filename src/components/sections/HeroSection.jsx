import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Sparkles, Code2, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import MagneticButton from '../ui/MagneticButton';
import HeroHoloSphere from '../3d/HeroHoloSphere';

// Refined Typing Effect with rotating roles
function DynamicTypingRole({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl glass-pill border border-cyan-500/25 bg-slate-950/40 text-cyan-300 text-xs sm:text-sm md:text-base font-medium shadow-[0_4px_20px_rgba(6,182,212,0.12)] max-w-full">
      <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
      <span className="truncate">{roles[roleIndex].substring(0, charIndex)}</span>
      <span className="w-1.5 h-4 bg-cyan-400 animate-pulse inline-block shrink-0 rounded-full" />
    </div>
  );
}

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Clean Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 w-full">
          {/* Refined Status Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-cyan-300 glass-pill border border-cyan-500/30 bg-cyan-950/20 mb-5 sm:mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="tracking-wide">Available for Full-time Roles & Projects</span>
          </motion.div>

          {/* Clean, High-impact Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] text-white uppercase mb-4 sm:mb-5 w-full font-sans"
          >
            <span className="block text-white drop-shadow-sm">VASIM</span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
              SAYYED
            </span>
          </motion.h1>

          {/* Typing Role Rotator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 sm:mb-6 max-w-full"
          >
            <DynamicTypingRole roles={personalInfo.typingRoles} />
          </motion.div>

          {/* Clean Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed mb-6 sm:mb-8"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Sleek Contact Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 sm:mb-10 text-xs sm:text-sm text-slate-300 w-full"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl glass-pill border border-slate-700/60 hover:border-cyan-400/50 hover:text-cyan-300 transition-all shadow-sm group truncate max-w-full"
            >
              <Mail className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs truncate">{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl glass-pill border border-slate-700/60 hover:border-cyan-400/50 hover:text-cyan-300 transition-all shadow-sm group"
            >
              <Phone className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs">{personalInfo.phone}</span>
            </a>
          </motion.div>

          {/* Clean CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto"
          >
            <MagneticButton onClick={() => scrollTo('projects')} variant="primary" className="w-full sm:w-auto text-sm">
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton onClick={() => scrollTo('contact')} variant="secondary" className="w-full sm:w-auto text-sm">
              <span>Initiate Contact</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: 3D Holographic Developer Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center w-full"
        >
          <HeroHoloSphere />
        </motion.div>
      </div>

      {/* Clean Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-auto cursor-pointer"
        onClick={() => scrollTo('about')}
      >
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          Explore
        </span>
        <div className="w-4 h-7 rounded-full border border-cyan-500/40 flex items-start justify-center p-1 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
