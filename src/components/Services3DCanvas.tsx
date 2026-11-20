"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WifiArcProps {
  radius: number;
  tubeRadius: number;
  arcAngle: number;
  baseRotationZ: number;
  waveIndex: number;
  color: string;
  maxOpacity: number;
  zOffset?: number;
}

function WifiSignalArc({
  radius,
  tubeRadius,
  arcAngle,
  baseRotationZ,
  waveIndex,
  color,
  maxOpacity,
  zOffset = 0,
}: WifiArcProps) {
  const groupRef = useRef<THREE.Group>(null);
  const arcMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const cap1MatRef = useRef<THREE.MeshStandardMaterial>(null);
  const cap2MatRef = useRef<THREE.MeshStandardMaterial>(null);

  const endX = Math.cos(arcAngle) * radius;
  const endY = Math.sin(arcAngle) * radius;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Sequential inner-to-outer WiFi signal broadcast wave
    const rawWave = Math.sin(t * 2.8 - waveIndex * 0.72) * 0.5 + 0.5;
    const pulse = Math.pow(rawWave, 1.6);

    const opacity = 0.14 + pulse * (maxOpacity - 0.14);
    const emissiveIntensity = 0.15 + pulse * 0.65;

    if (arcMatRef.current) {
      arcMatRef.current.opacity = opacity;
      arcMatRef.current.emissiveIntensity = emissiveIntensity;
    }
    if (cap1MatRef.current) {
      cap1MatRef.current.opacity = opacity;
      cap1MatRef.current.emissiveIntensity = emissiveIntensity;
    }
    if (cap2MatRef.current) {
      cap2MatRef.current.opacity = opacity;
      cap2MatRef.current.emissiveIntensity = emissiveIntensity;
    }
    if (groupRef.current) {
      const s = 1 + pulse * 0.032;
      groupRef.current.scale.set(s, s, 1 + pulse * 0.12);
    }
  });

  return (
    <group
      ref={groupRef}
      rotation={[0, 0, baseRotationZ]}
      position={[0, 0, zOffset]}
    >
      {/* Main 3D Glossy WiFi Arc */}
      <mesh>
        <torusGeometry args={[radius, tubeRadius, 18, 48, arcAngle]} />
        <meshStandardMaterial
          ref={arcMatRef}
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.22}
          metalness={0.18}
          transparent
          opacity={maxOpacity}
          depthWrite={false}
        />
      </mesh>

      {/* Rounded 3D Start Cap */}
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[tubeRadius, 14, 14]} />
        <meshStandardMaterial
          ref={cap1MatRef}
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.22}
          metalness={0.18}
          transparent
          opacity={maxOpacity}
          depthWrite={false}
        />
      </mesh>

      {/* Rounded 3D End Cap */}
      <mesh position={[endX, endY, 0]}>
        <sphereGeometry args={[tubeRadius, 14, 14]} />
        <meshStandardMaterial
          ref={cap2MatRef}
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.22}
          metalness={0.18}
          transparent
          opacity={maxOpacity}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function WifiSignal3DScene() {
  const rootRef = useRef<THREE.Group>(null);
  const rippleRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Smooth 3D perspective float + gentle cursor parallax
    if (rootRef.current) {
      const targetX = -0.18 + Math.sin(t * 0.45) * 0.1 + state.pointer.y * 0.14;
      const targetY = Math.cos(t * 0.35) * 0.16 + state.pointer.x * 0.2;
      rootRef.current.rotation.x = THREE.MathUtils.lerp(
        rootRef.current.rotation.x,
        targetX,
        0.045
      );
      rootRef.current.rotation.y = THREE.MathUtils.lerp(
        rootRef.current.rotation.y,
        targetY,
        0.045
      );
    }

    // Subtle expanding 3D broadcast rings from the center hub
    rippleRefs.current.forEach((ring, idx) => {
      if (!ring) return;
      const cycle = (t * 0.32 + idx * 0.5) % 1;
      const scale = 0.65 + cycle * 2.15;
      ring.scale.set(scale, scale, 1);
      const mat = ring.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.sin(cycle * Math.PI) * 0.22;
    });
  });

  // 5 progressive 3D WiFi waves radiating Left & Right
  const sideWaves = [
    { radius: 1.25, tube: 0.052, color: "#008FFF", opacity: 0.85, z: 0.2 },
    { radius: 1.75, tube: 0.048, color: "#0FA4E8", opacity: 0.78, z: 0.1 },
    { radius: 2.25, tube: 0.044, color: "#06B6D4", opacity: 0.68, z: 0.0 },
    { radius: 2.75, tube: 0.04, color: "#38BDF8", opacity: 0.56, z: -0.1 },
    { radius: 3.25, tube: 0.036, color: "#0284C7", opacity: 0.44, z: -0.2 },
  ];

  // 3 softer 3D WiFi waves radiating Top & Bottom
  const verticalWaves = [
    { radius: 1.25, tube: 0.042, color: "#0FA4E8", opacity: 0.62, z: -0.15 },
    { radius: 1.72, tube: 0.038, color: "#06B6D4", opacity: 0.5, z: -0.25 },
    { radius: 2.18, tube: 0.034, color: "#38BDF8", opacity: 0.38, z: -0.35 },
  ];

  const sideArcAngle = Math.PI * 0.44;
  const verticalArcAngle = Math.PI * 0.36;

  return (
    <group ref={rootRef}>
      {/* Right-Side 3D WiFi Signal Waves */}
      {sideWaves.map((w, idx) => (
        <WifiSignalArc
          key={`wifi-right-${idx}`}
          radius={w.radius}
          tubeRadius={w.tube}
          arcAngle={sideArcAngle}
          baseRotationZ={-sideArcAngle / 2}
          waveIndex={idx}
          color={w.color}
          maxOpacity={w.opacity}
          zOffset={w.z}
        />
      ))}

      {/* Left-Side 3D WiFi Signal Waves */}
      {sideWaves.map((w, idx) => (
        <WifiSignalArc
          key={`wifi-left-${idx}`}
          radius={w.radius}
          tubeRadius={w.tube}
          arcAngle={sideArcAngle}
          baseRotationZ={Math.PI - sideArcAngle / 2}
          waveIndex={idx}
          color={w.color}
          maxOpacity={w.opacity}
          zOffset={w.z}
        />
      ))}

      {/* Top 3D WiFi Signal Waves */}
      {verticalWaves.map((w, idx) => (
        <WifiSignalArc
          key={`wifi-top-${idx}`}
          radius={w.radius}
          tubeRadius={w.tube}
          arcAngle={verticalArcAngle}
          baseRotationZ={Math.PI / 2 - verticalArcAngle / 2}
          waveIndex={idx + 0.5}
          color={w.color}
          maxOpacity={w.opacity}
          zOffset={w.z}
        />
      ))}

      {/* Bottom 3D WiFi Signal Waves */}
      {verticalWaves.map((w, idx) => (
        <WifiSignalArc
          key={`wifi-bottom-${idx}`}
          radius={w.radius}
          tubeRadius={w.tube}
          arcAngle={verticalArcAngle}
          baseRotationZ={-Math.PI / 2 - verticalArcAngle / 2}
          waveIndex={idx + 0.5}
          color={w.color}
          maxOpacity={w.opacity}
          zOffset={w.z}
        />
      ))}

      {/* Soft Expanding 3D Signal Ripples */}
      {[0, 1].map((idx) => (
        <mesh
          key={`ripple-${idx}`}
          ref={(el) => {
            rippleRefs.current[idx] = el;
          }}
          position={[0, 0, -0.3]}
        >
          <torusGeometry args={[1.05, 0.014, 12, 64]} />
          <meshBasicMaterial
            color="#008FFF"
            transparent
            opacity={0.2}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Services3DCanvas() {
  return (
    <div className="w-full h-full pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 44 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 6, 8]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-4, -4, 4]} intensity={0.6} color="#38BDF8" />
        <WifiSignal3DScene />
      </Canvas>
    </div>
  );
}
