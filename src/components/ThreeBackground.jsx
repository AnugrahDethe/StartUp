import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

/* Subtle camera drift + scroll reaction */
function CameraRig() {
  const { camera } = useThree();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const s = window.scrollY || 0;
    camera.position.x = Math.sin(t * 0.06) * 0.8;
    camera.position.y = -s * 0.003;
    camera.position.z = 12;
    camera.lookAt(0, -s * 0.002, 0);
  });
  return null;
}

/* Starfield — subtle, professional */
function Stars({ count = 420 }) {
  const ref = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    // Mostly near-white with rare indigo/cyan accents
    const palette = [
      [0.85, 0.85, 1.0],    // near-white
      [0.75, 0.75, 0.95],   // light lavender
      [0.39, 0.40, 0.95],   // indigo accent
      [0.02, 0.71, 0.83],   // cyan accent
      [0.90, 0.90, 1.00],   // white-blue
    ];
    const weights = [0.45, 0.30, 0.10, 0.08, 0.07]; // mostly white stars
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
      const r = Math.random();
      let cumulative = 0;
      let chosen = palette[0];
      for (let j = 0; j < weights.length; j++) {
        cumulative += weights[j];
        if (r <= cumulative) { chosen = palette[j]; break; }
      }
      col[i * 3]     = chosen[0];
      col[i * 3 + 1] = chosen[1];
      col[i * 3 + 2] = chosen[2];
    }
    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.006;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.004) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <CameraRig />
        <Stars count={420} />
      </Canvas>
    </div>
  );
}
