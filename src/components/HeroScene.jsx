import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

/* ── Central distorted orb ──────────────────────────────────────── */
function MainOrb() {
  return (
    <Float speed={1.6} rotationIntensity={0.45} floatIntensity={0.7}>
      <mesh>
        <icosahedronGeometry args={[2, 5]} />
        <MeshDistortMaterial
          color="#4f46e5"
          distort={0.4}
          speed={2.2}
          roughness={0.05}
          metalness={0.9}
          emissive="#312e81"
          emissiveIntensity={0.8}
        />
      </mesh>
    </Float>
  );
}

/* ── Orbital ring ───────────────────────────────────────────────── */
function Ring({ radius, color, speed, rotX, rotZ = 0 }) {
  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z += speed;
  });
  return (
    <group rotation={[rotX, 0, rotZ]}>
      <mesh ref={meshRef}>
        <torusGeometry args={[radius, 0.018, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.38} />
      </mesh>
    </group>
  );
}

/* ── Small glowing satellite dot ────────────────────────────────── */
function GlowDot({ position, color, size }) {
  const ref   = useRef();
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.75 + phase) * 0.45;
    ref.current.position.x = position[0] + Math.cos(t * 0.5  + phase) * 0.28;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={4} roughness={0} />
    </mesh>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[ 5,  5,  5]} intensity={3}   color="#6366f1" />
      <pointLight position={[-5, -3,  4]} intensity={2}   color="#06b6d4" />
      <pointLight position={[ 0, -5,  2]} intensity={1.5} color="#8b5cf6" />

      <MainOrb />

      <Ring radius={3.3} color="#6366f1" speed={0.004}  rotX={Math.PI / 4} />
      <Ring radius={4.2} color="#06b6d4" speed={-0.003} rotX={Math.PI / 3} rotZ={Math.PI / 5} />
      <Ring radius={5.1} color="#8b5cf6" speed={0.002}  rotX={Math.PI / 6} rotZ={Math.PI / 3} />

      <GlowDot position={[ 3.3,  0.5, 1.5]} color="#06b6d4" size={0.09} />
      <GlowDot position={[-3.0,  1.8, 1.0]} color="#6366f1" size={0.07} />
      <GlowDot position={[ 1.5, -3.2, 0.5]} color="#8b5cf6" size={0.11} />
      <GlowDot position={[-2.5, -2.0, 1.5]} color="#06b6d4" size={0.08} />
      <GlowDot position={[ 0.5,  4.0, 1.0]} color="#6366f1" size={0.06} />
    </Canvas>
  );
}
