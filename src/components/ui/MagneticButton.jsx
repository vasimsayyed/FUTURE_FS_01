import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({
  children,
  onClick,
  className = '',
  href,
  target,
  rel,
  variant = 'primary'
}) {
  const buttonRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Max pull displacement
    const distanceX = (clientX - centerX) * 0.35;
    const distanceY = (clientY - centerY) * 0.35;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "relative group overflow-hidden px-7 py-3.5 rounded-xl font-medium text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2",
    secondary: "relative group overflow-hidden px-7 py-3.5 rounded-xl font-medium text-slate-200 glass-pill border border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2",
    outline: "relative group overflow-hidden px-6 py-3 rounded-lg font-medium text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className={`${variants[variant] || variants.primary} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
        {children}
      </span>
      {/* Subtle light sweep reflection */}
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
    </Component>
  );
}
