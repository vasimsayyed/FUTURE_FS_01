import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Floating 3D Geometric shapes that wander peacefully
function FloatingGeometries({ count = 8 }) {
  const meshRef = useRef();

  const items = useMemo(() => {
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.TorusGeometry(0.6, 0.2, 12, 24)
    ];

    return Array.from({ length: count }, (_, i) => ({
      geometry: geometries[i % geometries.length],
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10 - 4
      ],
      scale: Math.random() * 0.4 + 0.35,
      color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#3b82f6' : '#8b5cf6'
    }));
  }, [count]);

  return (
    <group ref={meshRef}>
      {items.map((item, idx) => (
        <Float
          key={idx}
          speed={1.2}
          rotationIntensity={1}
          floatIntensity={1.5}
          position={item.position}
        >
          <mesh
            geometry={item.geometry}
            scale={item.scale}
          >
            <meshBasicMaterial
              color={item.color}
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Lightweight particle field
function ParticleField({ count = 50 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color('#22d3ee');
    const blue = new THREE.Color('#60a5fa');
    const purple = new THREE.Color('#c084fc');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 3;

      const chosen = i % 3 === 0 ? cyan : i % 3 === 1 ? blue : purple;
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
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
        size={0.05}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Parallax Controller
function SceneContent({ isMobile }) {
  useFrame(({ mouse, camera }) => {
    if (!isMobile) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.6, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.6, 0.04);
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#38bdf8" />

      <FloatingGeometries count={isMobile ? 4 : 10} />
      <ParticleField count={isMobile ? 25 : 60} />
    </>
  );
}

export default function BackgroundCanvas3D() {
  const { prefersReducedMotion, isMobile } = useReducedMotion();

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
      <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* High performance Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={isMobile ? 1 : 1.25}
        style={{ pointerEvents: 'none', position: 'absolute', inset: 0 }}
      >
        <SceneContent isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
