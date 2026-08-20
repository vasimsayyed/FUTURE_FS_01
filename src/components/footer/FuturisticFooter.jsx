import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '../ui/SocialIcons';
import BrandLogo from '../ui/BrandLogo';
import { personalInfo } from '../../data/portfolioData';

export default function FuturisticFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-4 sm:mt-8 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl py-6 sm:py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <BrandLogo onClick={scrollToTop} className="mb-1" />
          <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
            Full Stack Software Engineer & AI Application Developer
          </p>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl glass-pill flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl glass-pill flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl glass-panel-glow border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-500 text-center sm:text-left">
        <div>&copy; {new Date().getFullYear()} Vasim Sayyed. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
