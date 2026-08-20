import React from 'react';
import { motion } from 'framer-motion';

export default function BrandLogo({ className = "", size = "default", onClick }) {
  const isSmall = size === "small";

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 group cursor-pointer select-none ${className}`}
    >
      {/* Futuristic Geometric Monogram Icon */}
      <div className="relative flex items-center justify-center">
        {/* Outer subtle glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Core Icon Container */}
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-950 border border-cyan-500/40 p-1.5 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:border-cyan-400 transition-all duration-300">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          >
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>

            {/* Stylized Futuristic V and S glyph */}
            {/* Hexagonal cyber border */}
            <polygon
              points="20,2 36,11 36,29 20,38 4,29 4,11"
              stroke="url(#logoGrad)"
              strokeWidth="1.5"
              strokeDasharray="2 2"
              fill="none"
              opacity="0.4"
            />

            {/* Dynamic 'V' Vector */}
            <path
              d="M10 12 L20 28 L30 12"
              stroke="url(#logoGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inner Cyber S Curve Accent */}
            <path
              d="M15 17 Q20 14 25 17 Q20 23 25 25 Q20 28 15 25"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />

            {/* Center neon power dot */}
            <circle cx="20" cy="21" r="1.5" fill="#22d3ee" />
          </svg>
        </div>
      </div>

      {/* Modern Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-extrabold tracking-wider text-sm sm:text-base text-white font-sans">
            VASIM
          </span>
          <span className="font-light tracking-widest text-sm sm:text-base text-cyan-400 font-sans">
            SAYYED
          </span>
        </div>
        <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase mt-0.5 group-hover:text-cyan-300 transition-colors">
          SOFTWARE ENGINEER
        </span>
      </div>
    </div>
  );
}
