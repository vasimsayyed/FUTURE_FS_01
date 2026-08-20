import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, BookOpen } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import TiltCard from '../ui/TiltCard';
import { certificatesData } from '../../data/portfolioData';

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-10 sm:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
      <SectionHeader
        badge="Credentials & Certifications"
        title="Verified Engineering Mastery"
        subtitle="Formal academic and industry-level credentials validating core algorithms, system design, and enterprise full-stack development."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group w-full"
          >
            <TiltCard
              maxTilt={6}
              className="border border-slate-800 hover:border-cyan-500/40 bg-slate-950/70 p-5 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden w-full"
            >
              {/* Holographic background gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${cert.gradient} rounded-full blur-3xl pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-cyan-400 glass-pill px-3 py-1 rounded-full border border-cyan-500/30">
                    <Award className="w-3.5 h-3.5" />
                    <span>{cert.badge}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-slate-500">VERIFIED CREDENTIAL</span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-cyan-400/90 mb-4 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {cert.description}
                </p>

                {/* Key highlights */}
                <div className="space-y-2 mb-6">
                  {cert.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  Authenticated
                </span>
                <span>Track: {cert.topic}</span>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
