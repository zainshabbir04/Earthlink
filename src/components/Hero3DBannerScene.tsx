"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Lightformer,
  Billboard,
  useTexture,
  Points,
  PointMaterial,
} from "@react-three/drei";
import * as THREE from "three";

interface FiberCable3D {
  curve: THREE.CatmullRomCurve3;
  geometry: THREE.TubeGeometry;
  totalIndices: number;
  color: string;
  delay: number;
  speed: number;
}

const LOOP_SECONDS = 7.6;

function CenterEarthlinkMedallion() {
  const logoTex = useTexture("/logo-color.png");
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (haloRef.current) {
      haloRef.current.rotation.z -= delta * 0.45;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.4) * 0.03;
      haloRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <Billboard follow lockX={false} lockY={false} lockZ={false}>
      <group>
        {/* Outer Luminous Electric-Cyan Bezel Ring */}
        <mesh>
          <torusGeometry args={[0.84, 0.045, 24, 72]} />
          <meshPhysicalMaterial
            color="#38BDF8"
            emissive="#008FFF"
            emissiveIntensity={1.25}
            roughness={0.12}
            metalness={0.5}
            clearcoat={1}
          />
        </mesh>

        {/* Secondary Precision Dashed-Feel Outer Halo */}
        <mesh ref={haloRef}>
          <torusGeometry args={[0.98, 0.015, 16, 72]} />
          <meshBasicMaterial
            color="#22D3EE"
            transparent
            opacity={0.55}
            depthWrite={false}
          />
        </mesh>

        {/* Crisp Pure-White Glossy 3D Medallion Disc (Makes Logo 100% Sharp on Dark Banner) */}
        <mesh position={[0, 0, -0.025]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.82, 0.82, 0.06, 64]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.1}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.06}
          />
        </mesh>

        {/* Official EARTHLINK Broadband Logo */}
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[1.32, 0.72]} />
          <meshBasicMaterial map={logoTex} transparent toneMapped={false} />
        </mesh>
      </group>
    </Billboard>
  );
}

