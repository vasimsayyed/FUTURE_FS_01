import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, Eye } from 'lucide-react';
import { Github } from '../ui/SocialIcons';
import SectionHeader from '../ui/SectionHeader';
import ProjectModal from '../ui/ProjectModal';
import TiltCard from '../ui/TiltCard';
import { projectsData } from '../../data/portfolioData';

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-10 sm:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <SectionHeader
        badge="Featured Engineering Works"
        title="Immersive Projects & Systems"
        subtitle="A collection of production web applications, machine learning dashboards, and interactive user experiences."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group w-full"
          >
            <TiltCard
              maxTilt={6}
              className="border border-slate-800 hover:border-cyan-500/50 bg-slate-950/70 p-0 overflow-hidden flex flex-col justify-between h-full w-full"
            >
              {/* Top Banner Image with Cyber HUD Overlay */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Project Number badge */}
                <div className="absolute top-3.5 left-3.5 z-10 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400">
                  PROJECT // {project.number}
                </div>

                {/* Category badge */}
                <div className="absolute top-3.5 right-3.5 z-10 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono bg-slate-950/80 backdrop-blur-md border border-white/10 text-slate-300">
                  {project.category}
                </div>

                {/* Quick Inspect Hover Trigger (visible on hover/tap) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 sm:px-5 py-2.5 rounded-xl glass-panel-glow border border-cyan-400 text-white text-xs font-mono flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.5)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Eye className="w-4 h-4 text-cyan-400" />
                    INSPECT ARCHITECTURE
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-grow justify-between w-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-normal">
                    {project.overview}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-slate-900/80 border border-slate-800 text-cyan-300/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 sm:pt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group/btn cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg glass-pill border border-slate-700 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center gap-1.5 transition-all"
                      aria-label="View Source on GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Expanded Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
