import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Terminal } from 'lucide-react';
import { Github, Linkedin } from '../ui/SocialIcons';
import BrandLogo from '../ui/BrandLogo';
import { personalInfo } from '../../data/portfolioData';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export default function FuturisticNavbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 md:py-6 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`pointer-events-auto transition-all duration-300 rounded-2xl flex items-center justify-between px-5 py-3 w-full max-w-6xl ${
          scrolled
            ? 'glass-panel-glow bg-slate-950/85 backdrop-blur-xl border border-cyan-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)] py-2.5'
            : 'glass-panel bg-slate-950/50 backdrop-blur-lg border border-white/10'
        }`}
      >
        {/* Customized Futuristic Brand Logo */}
        <BrandLogo onClick={(e) => scrollToSection(e, 'hero')} />

        {/* Desktop Nav Items */}
        <ul className="hidden lg:flex items-center gap-1 bg-slate-900/50 border border-white/5 rounded-full px-2 py-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative z-10 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-200 block ${
                    isActive ? 'text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </a>

                {/* Sliding active pill indicator with layoutId */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right side actions (Socials + Availability) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Availability Status */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-slate-300 glass-pill border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-[11px]">Open for roles</span>
          </div>

          <div className="flex items-center gap-2 pl-2">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass-pill flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass-pill flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-slate-300 hover:text-white border border-slate-700"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-2xl glass-panel-glow border border-cyan-500/30 p-6 flex flex-col gap-4 shadow-2xl z-50 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available for hire
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-cyan-400"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-cyan-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
