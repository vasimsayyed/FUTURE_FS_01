import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Floating 3D Geometric shapes that wander peacefully
function FloatingGeometries({ count = 12 }) {
  const meshRef = useRef();

  const items = useMemo(() => {
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.TorusGeometry(0.6, 0.2, 16, 32)
    ];

    return Array.from({ length: count }, (_, i) => ({
      geometry: geometries[i % geometries.length],
      position: [
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12 - 4
      ],
      rotationSpeed: [
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015
      ],
      scale: Math.random() * 0.5 + 0.4,
      color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#3b82f6' : '#8b5cf6'
    }));
  }, [count]);

  return (
    <group ref={meshRef}>
      {items.map((item, idx) => (
        <Float
          key={idx}
          speed={1.5}
          rotationIntensity={1.2}
          floatIntensity={1.8}
          position={item.position}
        >
          <mesh
            geometry={item.geometry}
            scale={item.scale}
          >
            <meshStandardMaterial
              color={item.color}
              wireframe
              transparent
              opacity={0.35}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Particle field with gentle depth
function ParticleField({ count = 80 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color('#22d3ee');
    const blue = new THREE.Color('#60a5fa');
    const purple = new THREE.Color('#c084fc');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14 - 3;

      const chosen = i % 3 === 0 ? cyan : i % 3 === 1 ? blue : purple;
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Parallax Controller that responds subtly to mouse coordinates
function SceneContent({ isMobile }) {
  useFrame(({ mouse, camera }) => {
    if (!isMobile) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.8, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.04);
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#a855f7" />

      <FloatingGeometries count={isMobile ? 6 : 14} />
      <ParticleField count={isMobile ? 40 : 90} />
    </>
  );
}

export default function BackgroundCanvas3D() {
  const { prefersReducedMotion, isMobile } = useReducedMotion();

  // If reduced motion is explicitly preferred, render a lightweight CSS ambient background
  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cyber perspective grid floor */}
      <div className="absolute inset-0 cyber-grid cyber-grid-radial opacity-30 pointer-events-none" />

      {/* Ambient luminous glow spheres */}
      <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        style={{ pointerEvents: 'none', position: 'absolute', inset: 0 }}
      >
        <SceneContent isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
