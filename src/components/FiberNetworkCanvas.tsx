"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function FiberSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const count = 450;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 2.05 + (i % 5) * 0.11;
      positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.35) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe Optical Core Sphere in Cyan/Blue for Light Background */}
      <mesh>
        <icosahedronGeometry args={[1.88, 2]} />
        <meshBasicMaterial
          color="#0284C7"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Inner Core Sphere */}
      <mesh>
        <sphereGeometry args={[1.32, 24, 24]} />
        <meshBasicMaterial
          color="#0FA4E8"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* Glowing Optical Data Nodes */}
      <Points
        ref={pointsRef}
        positions={particlePositions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#0284C7"
          size={0.075}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
}

export default function FiberNetworkCanvas() {
  return (
    <div className="w-full h-full pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <FiberSphere />
      </Canvas>
    </div>
  );
}
