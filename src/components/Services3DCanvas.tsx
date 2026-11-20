"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function OpticalServicesGyro() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const count = 320;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 * 5;
      const radius = 1.7 + (i % 7) * 0.22;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.sin(i * 0.7) * 0.9);
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 2.6 + Math.sin(t * 0.4) * 0.15;
      ring1Ref.current.rotation.z += delta * 0.32;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.28;
      ring2Ref.current.rotation.x = -Math.PI / 3.2 + Math.cos(t * 0.35) * 0.18;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.22;
      coreRef.current.rotation.x += delta * 0.12;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.14;
    }
  });

  return (
    <group>
      {/* Inner 3D Wireframe Octahedron Core */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial
          color="#008FFF"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* Tilted Gyroscopic 3D Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.05, 0.028, 16, 80]} />
        <meshBasicMaterial color="#0FA4E8" transparent opacity={0.42} />
      </mesh>

      {/* Tilted Gyroscopic 3D Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.45, 0.02, 16, 80]} />
        <meshBasicMaterial color="#0284C7" transparent opacity={0.28} />
      </mesh>

      {/* Orbiting Optical Signal Particles */}
      <Points
        ref={pointsRef}
        positions={particlePositions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#008FFF"
          size={0.07}
          sizeAttenuation
          depthWrite={false}
          opacity={0.78}
        />
      </Points>
    </group>
  );
}

export default function Services3DCanvas() {
  return (
    <div className="w-full h-full pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <OpticalServicesGyro />
      </Canvas>
    </div>
  );
}
