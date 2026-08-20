import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { experienceData } from '../../data/portfolioData';
import TiltCard from '../ui/TiltCard';

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" ref={containerRef} className="relative py-10 sm:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <SectionHeader
        badge="Career Trajectory & Engineering Roles"
        title="Professional Experience"
        subtitle="Hands-on development experience building production-grade web systems, machine learning tools, and scalable applications."
      />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Glowing Central Cyber Timeline Line */}
        <div className="absolute left-3.5 sm:left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-slate-800">
          <motion.div
            style={{ height: pathHeight }}
            className="w-full bg-gradient-to-b from-cyan-400 via-sky-400 to-violet-500 shadow-[0_0_15px_#22d3ee]"
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 w-full">
          {experienceData.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] flex items-center justify-center z-20 shrink-0">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-cyan-300 animate-ping" />
                </div>

                {/* Content Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`pl-9 sm:pl-12 md:pl-0 w-full md:w-[calc(50%-32px)] ${
                    isEven ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <TiltCard
                    maxTilt={6}
                    className="border border-slate-800 hover:border-cyan-500/40 bg-slate-950/70 p-4 sm:p-6 w-full"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-xl font-bold text-white mb-0.5 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 shrink-0" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm mb-3.5 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 mb-4">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
