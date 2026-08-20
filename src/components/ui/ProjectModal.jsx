import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import { Github } from './SocialIcons';
import MagneticButton from './MagneticButton';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-all"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-glow border border-cyan-500/30 p-6 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.8)] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass-pill border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-200 z-20"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Category */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider glass-pill border border-cyan-500/40 text-cyan-400">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500">
                PROJECT #{project.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm md:text-base mb-6">
              {project.subtitle}
            </p>

            {/* Project Image Banner */}
            <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden mb-8 border border-slate-800 shadow-2xl group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>

            {/* Grid details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Problem Solved */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    Overview
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    Engineering Purpose & Solution
                  </h4>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Key Features */}
                {project.keyFeatures && (
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      Key Features & Architecture
                    </h4>
                    <ul className="space-y-2.5">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar Tech Stack & Actions */}
              <div className="space-y-6 md:border-l md:border-slate-800 md:pl-6">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 border border-slate-700 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                  {project.liveDemo && (
                    <MagneticButton
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Project Repository
                    </MagneticButton>
                  )}
                  {project.github && (
                    <MagneticButton
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="w-full text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </MagneticButton>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
