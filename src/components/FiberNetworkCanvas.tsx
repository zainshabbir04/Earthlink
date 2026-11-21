"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface IncomingFiber {
  curve: THREE.CatmullRomCurve3;
  geometry: THREE.TubeGeometry;
  totalIndices: number;
  color: string;
  delay: number;
}

const CYCLE_DURATION = 7.4; // seconds per full Fiber-Connect -> WiFi-Broadcast loop

function FiberToWifiBannerScene() {
  const rootRef = useRef<THREE.Group>(null);
  const leadSparkRefs = useRef<(THREE.Mesh | null)[]>([]);
  const dataPulseRefs = useRef<(THREE.Mesh | null)[]>([]);
  const connectFlashRef = useRef<THREE.Mesh>(null);
  const wifiArcMatRefs = useRef<(THREE.MeshStandardMaterial | null)[]>([]);
  const wifiCap1MatRefs = useRef<(THREE.MeshStandardMaterial | null)[]>([]);
  const wifiCap2MatRefs = useRef<(THREE.MeshStandardMaterial | null)[]>([]);
  const wifiGroupRefs = useRef<(THREE.Group | null)[]>([]);
  const broadcastRippleRefs = useRef<(THREE.Mesh | null)[]>([]);

  // 1. Six 3D Optical Fiber Wires sweeping in from the edges to connect behind the EARTHLINK logo at (0,0,0)
  const fibers = useMemo<IncomingFiber[]>(() => {
    const configs: Array<{
      pts: [number, number, number][];
      color: string;
      radius: number;
      delay: number;
    }> = [
      // Bottom-left primary trunk
      {
        pts: [
          [-2.35, -1.65, -0.35],
          [-1.55, -1.05, 0.12],
          [-0.75, -0.45, 0.08],
          [0, 0, -0.1],
        ],
        color: "#008FFF",
        radius: 0.028,
        delay: 0.0,
      },
      // Mid-left optical wire
      {
        pts: [
          [-2.45, -0.15, -0.25],
          [-1.55, 0.22, 0.18],
          [-0.75, 0.08, 0.05],
          [0, 0, -0.1],
        ],
        color: "#0FA4E8",
        radius: 0.024,
        delay: 0.14,
      },
      // Bottom-center-left optical wire
      {
        pts: [
          [-1.15, -2.2, -0.4],
          [-0.78, -1.35, 0.15],
          [-0.35, -0.58, 0.06],
          [0, 0, -0.1],
        ],
        color: "#06B6D4",
        radius: 0.023,
        delay: 0.24,
      },
      // Bottom-right primary trunk
      {
        pts: [
          [2.35, -1.65, -0.35],
          [1.55, -1.05, 0.12],
          [0.75, -0.45, 0.08],
          [0, 0, -0.1],
        ],
        color: "#008FFF",
        radius: 0.028,
        delay: 0.06,
      },
      // Mid-right optical wire
      {
        pts: [
          [2.45, -0.15, -0.25],
          [1.55, 0.22, 0.18],
          [0.75, 0.08, 0.05],
          [0, 0, -0.1],
        ],
        color: "#0FA4E8",
        radius: 0.024,
        delay: 0.18,
      },
      // Bottom-center-right optical wire
      {
        pts: [
          [1.15, -2.2, -0.4],
          [0.78, -1.35, 0.15],
          [0.35, -0.58, 0.06],
          [0, 0, -0.1],
        ],
        color: "#06B6D4",
        radius: 0.023,
        delay: 0.28,
      },
    ];

    return configs.map((cfg) => {
      const curve = new THREE.CatmullRomCurve3(
        cfg.pts.map(([x, y, z]) => new THREE.Vector3(x, y, z))
      );
      const tubularSegments = 64;
      const radialSegments = 10;
      const geometry = new THREE.TubeGeometry(
        curve,
        tubularSegments,
        cfg.radius,
        radialSegments,
        false
      );
      const totalIndices = geometry.index
        ? geometry.index.count
        : tubularSegments * radialSegments * 6;
      geometry.setDrawRange(0, 0);

      return {
        curve,
        geometry,
        totalIndices,
        color: cfg.color,
        delay: cfg.delay,
      };
    });
  }, []);

  // 2. Iconic 3D WiFi Signal Waves radiating outward from behind the EARTHLINK logo
  //    (4 prominent upward WiFi waves + 3 left & 3 right side WiFi signal arcs)
  const wifiArcs = useMemo(() => {
    const items: Array<{
      radius: number;
      tube: number;
      arcAngle: number;
      rotZ: number;
      waveIdx: number;
      color: string;
      maxOpacity: number;
      z: number;
    }> = [];

    // Primary Top WiFi Broadcast Fan (4 crisp arcs pointing upward)
    const topArc = Math.PI * 0.56;
    [
      { r: 0.92, tube: 0.044, color: "#008FFF", op: 0.92, z: 0.15 },
      { r: 1.18, tube: 0.042, color: "#0FA4E8", op: 0.85, z: 0.08 },
      { r: 1.44, tube: 0.039, color: "#06B6D4", op: 0.76, z: 0.0 },
      { r: 1.7, tube: 0.035, color: "#38BDF8", op: 0.65, z: -0.08 },
    ].forEach((w, idx) => {
      items.push({
        radius: w.r,
        tube: w.tube,
        arcAngle: topArc,
        rotZ: Math.PI / 2 - topArc / 2,
        waveIdx: idx,
        color: w.color,
        maxOpacity: w.op,
        z: w.z,
      });
    });

    // Left & Right Secondary WiFi Signal Fans (3 arcs each)
    const sideArc = Math.PI * 0.36;
    [
      { r: 1.05, tube: 0.034, color: "#0FA4E8", op: 0.62, z: -0.05 },
      { r: 1.34, tube: 0.031, color: "#06B6D4", op: 0.5, z: -0.12 },
      { r: 1.62, tube: 0.028, color: "#38BDF8", op: 0.38, z: -0.18 },
    ].forEach((w, idx) => {
      // Right fan
      items.push({
        radius: w.r,
        tube: w.tube,
        arcAngle: sideArc,
        rotZ: -sideArc / 2 + 0.18,
        waveIdx: idx + 0.45,
        color: w.color,
        maxOpacity: w.op,
        z: w.z,
      });
      // Left fan
      items.push({
        radius: w.r,
        tube: w.tube,
        arcAngle: sideArc,
        rotZ: Math.PI - sideArc / 2 - 0.18,
        waveIdx: idx + 0.45,
        color: w.color,
        maxOpacity: w.op,
        z: w.z,
      });
    });

    return items;
  }, []);

  const tempPos = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycleT = t % CYCLE_DURATION;

    // Gentle 3D tilt + subtle pointer parallax
    if (rootRef.current) {
      const targetX = -0.08 + Math.sin(t * 0.4) * 0.06 + state.pointer.y * 0.1;
      const targetY = Math.cos(t * 0.32) * 0.1 + state.pointer.x * 0.14;
      rootRef.current.rotation.x = THREE.MathUtils.lerp(
        rootRef.current.rotation.x,
        targetX,
        0.05
      );
      rootRef.current.rotation.y = THREE.MathUtils.lerp(
        rootRef.current.rotation.y,
        targetY,
        0.05
      );
    }

    // ---------------------------------------------------------
    // STAGE 1 (0.0s -> 1.85s): Fiber Wires Grow & Connect to Logo
    // ---------------------------------------------------------
    const fadeOutTail =
      cycleT > CYCLE_DURATION - 0.65
        ? Math.max(0, (CYCLE_DURATION - cycleT) / 0.65)
        : 1;

    fibers.forEach((fiber, i) => {
      const growDuration = 1.45;
      const rawProgress = (cycleT - fiber.delay) / growDuration;
      const progress = THREE.MathUtils.clamp(rawProgress, 0, 1);
      // Smooth cubic ease-out for fiber wire growth
      const eased = 1 - Math.pow(1 - progress, 3);

      const drawCount = Math.floor(eased * fiber.totalIndices);
      fiber.geometry.setDrawRange(0, drawCount);

      // Glowing laser tip at the leading edge while connecting
      const spark = leadSparkRefs.current[i];
      if (spark) {
        if (progress > 0.01 && progress < 0.99) {
          fiber.curve.getPointAt(eased, tempPos);
          spark.position.copy(tempPos);
          spark.visible = true;
          spark.scale.setScalar(1.1);
        } else {
          spark.visible = false;
        }
      }

      // Continuous streaming optical data pulses once wire is connected
      const pulse = dataPulseRefs.current[i];
      if (pulse) {
        if (progress >= 0.98 && fadeOutTail > 0.1) {
          const u = ((t * 0.72 + i * 0.17) % 1);
          fiber.curve.getPointAt(u, tempPos);
          pulse.position.copy(tempPos);
          pulse.visible = true;
          const s = Math.sin(u * Math.PI) * 0.95 * fadeOutTail;
          pulse.scale.setScalar(Math.max(0.001, s));
        } else {
          pulse.visible = false;
        }
      }
    });

    // ---------------------------------------------------------
    // CONNECTION FLASH (1.55s -> 2.35s): Core Ignition Behind Logo
    // ---------------------------------------------------------
    if (connectFlashRef.current) {
      const flashStart = 1.55;
      const flashDur = 0.85;
      const fProgress = (cycleT - flashStart) / flashDur;
      if (fProgress > 0 && fProgress < 1) {
        connectFlashRef.current.visible = true;
        const s = 0.65 + fProgress * 1.15;
        connectFlashRef.current.scale.set(s, s, 1);
        const mat = connectFlashRef.current.material as THREE.MeshBasicMaterial;
        mat.opacity = Math.sin(fProgress * Math.PI) * 0.7;
      } else {
        connectFlashRef.current.visible = false;
      }
    }

    // ---------------------------------------------------------
    // STAGE 2 (1.65s -> 6.8s): 3D WiFi Signal Waves Radiate Outward!
    // ---------------------------------------------------------
    const wifiStart = 1.65;
    const wifiElapsed = Math.max(0, cycleT - wifiStart);
    const wifiEnvelope =
      cycleT < wifiStart
        ? 0
        : Math.min(1, wifiElapsed / 0.55) * fadeOutTail;

    wifiArcs.forEach((arc, i) => {
      // Stagger each WiFi arc's appearance from inner -> outer
      const arcReveal = THREE.MathUtils.clamp(
        (wifiElapsed - arc.waveIdx * 0.16) / 0.35,
        0,
        1
      );
      // Continuous inner-to-outer WiFi signal broadcast wave
      const wavePulse =
        Math.pow(Math.sin(t * 3.4 - arc.waveIdx * 0.8) * 0.5 + 0.5, 1.5);
      const finalOpacity =
        wifiEnvelope * arcReveal * (0.2 + wavePulse * (arc.maxOpacity - 0.2));
      const emissive = 0.2 + wavePulse * 0.65;

      const m1 = wifiArcMatRefs.current[i];
      const m2 = wifiCap1MatRefs.current[i];
      const m3 = wifiCap2MatRefs.current[i];
      if (m1) {
        m1.opacity = finalOpacity;
        m1.emissiveIntensity = emissive;
      }
      if (m2) {
        m2.opacity = finalOpacity;
        m2.emissiveIntensity = emissive;
      }
      if (m3) {
        m3.opacity = finalOpacity;
        m3.emissiveIntensity = emissive;
      }

      const grp = wifiGroupRefs.current[i];
      if (grp) {
        grp.visible = finalOpacity > 0.01;
        const scale = 0.94 + arcReveal * 0.06 + wavePulse * 0.04;
        grp.scale.set(scale, scale, 1);
      }
    });

    // Subtle expanding broadcast rings while WiFi is active
    broadcastRippleRefs.current.forEach((ring, idx) => {
      if (!ring) return;
      if (wifiEnvelope <= 0.05) {
        ring.visible = false;
        return;
      }
      ring.visible = true;
      const p = (wifiElapsed * 0.42 + idx * 0.5) % 1;
      const s = 0.65 + p * 1.15;
      ring.scale.set(s, s, 1);
      const mat = ring.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.sin(p * Math.PI) * 0.28 * wifiEnvelope;
    });
  });

  return (
    <group ref={rootRef}>
      {/* 1. Incoming 3D Fiber Optic Cables Connecting Behind the EARTHLINK Logo */}
      {fibers.map((fiber, idx) => (
        <group key={`fiber-wire-${idx}`}>
          <mesh geometry={fiber.geometry}>
            <meshStandardMaterial
              color={fiber.color}
              emissive={fiber.color}
              emissiveIntensity={0.4}
              roughness={0.22}
              metalness={0.2}
              transparent
              opacity={0.78}
            />
          </mesh>

          {/* Leading Laser Tip as Wire Draws In */}
          <mesh
            ref={(el) => {
              leadSparkRefs.current[idx] = el;
            }}
            visible={false}
          >
            <sphereGeometry args={[0.075, 14, 14]} />
            <meshBasicMaterial color="#008FFF" />
          </mesh>

          {/* Streaming Optical Data Light Packet After Connection */}
          <mesh
            ref={(el) => {
              dataPulseRefs.current[idx] = el;
            }}
            visible={false}
          >
            <sphereGeometry args={[0.055, 12, 12]} />
            <meshBasicMaterial color="#38BDF8" />
          </mesh>
        </group>
      ))}

      {/* 2. Core Connection Ignition Ring Behind the EARTHLINK Logo */}
      <mesh ref={connectFlashRef} position={[0, 0, -0.06]} visible={false}>
        <torusGeometry args={[0.72, 0.032, 14, 64]} />
        <meshBasicMaterial
          color="#008FFF"
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Glossy 3D WiFi Signal Waves Radiating Outward Once Fiber Connects */}
      {wifiArcs.map((arc, i) => {
        const endX = Math.cos(arc.arcAngle) * arc.radius;
        const endY = Math.sin(arc.arcAngle) * arc.radius;
        return (
          <group
            key={`hero-wifi-${i}`}
            ref={(el) => {
              wifiGroupRefs.current[i] = el;
            }}
            rotation={[0, 0, arc.rotZ]}
            position={[0, 0, arc.z]}
            visible={false}
          >
            <mesh>
              <torusGeometry args={[arc.radius, arc.tube, 16, 48, arc.arcAngle]} />
              <meshStandardMaterial
                ref={(el) => {
                  wifiArcMatRefs.current[i] = el;
                }}
                color={arc.color}
                emissive={arc.color}
                emissiveIntensity={0.35}
                roughness={0.22}
                metalness={0.18}
                transparent
                opacity={0}
                depthWrite={false}
              />
            </mesh>
            {/* Rounded Start Cap */}
            <mesh position={[arc.radius, 0, 0]}>
              <sphereGeometry args={[arc.tube, 12, 12]} />
              <meshStandardMaterial
                ref={(el) => {
                  wifiCap1MatRefs.current[i] = el;
                }}
                color={arc.color}
                emissive={arc.color}
                emissiveIntensity={0.35}
                roughness={0.22}
                metalness={0.18}
                transparent
                opacity={0}
                depthWrite={false}
              />
            </mesh>
            {/* Rounded End Cap */}
            <mesh position={[endX, endY, 0]}>
              <sphereGeometry args={[arc.tube, 12, 12]} />
              <meshStandardMaterial
                ref={(el) => {
                  wifiCap2MatRefs.current[i] = el;
                }}
                color={arc.color}
                emissive={arc.color}
                emissiveIntensity={0.35}
                roughness={0.22}
                metalness={0.18}
                transparent
                opacity={0}
                depthWrite={false}
              />
            </mesh>
          </group>
        );
      })}

      {/* 4. Soft Expanding Broadcast Signal Ripples */}
      {[0, 1].map((idx) => (
        <mesh
          key={`hero-ripple-${idx}`}
          ref={(el) => {
            broadcastRippleRefs.current[idx] = el;
          }}
          position={[0, 0, -0.22]}
          visible={false}
        >
          <torusGeometry args={[0.92, 0.014, 12, 64]} />
          <meshBasicMaterial
            color={idx === 0 ? "#008FFF" : "#06B6D4"}
            transparent
            opacity={0}
            depthWrite={false}
          />
        </mesh>
      ))}
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
        <ambientLight intensity={1.15} />
        <directionalLight position={[4, 6, 8]} intensity={1.55} color="#ffffff" />
        <directionalLight position={[-4, -4, 4]} intensity={0.65} color="#38BDF8" />
        <FiberToWifiBannerScene />
      </Canvas>
    </div>
  );
}
