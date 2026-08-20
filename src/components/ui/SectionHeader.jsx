import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-6 sm:mb-10 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl w-full ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-3 glass-pill border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans"
      >
        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
