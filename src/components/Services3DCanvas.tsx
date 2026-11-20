"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FiberDef {
  curve: THREE.CatmullRomCurve3;
  geometry: THREE.TubeGeometry;
  color: string;
  opacity: number;
  speed: number;
  direction: 1 | -1;
  phase: number;
}

function OpticalFiberAndSignalScene() {
  const groupRef = useRef<THREE.Group>(null);
  const pulseMeshRefs = useRef<(THREE.Mesh | null)[]>([]);
  const pulseHaloRefs = useRef<(THREE.Mesh | null)[]>([]);
  const waveRingRefs = useRef<(THREE.Mesh | null)[]>([]);
  const sineWave1Ref = useRef<THREE.Line>(null);
  const sineWave2Ref = useRef<THREE.Line>(null);

  // 1. Create 10 graceful 3D optical fiber strands curving across the wide stage
  const fibers = useMemo<FiberDef[]>(() => {
    const configs: Array<{
      pts: [number, number, number][];
      color: string;
      radius: number;
      opacity: number;
      speed: number;
      direction: 1 | -1;
      phase: number;
    }> = [
      // Upper-left to lower-right diagonal optical trunks
      {
        pts: [
          [-5.8, 1.85, -1.2],
          [-2.8, 1.05, 0.45],
          [0, 0.25, 0.75],
          [2.7, -0.75, 0.3],
          [5.8, -1.65, -1.1],
        ],
        color: "#008FFF",
        radius: 0.022,
        opacity: 0.45,
        speed: 0.24,
        direction: 1,
        phase: 0.0,
      },
      {
        pts: [
          [-5.8, 1.35, -0.6],
          [-2.6, 0.55, 0.2],
          [0, -0.1, 0.5],
          [2.9, -0.45, 0.1],
          [5.8, -1.1, -0.8],
        ],
        color: "#2EC1D9",
        radius: 0.017,
        opacity: 0.38,
        speed: 0.31,
        direction: -1,
        phase: 0.35,
      },
      // Lower-left to upper-right diagonal optical trunks
      {
        pts: [
          [-5.8, -1.75, -1.0],
          [-2.9, -0.95, 0.35],
          [0, -0.2, 0.65],
          [2.8, 0.85, 0.4],
          [5.8, 1.75, -1.0],
        ],
        color: "#0FA4E8",
        radius: 0.022,
        opacity: 0.44,
        speed: 0.26,
        direction: 1,
        phase: 0.18,
      },
      {
        pts: [
          [-5.8, -1.2, -0.4],
          [-2.5, -0.45, -0.25],
          [0, 0.15, -0.35],
          [2.6, 0.5, 0.15],
          [5.8, 1.25, -0.6],
        ],
        color: "#0284C7",
        radius: 0.016,
        opacity: 0.34,
        speed: 0.29,
        direction: -1,
        phase: 0.62,
      },
      // Sweeping horizontal backbone strands with 3D depth wave
      {
        pts: [
          [-5.8, 0.35, -0.8],
          [-3.1, 0.78, 0.55],
          [0, 0.0, 0.9],
          [3.1, -0.68, 0.55],
          [5.8, 0.25, -0.8],
        ],
        color: "#008FFF",
        radius: 0.02,
        opacity: 0.42,
        speed: 0.28,
        direction: 1,
        phase: 0.48,
      },
      {
        pts: [
          [-5.8, -0.35, -0.7],
          [-3.0, -0.82, -0.5],
          [0, 0.05, -0.75],
          [3.0, 0.75, -0.4],
          [5.8, -0.3, -0.9],
        ],
        color: "#38BDF8",
        radius: 0.018,
        opacity: 0.36,
        speed: 0.33,
        direction: -1,
        phase: 0.81,
      },
      // Upper arc fiber
      {
        pts: [
          [-5.6, 2.0, -1.4],
          [-2.2, 1.55, -0.3],
          [0, 1.25, 0.25],
          [2.2, 1.55, -0.3],
          [5.6, 2.0, -1.4],
        ],
        color: "#0FA4E8",
        radius: 0.015,
        opacity: 0.3,
        speed: 0.22,
        direction: 1,
        phase: 0.25,
      },
      // Lower arc fiber
      {
        pts: [
          [-5.6, -2.0, -1.4],
          [-2.2, -1.55, -0.3],
          [0, -1.25, 0.25],
          [2.2, -1.55, -0.3],
          [5.6, -2.0, -1.4],
        ],
        color: "#2EC1D9",
        radius: 0.015,
        opacity: 0.3,
        speed: 0.25,
        direction: -1,
        phase: 0.72,
      },
    ];

    return configs.map((cfg) => {
      const curve = new THREE.CatmullRomCurve3(
        cfg.pts.map(([x, y, z]) => new THREE.Vector3(x, y, z))
      );
      const geometry = new THREE.TubeGeometry(curve, 72, cfg.radius, 8, false);
      return {
        curve,
        geometry,
        color: cfg.color,
        opacity: cfg.opacity,
        speed: cfg.speed,
        direction: cfg.direction,
        phase: cfg.phase,
      };
    });
  }, []);

  // 2. Two optical data pulses per fiber strand (16 racing light photons total)
  const pulses = useMemo(() => {
    const list: Array<{
      fiberIdx: number;
      offset: number;
      color: string;
    }> = [];
    fibers.forEach((f, idx) => {
      list.push({ fiberIdx: idx, offset: f.phase, color: "#008FFF" });
      list.push({
        fiberIdx: idx,
        offset: (f.phase + 0.5) % 1,
        color: "#2EC1D9",
      });
    });
    return list;
  }, [fibers]);

  // 3. Dynamic 3D Carrier Signal Sine-Wave Geometries
  const sineSegments = 96;
  const sineObj1 = useMemo(() => {
    const positions = new Float32Array(sineSegments * 3);
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({
      color: "#008FFF",
      transparent: true,
      opacity: 0.32,
    });
    return new THREE.Line(geom, mat);
  }, []);

  const sineObj2 = useMemo(() => {
    const positions = new Float32Array(sineSegments * 3);
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({
      color: "#2EC1D9",
      transparent: true,
      opacity: 0.26,
    });
    return new THREE.Line(geom, mat);
  }, []);

  // Reusable vector to avoid GC allocations in useFrame
  const tempPos = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Gentle 3D parallax breathing on the entire optical fiber bundle
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(t * 0.28) * 0.08;
      groupRef.current.rotation.y = Math.cos(t * 0.22) * 0.1;
    }

    // Animate glowing optical data photons along each 3D fiber curve
    pulses.forEach((pulse, i) => {
      const fiber = fibers[pulse.fiberIdx];
      let u = (pulse.offset + t * fiber.speed * fiber.direction) % 1;
      if (u < 0) u += 1;

      fiber.curve.getPointAt(u, tempPos);

      // Fade smoothly at fiber entry/exit edges
      const edgeFade = Math.sin(u * Math.PI);

      const coreMesh = pulseMeshRefs.current[i];
      if (coreMesh) {
        coreMesh.position.copy(tempPos);
        const s = 0.65 + edgeFade * 0.55;
        coreMesh.scale.setScalar(s);
      }
      const haloMesh = pulseHaloRefs.current[i];
      if (haloMesh) {
        haloMesh.position.copy(tempPos);
        const hs = 0.8 + edgeFade * 0.9;
        haloMesh.scale.setScalar(hs);
        const mat = haloMesh.material as THREE.MeshBasicMaterial;
        mat.opacity = edgeFade * 0.32;
      }
    });

    // Animate 4 concentric 3D signal radar/sonar pulses radiating from the center hub
    waveRingRefs.current.forEach((ring, idx) => {
      if (!ring) return;
      const cycle = ((t * 0.34 + idx * 0.25) % 1);
      const scale = 0.35 + cycle * 2.15;
      ring.scale.set(scale, scale, 1);
      ring.rotation.x = Math.PI / 2.9 + Math.sin(t * 0.35 + idx) * 0.06;
      ring.rotation.y = Math.cos(t * 0.25 + idx) * 0.08;
      const mat = ring.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.sin(cycle * Math.PI) * 0.42;
    });

    // Animate live 3D carrier-frequency signal waveforms
    const updateWave = (
      lineObj: THREE.Line,
      amp: number,
      freq: number,
      speed: number,
      zOffset: number
    ) => {
      const posAttr = lineObj.geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < sineSegments; i++) {
        const frac = i / (sineSegments - 1);
        const x = -5.6 + frac * 11.2;
        // Envelope peaks near center and tapers softly at edges
        const envelope = Math.sin(frac * Math.PI);
        const y =
          Math.sin(x * freq - t * speed) * amp * envelope +
          Math.sin(x * freq * 2.1 + t * speed * 0.7) * (amp * 0.28) * envelope;
        const z = zOffset + Math.cos(x * 0.7 - t * 0.8) * 0.35;
        arr[i * 3] = x;
        arr[i * 3 + 1] = y;
        arr[i * 3 + 2] = z;
      }
      posAttr.needsUpdate = true;
    };

    updateWave(sineObj1, 0.58, 1.35, 2.4, -0.35);
    updateWave(sineObj2, 0.42, 1.85, -1.9, 0.25);
  });

  return (
    <group ref={groupRef}>
      {/* 1. 3D Curving Optical Fiber Strands */}
      {fibers.map((fiber, idx) => (
        <mesh key={`fiber-${idx}`} geometry={fiber.geometry}>
          <meshBasicMaterial
            color={fiber.color}
            transparent
            opacity={fiber.opacity}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* 2. High-Speed Optical Data Photons Traveling Along the 3D Fibers */}
      {pulses.map((pulse, i) => (
        <group key={`pulse-${i}`}>
          <mesh
            ref={(el) => {
              pulseMeshRefs.current[i] = el;
            }}
          >
            <sphereGeometry args={[0.055, 12, 12]} />
            <meshBasicMaterial color={pulse.color} />
          </mesh>
          <mesh
            ref={(el) => {
              pulseHaloRefs.current[i] = el;
            }}
          >
            <sphereGeometry args={[0.13, 12, 12]} />
            <meshBasicMaterial
              color="#38BDF8"
              transparent
              opacity={0.28}
              depthWrite={false}
            />
          </mesh>
        </group>
      ))}

      {/* 3. Concentric Expanding 3D Signal Waves Radiating from the Hub */}
      {[0, 1, 2, 3].map((idx) => (
        <mesh
          key={`signal-wave-${idx}`}
          ref={(el) => {
            waveRingRefs.current[idx] = el;
          }}
        >
          <torusGeometry args={[1.05, 0.016, 12, 72]} />
          <meshBasicMaterial
            color={idx % 2 === 0 ? "#008FFF" : "#2EC1D9"}
            transparent
            opacity={0.35}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* 4. Live 3D Carrier-Frequency Signal Waveforms */}
      <primitive ref={sineWave1Ref} object={sineObj1} />
      <primitive ref={sineWave2Ref} object={sineObj2} />
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
        <OpticalFiberAndSignalScene />
      </Canvas>
    </div>
  );
}
