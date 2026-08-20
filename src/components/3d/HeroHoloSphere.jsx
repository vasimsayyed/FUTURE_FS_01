import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Ring, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Central Holographic Developer Core
function HoloCore() {
  const coreRef = useRef();
  const innerRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.6;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.5;
      ring1Ref.current.rotation.x += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.4;
      ring2Ref.current.rotation.z -= delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.3;
      ring3Ref.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      {/* Outer Distorted Shimmering Glass Sphere */}
      <Sphere ref={coreRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          wireframe
          transparent
          opacity={0.5}
        />
      </Sphere>

      {/* Inner Glowing Core */}
      <Sphere ref={innerRef} args={[0.9, 32, 32]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#6366f1"
          emissiveIntensity={1.5}
          wireframe={false}
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>

      {/* Primary Orbital Ring */}
      <group ref={ring1Ref}>
        <Ring args={[2.0, 2.05, 64]}>
          <meshBasicMaterial color="#38bdf8" side={THREE.DoubleSide} transparent opacity={0.7} />
        </Ring>
      </group>

      {/* Secondary Tilted Orbital Ring */}
      <group ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <Ring args={[2.3, 2.34, 64]}>
          <meshBasicMaterial color="#a855f7" side={THREE.DoubleSide} transparent opacity={0.6} />
        </Ring>
      </group>

      {/* Tertiary Orbital Ring */}
      <group ref={ring3Ref} rotation={[-Math.PI / 4, 0, Math.PI / 3]}>
        <Ring args={[2.6, 2.63, 64]}>
          <meshBasicMaterial color="#06b6d4" side={THREE.DoubleSide} transparent opacity={0.4} />
        </Ring>
      </group>

      {/* Orbiting Satellite Beacons (Abstract Tech Nodes) */}
      <OrbitingNode radius={2.2} speed={0.8} color="#22d3ee" label="Frontend" />
      <OrbitingNode radius={2.5} speed={-0.6} color="#818cf8" label="Backend" />
      <OrbitingNode radius={2.8} speed={0.5} color="#c084fc" label="AI/ML" />
    </group>
  );
}

// Satellite Tech Beacon
function OrbitingNode({ radius, speed, color }) {
  const nodeRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    if (nodeRef.current) {
      nodeRef.current.position.x = Math.cos(t) * radius;
      nodeRef.current.position.z = Math.sin(t) * radius;
      nodeRef.current.position.y = Math.sin(t * 2) * 0.5;
    }
  });

  return (
    <group ref={nodeRef}>
      <Sphere args={[0.16, 16, 16]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
      <Ring args={[0.22, 0.25, 16]}>
        <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.6} />
      </Ring>
    </group>
  );
}

// Main 3D Canvas wrapper with subtle mouse tracking
function HeroScene({ isMobile }) {
  const groupRef = useRef();

  useFrame(({ mouse }) => {
    if (groupRef.current && !isMobile) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.4, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.4, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={2.5} color="#38bdf8" />
      <pointLight position={[-5, -5, -5]} intensity={2} color="#a855f7" />
      <pointLight position={[0, 0, 4]} intensity={1.5} color="#ffffff" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group ref={groupRef}>
          <HoloCore />
        </group>
      </Float>
    </>
  );
}

export default function HeroHoloSphere() {
  const { prefersReducedMotion, isMobile } = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="relative w-full h-[380px] md:h-[480px] flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border-2 border-cyan-500/40 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 shadow-[0_0_60px_rgba(6,182,212,0.3)] animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] md:h-[500px] lg:h-[560px] flex items-center justify-center">
      {/* Outer ambient glow halo */}
      <div className="absolute inset-0 m-auto w-72 h-72 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-full blur-3xl pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={isMobile ? [1, 1] : [1, 2]}
      >
        <HeroScene isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
