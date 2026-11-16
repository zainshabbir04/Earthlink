"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function OpticalMetroCoreMesh({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const pulsesRef = useRef<THREE.Points>(null);

  // Create nodes and connecting lines representing the 1,200+ km Metro Core Ring
  const { nodePositions, linePositions, pulseData } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const nodeCount = 46;

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = 2.15 + (i % 3) * 0.18;
      nodes.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        )
      );
    }

    const posArray = new Float32Array(nodes.length * 3);
    nodes.forEach((n, idx) => {
      posArray[idx * 3] = n.x;
      posArray[idx * 3 + 1] = n.y;
      posArray[idx * 3 + 2] = n.z;
    });

    // Connect nearby nodes to form redundant optical rings
    const segments: number[] = [];
    const pairs: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 1.45) {
          segments.push(
            nodes[i].x,
            nodes[i].y,
            nodes[i].z,
            nodes[j].x,
            nodes[j].y,
            nodes[j].z
          );
          pairs.push([nodes[i], nodes[j]]);
        }
      }
    }

    const pulsePositions = new Float32Array(pairs.length * 3);
    return {
      nodePositions: posArray,
      linePositions: new Float32Array(segments),
      pulseData: { pairs, pulsePositions },
    };
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current || reducedMotion) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.14 + pointer.x * 0.25;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.12 + pointer.y * 0.15;

    if (pulsesRef.current) {
      const attr = pulsesRef.current.geometry.attributes
        .position as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;
      pulseData.pairs.forEach(([a, b], idx) => {
        const progress = (t * 0.65 + idx * 0.17) % 1;
        arr[idx * 3] = THREE.MathUtils.lerp(a.x, b.x, progress);
        arr[idx * 3 + 1] = THREE.MathUtils.lerp(a.y, b.y, progress);
        arr[idx * 3 + 2] = THREE.MathUtils.lerp(a.z, b.z, progress);
      });
      attr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Inner Core Sphere */}
      <mesh>
        <sphereGeometry args={[1.65, 32, 32]} />
        <meshBasicMaterial
          color="#081C38"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Outer Ring Orbit */}
      <mesh rotation={[Math.PI / 2.4, 0.3, 0]}>
        <torusGeometry args={[2.55, 0.012, 16, 100]} />
        <meshBasicMaterial color="#0FA4E8" transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[-Math.PI / 3, -0.4, 0.2]}>
        <torusGeometry args={[2.75, 0.008, 16, 100]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.3} />
      </mesh>

      {/* Optical Fiber Links */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#0FA4E8" transparent opacity={0.32} />
      </lineSegments>

      {/* Metro POP Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length / 3}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#38BDF8"
          size={0.08}
          sizeAttenuation
          transparent
          opacity={0.9}
        />
      </points>

      {/* Travelling Optical Light Pulses */}
      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={pulseData.pulsePositions.length / 3}
            array={pulseData.pulsePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#FFFFFF"
          size={0.065}
          sizeAttenuation
          transparent
          opacity={0.95}
        />
      </points>
    </group>
  );
}

export default function FiberNetworkCanvas() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.8} />
        <OpticalMetroCoreMesh reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
