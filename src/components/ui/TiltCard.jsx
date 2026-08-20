import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 10,
  glowColor = 'rgba(6, 182, 212, 0.15)',
}) {
  const cardRef = useRef(null);
  const { prefersReducedMotion } = useReducedMotion();

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 20 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    x.set(posX / rect.width);
    y.set(posY / rect.height);
    mouseX.set(posX);
    mouseY.set(posY);
  };

  const handleTouchMove = (e) => {
    if (prefersReducedMotion || !cardRef.current || !e.touches[0]) return;
    const rect = cardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const posX = touch.clientX - rect.left;
    const posY = touch.clientY - rect.top;

    x.set(posX / rect.width);
    y.set(posY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className="perspective-1000 w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleMouseLeave}
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className={`relative rounded-2xl glass-panel p-5 sm:p-7 md:p-8 transition-colors duration-300 ${className}`}
      >
        {/* Dynamic cursor following light reflection */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 70%)`,
          }}
        />

        <div className="relative z-10 w-full h-full preserve-3d">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
