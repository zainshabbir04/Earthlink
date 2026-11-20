"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface HelixStrand {
  curve: THREE.CatmullRomCurve3;
  geometry: THREE.TubeGeometry;
  color: string;
  opacity: number;
  speed: number;
  direction: 1 | -1;
}

const SPECTRUM_BAR_COUNT = 44;

function UniqueOpticalSignalStage() {
  const stageRef = useRef<THREE.Group>(null);
  const spectrumGroupRef = useRef<THREE.Group>(null);
  const barRefs = useRef<(THREE.Mesh | null)[]>([]);
  const streakRefs = useRef<(THREE.Mesh | null)[]>([]);
  const arcGroup1Ref = useRef<THREE.Group>(null);
  const arcGroup2Ref = useRef<THREE.Group>(null);
  const pulseRingRefs = useRef<(THREE.Mesh | null)[]>([]);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  // 1. Braided 3D Optical Fiber Helix (4 intertwined multi-core photonic strands)
  const helixStrands = useMemo<HelixStrand[]>(() => {
    const configs: Array<{
      phase: number;
      ampY: number;
      ampZ: number;
      freq: number;
      radius: number;
      color: string;
      opacity: number;
      speed: number;
      direction: 1 | -1;
    }> = [
      {
        phase: 0,
        ampY: 1.05,
        ampZ: 0.95,
        freq: 0.72,
        radius: 0.024,
        color: "#008FFF",
        opacity: 0.52,
        speed: 0.24,
        direction: 1,
      },
      {
        phase: Math.PI,
        ampY: 1.05,
        ampZ: 0.95,
        freq: 0.72,
        radius: 0.022,
        color: "#06B6D4",
        opacity: 0.48,
        speed: 0.28,
        direction: -1,
      },
      {
        phase: Math.PI * 0.5,
        ampY: 1.55,
        ampZ: 1.15,
        freq: 0.52,
        radius: 0.017,
        color: "#0284C7",
        opacity: 0.36,
        speed: 0.21,
        direction: 1,
      },
      {
        phase: Math.PI * 1.5,
        ampY: 1.55,
        ampZ: 1.15,
        freq: 0.52,
        radius: 0.016,
        color: "#38BDF8",
        opacity: 0.38,
        speed: 0.31,
        direction: -1,
      },
    ];

    return configs.map((cfg) => {
      const points: THREE.Vector3[] = [];
      const steps = 48;
      for (let i = 0; i <= steps; i++) {
        const frac = i / steps;
        const x = -6.0 + frac * 12.0;
        // Pinch gently near the central Services Hub, flare outward smoothly
        const flare = 0.58 + 0.52 * Math.abs(Math.sin((frac - 0.5) * Math.PI));
        const angle = x * cfg.freq + cfg.phase;
        const y = Math.sin(angle) * cfg.ampY * flare;
        const z = Math.cos(angle) * cfg.ampZ * flare - 0.25;
        points.push(new THREE.Vector3(x, y, z));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 96, cfg.radius, 8, false);
      return {
        curve,
        geometry,
        color: cfg.color,
        opacity: cfg.opacity,
        speed: cfg.speed,
        direction: cfg.direction,
      };
    });
  }, []);

  // 2. Elongated Laser Light-Streaks (3 per helix strand = 12 high-speed optical streaks)
  const streaks = useMemo(() => {
    const items: Array<{ strandIdx: number; offset: number; color: string }> = [];
    helixStrands.forEach((_, sIdx) => {
      for (let k = 0; k < 3; k++) {
        items.push({
          strandIdx: sIdx,
          offset: (k / 3 + sIdx * 0.17) % 1,
          color: k % 2 === 0 ? "#008FFF" : "#06B6D4",
        });
      }
    });
    return items;
  }, [helixStrands]);

  // 3. 3D Holographic Signal Spectrum Ring Coordinates (44 radial telemetry bars)
  const spectrumBars = useMemo(() => {
    return Array.from({ length: SPECTRUM_BAR_COUNT }, (_, i) => {
      const angle = (i / SPECTRUM_BAR_COUNT) * Math.PI * 2;
      const radius = 1.62;
      return {
        angle,
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius,
        color: i % 3 === 0 ? "#008FFF" : i % 3 === 1 ? "#06B6D4" : "#0284C7",
      };
    });
  }, []);

  // 4. Floating 3D Signal Relay Crystals along the fiber field
  const relayNodes = useMemo(
    () => [
      { pos: [-4.2, 1.35, -0.4] as [number, number, number], scale: 0.14, phase: 0.0 },
      { pos: [-3.5, -1.3, 0.35] as [number, number, number], scale: 0.12, phase: 1.2 },
      { pos: [4.2, 1.3, 0.3] as [number, number, number], scale: 0.14, phase: 2.4 },
      { pos: [3.6, -1.35, -0.35] as [number, number, number], scale: 0.12, phase: 3.6 },
      { pos: [-2.2, 1.6, 0.5] as [number, number, number], scale: 0.1, phase: 4.8 },
      { pos: [2.2, -1.6, 0.5] as [number, number, number], scale: 0.1, phase: 5.5 },
    ],
    []
  );

  // Reusable math objects (zero GC overhead in useFrame)
  const tempPos = useMemo(() => new THREE.Vector3(), []);
  const tempTan = useMemo(() => new THREE.Vector3(), []);
  const upAxis = useMemo(() => new THREE.Vector3(0, 1, 0), []);
  const tempQuat = useMemo(() => new THREE.Quaternion(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Smooth interactive 3D tilt following cursor + organic breathing
    if (stageRef.current) {
      const targetX = Math.sin(t * 0.3) * 0.06 + state.pointer.y * 0.12;
      const targetY = Math.cos(t * 0.25) * 0.08 + state.pointer.x * 0.16;
      stageRef.current.rotation.x = THREE.MathUtils.lerp(
        stageRef.current.rotation.x,
        targetX,
        0.04
      );
      stageRef.current.rotation.y = THREE.MathUtils.lerp(
        stageRef.current.rotation.y,
        targetY,
        0.04
      );
    }

    // Animate 3D Signal Spectrum Ring (traveling RF/Optical waveform spikes)
    if (spectrumGroupRef.current) {
      spectrumGroupRef.current.rotation.y += delta * 0.22;
      spectrumGroupRef.current.rotation.x = Math.PI / 3.1 + Math.sin(t * 0.45) * 0.08;
      spectrumGroupRef.current.rotation.z = Math.cos(t * 0.35) * 0.09;
    }

    barRefs.current.forEach((bar, i) => {
      if (!bar) return;
      const wave1 = Math.sin(i * 0.45 - t * 3.8);
      const wave2 = Math.cos(i * 0.25 + t * 2.3);
      const heightScale = 0.35 + Math.pow((wave1 * 0.5 + wave2 * 0.5 + 1) * 0.5, 1.8) * 1.9;
      bar.scale.y = heightScale;
    });

    // Animate tangential laser light-streaks racing through the braided 3D fibers
    streaks.forEach((streak, i) => {
      const mesh = streakRefs.current[i];
      if (!mesh) return;
      const strand = helixStrands[streak.strandIdx];
      let u = (streak.offset + t * strand.speed * strand.direction) % 1;
      if (u < 0) u += 1;

      strand.curve.getPointAt(u, tempPos);
      strand.curve.getTangentAt(u, tempTan).normalize();
      if (strand.direction === -1) tempTan.negate();

      mesh.position.copy(tempPos);
      tempQuat.setFromUnitVectors(upAxis, tempTan);
      mesh.quaternion.copy(tempQuat);

      const edgeFade = Math.sin(u * Math.PI);
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = edgeFade * 0.92;
      mesh.scale.set(0.85 + edgeFade * 0.3, 0.7 + edgeFade * 0.9, 0.85 + edgeFade * 0.3);
    });

    // Counter-rotating segmented 3D optical telemetry HUD arcs
    if (arcGroup1Ref.current) {
      arcGroup1Ref.current.rotation.z += delta * 0.32;
      arcGroup1Ref.current.rotation.x = Math.PI / 3.6 + Math.sin(t * 0.4) * 0.1;
    }
    if (arcGroup2Ref.current) {
      arcGroup2Ref.current.rotation.z -= delta * 0.26;
      arcGroup2Ref.current.rotation.y = Math.cos(t * 0.35) * 0.28;
      arcGroup2Ref.current.rotation.x = -Math.PI / 3.2;
    }

    // Expanding 3D sonar signal rings pulsing from center hub
    pulseRingRefs.current.forEach((ring, idx) => {
      if (!ring) return;
      const cycle = (t * 0.32 + idx * 0.333) % 1;
      const s = 0.45 + cycle * 2.1;
      ring.scale.set(s, s, 1);
      ring.rotation.x = Math.PI / 3.1;
      const mat = ring.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.sin(cycle * Math.PI) * 0.36;
    });

    // Gently spinning 3D signal relay crystals
    nodeRefs.current.forEach((node, idx) => {
      if (!node) return;
      const cfg = relayNodes[idx];
      node.rotation.y += delta * 0.9;
      node.rotation.x += delta * 0.55;
      node.position.y = cfg.pos[1] + Math.sin(t * 1.4 + cfg.phase) * 0.14;
    });
  });

  return (
    <group ref={stageRef}>
      {/* 1. Braided 3D Multi-Core Optical Fiber Helix */}
      {helixStrands.map((strand, idx) => (
        <mesh key={`helix-${idx}`} geometry={strand.geometry}>
          <meshBasicMaterial
            color={strand.color}
            transparent
            opacity={strand.opacity}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* 2. High-Speed Tangential Laser Light-Streaks */}
      {streaks.map((streak, i) => (
        <mesh
          key={`streak-${i}`}
          ref={(el) => {
            streakRefs.current[i] = el;
          }}
        >
          <capsuleGeometry args={[0.036, 0.34, 6, 12]} />
          <meshBasicMaterial
            color={streak.color}
            transparent
            opacity={0.9}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* 3. 3D Holographic Signal Spectrum Ring (44 Animated Frequency Bars) */}
      <group ref={spectrumGroupRef}>
        {spectrumBars.map((bar, i) => (
          <mesh
            key={`bar-${i}`}
            ref={(el) => {
              barRefs.current[i] = el;
            }}
            position={[bar.x, 0, bar.z]}
            rotation={[0, -bar.angle, 0]}
          >
            <boxGeometry args={[0.042, 0.32, 0.042]} />
            <meshBasicMaterial
              color={bar.color}
              transparent
              opacity={0.48}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>

      {/* 4. Counter-Rotating Segmented 3D Optical Telemetry Arcs */}
      <group ref={arcGroup1Ref}>
        {[0, Math.PI * 0.66, Math.PI * 1.33].map((rot, idx) => (
          <mesh key={`arc1-${idx}`} rotation={[0, 0, rot]}>
            <torusGeometry args={[2.15, 0.022, 10, 48, Math.PI * 0.42]} />
            <meshBasicMaterial
              color="#008FFF"
              transparent
              opacity={0.44}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>

      <group ref={arcGroup2Ref}>
        {[0.3, Math.PI + 0.3].map((rot, idx) => (
          <mesh key={`arc2-${idx}`} rotation={[0, 0, rot]}>
            <torusGeometry args={[2.55, 0.018, 10, 48, Math.PI * 0.55]} />
            <meshBasicMaterial
              color="#06B6D4"
              transparent
              opacity={0.34}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>

      {/* 5. Expanding 3D Signal Pulse Ripples */}
      {[0, 1, 2].map((idx) => (
        <mesh
          key={`pulse-ring-${idx}`}
          ref={(el) => {
            pulseRingRefs.current[idx] = el;
          }}
        >
          <torusGeometry args={[1.05, 0.014, 10, 64]} />
          <meshBasicMaterial
            color={idx % 2 === 0 ? "#008FFF" : "#2EC1D9"}
            transparent
            opacity={0.3}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* 6. Floating 3D Signal Relay Octahedron Crystals */}
      {relayNodes.map((node, idx) => (
        <mesh
          key={`relay-${idx}`}
          ref={(el) => {
            nodeRefs.current[idx] = el;
          }}
          position={node.pos}
          scale={node.scale}
        >
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial
            color={idx % 2 === 0 ? "#008FFF" : "#06B6D4"}
            wireframe
            transparent
            opacity={0.55}
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
        camera={{ position: [0, 0.25, 6.2], fov: 44 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <UniqueOpticalSignalStage />
      </Canvas>
    </div>
  );
}
