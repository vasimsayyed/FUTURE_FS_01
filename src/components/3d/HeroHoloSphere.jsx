import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Ring, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Central Holographic Developer Core
function HoloCore({ isMobile }) {
  const coreRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.35;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.5;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.4;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.25;
    }
  });

  return (
    <group>
      {/* Outer Distorted Shimmering Glass Sphere */}
      <Sphere ref={coreRef} args={[1.5, isMobile ? 24 : 40, isMobile ? 24 : 40]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.28}
          speed={1.5}
          roughness={0.1}
          metalness={0.85}
          wireframe
          transparent
          opacity={0.45}
        />
      </Sphere>

      {/* Inner Glowing Core */}
      <Sphere ref={innerRef} args={[0.85, isMobile ? 16 : 24, isMobile ? 16 : 24]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#6366f1"
          emissiveIntensity={1.4}
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>

      {/* Primary Orbital Ring */}
      <group ref={ring1Ref}>
        <Ring args={[2.0, 2.04, 36]}>
          <meshBasicMaterial color="#38bdf8" side={THREE.DoubleSide} transparent opacity={0.65} />
        </Ring>
      </group>

      {/* Secondary Tilted Orbital Ring */}
      <group ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <Ring args={[2.3, 2.33, 36]}>
          <meshBasicMaterial color="#a855f7" side={THREE.DoubleSide} transparent opacity={0.55} />
        </Ring>
      </group>

      {/* Tertiary Orbital Ring */}
      <group ref={ring3Ref} rotation={[-Math.PI / 4, 0, Math.PI / 3]}>
        <Ring args={[2.6, 2.62, 36]}>
          <meshBasicMaterial color="#06b6d4" side={THREE.DoubleSide} transparent opacity={0.35} />
        </Ring>
      </group>

      {/* Orbiting Satellite Beacons */}
      <OrbitingNode radius={2.2} speed={0.7} color="#22d3ee" isMobile={isMobile} />
      <OrbitingNode radius={2.5} speed={-0.5} color="#818cf8" isMobile={isMobile} />
      <OrbitingNode radius={2.8} speed={0.4} color="#c084fc" isMobile={isMobile} />
    </group>
  );
}

// Satellite Tech Beacon
function OrbitingNode({ radius, speed, color, isMobile }) {
  const nodeRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    if (nodeRef.current) {
      nodeRef.current.position.x = Math.cos(t) * radius;
      nodeRef.current.position.z = Math.sin(t) * radius;
      nodeRef.current.position.y = Math.sin(t * 1.5) * 0.4;
    }
  });

  return (
    <group ref={nodeRef}>
      <Sphere args={[0.14, isMobile ? 10 : 16, isMobile ? 10 : 16]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.8}
          roughness={0.1}
        />
      </Sphere>
      <Ring args={[0.2, 0.23, 16]}>
        <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.5} />
      </Ring>
    </group>
  );
}

// Main 3D Canvas wrapper
function HeroScene({ isMobile }) {
  const groupRef = useRef();

  useFrame(({ mouse }) => {
    if (groupRef.current && !isMobile) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.35, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.35, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#38bdf8" />
      <pointLight position={[-5, -5, -5]} intensity={1.5} color="#a855f7" />

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <group ref={groupRef}>
          <HoloCore isMobile={isMobile} />
        </group>
      </Float>
    </>
  );
}

export default function HeroHoloSphere() {
  const { prefersReducedMotion, isMobile } = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="relative w-full h-[320px] md:h-[450px] flex items-center justify-center">
        <div className="w-56 h-56 rounded-full border-2 border-cyan-500/40 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[500px] flex items-center justify-center max-w-full overflow-hidden">
      {/* Outer ambient glow halo */}
      <div className="absolute inset-0 m-auto w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-full blur-3xl pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={isMobile ? 1 : 1.25}
      >
        <HeroScene isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