function HeroFiberToWifi3DAssembly() {
  const stageRef = useRef<THREE.Group>(null);
  const sparkRefs = useRef<(THREE.Mesh | null)[]>([]);
  const pulseRefs = useRef<(THREE.Mesh | null)[]>([]);
  const pulseHaloRefs = useRef<(THREE.Mesh | null)[]>([]);
  const flashRingRef = useRef<THREE.Mesh>(null);
  const wifiGroupRefs = useRef<(THREE.Group | null)[]>([]);
  const wifiMat1Refs = useRef<(THREE.MeshPhysicalMaterial | null)[]>([]);
  const wifiMat2Refs = useRef<(THREE.MeshPhysicalMaterial | null)[]>([]);
  const wifiMat3Refs = useRef<(THREE.MeshPhysicalMaterial | null)[]>([]);
  const rippleRefs = useRef<(THREE.Mesh | null)[]>([]);
  const starFieldRef = useRef<THREE.Points>(null);

  // 1. Eight Sleek 3D Curved Optical Fiber Cables Sweeping In From Depth Into the EARTHLINK Logo
  const fibers = useMemo<FiberCable3D[]>(() => {
    const configs: Array<{
      pts: [number, number, number][];
      color: string;
      radius: number;
      delay: number;
      speed: number;
    }> = [
      // Left-side incoming fiber trunks
      {
        pts: [
          [-3.2, -1.35, -0.8],
          [-2.0, -0.95, 0.35],
          [-1.05, -0.42, 0.2],
          [0, -0.25, -0.12],
        ],
        color: "#008FFF",
        radius: 0.032,
        delay: 0.0,
        speed: 0.58,
      },
      {
        pts: [
          [-3.35, -0.2, -0.5],
          [-2.1, 0.25, 0.45],
          [-1.05, -0.05, 0.15],
          [0, -0.25, -0.12],
        ],
        color: "#22D3EE",
        radius: 0.026,
        delay: 0.12,
        speed: 0.66,
      },
      {
        pts: [
          [-2.6, -2.15, -0.9],
          [-1.55, -1.4, 0.25],
          [-0.72, -0.78, 0.15],
          [0, -0.25, -0.12],
        ],
        color: "#38BDF8",
        radius: 0.025,
        delay: 0.22,
        speed: 0.54,
      },
      // Bottom-center fiber trunks
      {
        pts: [
          [-0.85, -2.55, -0.7],
          [-0.52, -1.55, 0.3],
          [-0.22, -0.82, 0.12],
          [0, -0.25, -0.12],
        ],
        color: "#06B6D4",
        radius: 0.026,
        delay: 0.16,
        speed: 0.62,
      },
      {
        pts: [
          [0.85, -2.55, -0.7],
          [0.52, -1.55, 0.3],
          [0.22, -0.82, 0.12],
          [0, -0.25, -0.12],
        ],
        color: "#008FFF",
        radius: 0.026,
        delay: 0.2,
        speed: 0.6,
      },
      // Right-side incoming fiber trunks
      {
        pts: [
          [3.2, -1.35, -0.8],
          [2.0, -0.95, 0.35],
          [1.05, -0.42, 0.2],
          [0, -0.25, -0.12],
        ],
        color: "#008FFF",
        radius: 0.032,
        delay: 0.06,
        speed: 0.64,
      },
      {
        pts: [
          [3.35, -0.2, -0.5],
          [2.1, 0.25, 0.45],
          [1.05, -0.05, 0.15],
          [0, -0.25, -0.12],
        ],
        color: "#22D3EE",
        radius: 0.026,
        delay: 0.18,
        speed: 0.56,
      },
      {
        pts: [
          [2.6, -2.15, -0.9],
          [1.55, -1.4, 0.25],
          [0.72, -0.78, 0.15],
          [0, -0.25, -0.12],
        ],
        color: "#38BDF8",
        radius: 0.025,
        delay: 0.26,
        speed: 0.68,
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
        speed: cfg.speed,
      };
    });
  }, []);

  // 2. Sculpted Glowing 3D WiFi Signal Waves Rising Above the EARTHLINK Logo
  const wifiArcs = useMemo(() => {
    const topArc = Math.PI * 0.58;
    return [
      { r: 1.15, tube: 0.056, arcAngle: topArc, rotZ: Math.PI / 2 - topArc / 2, waveIdx: 0, color: "#38BDF8" },
      { r: 1.48, tube: 0.052, arcAngle: topArc, rotZ: Math.PI / 2 - topArc / 2, waveIdx: 1, color: "#22D3EE" },
      { r: 1.81, tube: 0.048, arcAngle: topArc, rotZ: Math.PI / 2 - topArc / 2, waveIdx: 2, color: "#008FFF" },
      { r: 2.14, tube: 0.042, arcAngle: topArc, rotZ: Math.PI / 2 - topArc / 2, waveIdx: 3, color: "#67E8F9" },
    ];
  }, []);

  // 3. Soft Ambient Photonic Starlight Dust in 3D Depth
  const starPositions = useMemo(() => {
    const count = 140;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 7.5;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5.2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3.5 - 0.6;
    }
    return arr;
  }, []);

  const tempPos = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const cycleT = t % LOOP_SECONDS;

    // Smooth interactive 3D tilt following cursor
    if (stageRef.current) {
      const targetX = -0.06 + Math.sin(t * 0.35) * 0.05 + state.pointer.y * 0.14;
      const targetY = Math.cos(t * 0.28) * 0.08 + state.pointer.x * 0.2;
      stageRef.current.rotation.x = THREE.MathUtils.lerp(
        stageRef.current.rotation.x,
        targetX,
        0.045
      );
      stageRef.current.rotation.y = THREE.MathUtils.lerp(
        stageRef.current.rotation.y,
        targetY,
        0.045
      );
    }

    if (starFieldRef.current) {
      starFieldRef.current.rotation.y += delta * 0.035;
    }

    const fadeTail =
      cycleT > LOOP_SECONDS - 0.65
        ? Math.max(0, (LOOP_SECONDS - cycleT) / 0.65)
        : 1;

    // STAGE 1: Fiber cables smoothly extend & connect behind the EARTHLINK logo
    fibers.forEach((fiber, i) => {
      const growDur = 1.4;
      const prog = THREE.MathUtils.clamp((cycleT - fiber.delay) / growDur, 0, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      fiber.geometry.setDrawRange(0, Math.floor(eased * fiber.totalIndices));

      // White-hot laser tip as cable grows in
      const spark = sparkRefs.current[i];
      if (spark) {
        if (prog > 0.02 && prog < 0.99) {
          fiber.curve.getPointAt(eased, tempPos);
          spark.position.copy(tempPos);
          spark.visible = true;
        } else {
          spark.visible = false;
        }
      }

      // Streaming optical light packets once connected
      const pulse = pulseRefs.current[i];
      const halo = pulseHaloRefs.current[i];
      if (pulse && halo) {
        if (prog >= 0.98 && fadeTail > 0.05) {
          const u = (t * fiber.speed + i * 0.15) % 1;
          fiber.curve.getPointAt(u, tempPos);
          const s = Math.sin(u * Math.PI) * fadeTail;
          pulse.position.copy(tempPos);
          pulse.visible = true;
          pulse.scale.setScalar(Math.max(0.01, s * 1.05));

          halo.position.copy(tempPos);
          halo.visible = true;
          halo.scale.setScalar(Math.max(0.01, s * 1.45));
        } else {
          pulse.visible = false;
          halo.visible = false;
        }
      }
    });

    // CONNECTION IGNITION RING BEHIND LOGO
    if (flashRingRef.current) {
      const fProg = (cycleT - 1.5) / 0.85;
      if (fProg > 0 && fProg < 1) {
        flashRingRef.current.visible = true;
        const s = 0.85 + fProg * 1.55;
        flashRingRef.current.scale.set(s, s, 1);
        const mat = flashRingRef.current.material as THREE.MeshBasicMaterial;
        mat.opacity = Math.sin(fProg * Math.PI) * 0.85;
      } else {
        flashRingRef.current.visible = false;
      }
    }

    // STAGE 2: Glossy 3D WiFi Signal Waves Radiating Sequentially Upward & Outward
    const wifiStart = 1.58;
    const wifiElapsed = Math.max(0, cycleT - wifiStart);
    const wifiEnv =
      cycleT < wifiStart ? 0 : Math.min(1, wifiElapsed / 0.45) * fadeTail;

    wifiArcs.forEach((arc, i) => {
      const reveal = THREE.MathUtils.clamp(
        (wifiElapsed - arc.waveIdx * 0.16) / 0.32,
        0,
        1
      );
      const wave = Math.pow(
        Math.sin(t * 3.5 - arc.waveIdx * 0.82) * 0.5 + 0.5,
        1.45
      );
      const opacity = wifiEnv * reveal * (0.28 + wave * 0.72);
      const emissive = 0.45 + wave * 1.35;

      [wifiMat1Refs.current[i], wifiMat2Refs.current[i], wifiMat3Refs.current[i]].forEach(
        (m) => {
          if (m) {
            m.opacity = opacity;
            m.emissiveIntensity = emissive;
          }
        }
      );

      const grp = wifiGroupRefs.current[i];
      if (grp) {
        grp.visible = opacity > 0.01;
        const scale = 0.94 + reveal * 0.06 + wave * 0.045;
        grp.scale.set(scale, scale, 1);
      }
    });

    // Expanding concentric 3D holographic broadcast rings
    rippleRefs.current.forEach((ring, idx) => {
      if (!ring) return;
      if (wifiEnv <= 0.04) {
        ring.visible = false;
        return;
      }
      ring.visible = true;
      const p = (wifiElapsed * 0.4 + idx * 0.5) % 1;
      const s = 0.9 + p * 1.45;
      ring.scale.set(s, s, 1);
      const mat = ring.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.sin(p * Math.PI) * 0.36 * wifiEnv;
    });
  });

  return (
    <group ref={stageRef}>
      {/* Ambient Photonic Starlight */}
      <Points
        ref={starFieldRef}
        positions={starPositions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#7DD3FC"
          size={0.055}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />
      </Points>

      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.18}>
        <group>
          {/* 1. Official EARTHLINK Logo Medallion in the Center */}
          <group position={[0, -0.25, 0.1]}>
            <Suspense fallback={null}>
              <CenterEarthlinkMedallion />
            </Suspense>
          </group>

          {/* 2. Incoming 3D Luminous Optical Fiber Cables */}
          {fibers.map((fiber, i) => (
            <group key={`hero-fiber-${i}`}>
              <mesh geometry={fiber.geometry}>
                <meshPhysicalMaterial
                  color={fiber.color}
                  emissive={fiber.color}
                  emissiveIntensity={0.85}
                  roughness={0.14}
                  metalness={0.2}
                  clearcoat={1}
                  transparent
                  opacity={0.88}
                />
              </mesh>

              {/* Leading Laser Spark Tip */}
              <mesh
                ref={(el) => {
                  sparkRefs.current[i] = el;
                }}
                visible={false}
              >
                <sphereGeometry args={[0.09, 14, 14]} />
                <meshBasicMaterial color="#FFFFFF" />
              </mesh>

              {/* Streaming Data Light Packet + Glow Halo */}
              <mesh
                ref={(el) => {
                  pulseRefs.current[i] = el;
                }}
                visible={false}
              >
                <sphereGeometry args={[0.058, 12, 12]} />
                <meshBasicMaterial color="#FFFFFF" />
              </mesh>
              <mesh
                ref={(el) => {
                  pulseHaloRefs.current[i] = el;
                }}
                visible={false}
              >
                <sphereGeometry args={[0.125, 12, 12]} />
                <meshBasicMaterial
                  color="#22D3EE"
                  transparent
                  opacity={0.42}
                  depthWrite={false}
                />
              </mesh>
            </group>
          ))}

          {/* 3. Core Connection Ignition Shockwave Ring */}
          <mesh ref={flashRingRef} position={[0, -0.25, -0.05]} visible={false}>
            <torusGeometry args={[0.92, 0.036, 16, 72]} />
            <meshBasicMaterial
              color="#38BDF8"
              transparent
              opacity={0}
              depthWrite={false}
            />
          </mesh>

          {/* 4. Sculpted Luminous 3D WiFi Signal Waves Radiating Above the Logo */}
          {wifiArcs.map((arc, i) => {
            const endX = Math.cos(arc.arcAngle) * arc.r;
            const endY = Math.sin(arc.arcAngle) * arc.r;
            return (
              <group
                key={`banner-wifi-${i}`}
                ref={(el) => {
                  wifiGroupRefs.current[i] = el;
                }}
                position={[0, -0.25, 0.02 - i * 0.04]}
                rotation={[0, 0, arc.rotZ]}
                visible={false}
              >
                <mesh>
                  <torusGeometry args={[arc.r, arc.tube, 20, 64, arc.arcAngle]} />
                  <meshPhysicalMaterial
                    ref={(el) => {
                      wifiMat1Refs.current[i] = el;
                    }}
                    color={arc.color}
                    emissive={arc.color}
                    emissiveIntensity={0.9}
                    roughness={0.12}
                    metalness={0.22}
                    clearcoat={1}
                    transparent
                    opacity={0}
                    depthWrite={false}
                  />
                </mesh>
                <mesh position={[arc.r, 0, 0]}>
                  <sphereGeometry args={[arc.tube, 14, 14]} />
                  <meshPhysicalMaterial
                    ref={(el) => {
                      wifiMat2Refs.current[i] = el;
                    }}
                    color={arc.color}
                    emissive={arc.color}
                    emissiveIntensity={0.9}
                    roughness={0.12}
                    metalness={0.22}
                    clearcoat={1}
                    transparent
                    opacity={0}
                    depthWrite={false}
                  />
                </mesh>
                <mesh position={[endX, endY, 0]}>
                  <sphereGeometry args={[arc.tube, 14, 14]} />
                  <meshPhysicalMaterial
                    ref={(el) => {
                      wifiMat3Refs.current[i] = el;
                    }}
                    color={arc.color}
                    emissive={arc.color}
                    emissiveIntensity={0.9}
                    roughness={0.12}
                    metalness={0.22}
                    clearcoat={1}
                    transparent
                    opacity={0}
                    depthWrite={false}
                  />
                </mesh>
              </group>
            );
          })}

          {/* 5. Expanding Concentric 3D Signal Ripples */}
          {[0, 1].map((idx) => (
            <mesh
              key={`b-ripple-${idx}`}
              ref={(el) => {
                rippleRefs.current[idx] = el;
              }}
              position={[0, -0.25, -0.2]}
              visible={false}
            >
              <torusGeometry args={[1.05, 0.015, 12, 72]} />
              <meshBasicMaterial
                color={idx === 0 ? "#38BDF8" : "#22D3EE"}
                transparent
                opacity={0}
                depthWrite={false}
              />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
}

export default function Hero3DBannerScene() {
  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[490px] select-none">
      <Canvas
        camera={{ position: [0, 0.1, 5.75], fov: 44 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[4, 6, 7]} intensity={1.9} color="#ffffff" />
        <directionalLight position={[-5, -3, 4]} intensity={1.0} color="#38BDF8" />
        <pointLight position={[0, 0.2, 2]} intensity={1.8} color="#008FFF" distance={7} />

        <Environment resolution={256}>
          <Lightformer
            form="ring"
            intensity={2.4}
            position={[0, 5, 3]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={8}
            color="#ffffff"
          />
          <Lightformer
            form="rect"
            intensity={1.8}
            position={[-5, 2, 4]}
            rotation={[0, Math.PI / 3, 0]}
            scale={[6, 3, 1]}
            color="#7DD3FC"
          />
          <Lightformer
            form="rect"
            intensity={1.6}
            position={[5, -2, 4]}
            rotation={[0, -Math.PI / 3, 0]}
            scale={[6, 3, 1]}
            color="#22D3EE"
          />
        </Environment>

        <HeroFiberToWifi3DAssembly />
      </Canvas>
    </div>
  );
}
