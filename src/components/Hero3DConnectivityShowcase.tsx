"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

interface FiberArch {
  curve: THREE.CatmullRomCurve3;
  geometry: THREE.TubeGeometry;
  color: string;
  speed: number;
  offset: number;
}

function Wifi3DBeaconArc({
  radius,
  tube,
  arcAngle,
  waveIndex,
  color,
  rotY = 0,
}: {
  radius: number;
  tube: number;
  arcAngle: number;
  waveIndex: number;
  color: string;
  rotY?: number;
}) {
  const grpRef = useRef<THREE.Group>(null);
  const mat1 = useRef<THREE.MeshPhysicalMaterial>(null);
  const mat2 = useRef<THREE.MeshPhysicalMaterial>(null);
  const mat3 = useRef<THREE.MeshPhysicalMaterial>(null);

  const startZRot = Math.PI / 2 - arcAngle / 2;
  const endX = Math.cos(arcAngle) * radius;
  const endY = Math.sin(arcAngle) * radius;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const raw = Math.sin(t * 3.1 - waveIndex * 0.78) * 0.5 + 0.5;
    const pulse = Math.pow(raw, 1.5);
    const emissive = 0.25 + pulse * 1.15;
    const opacity = 0.38 + pulse * 0.62;

    [mat1.current, mat2.current, mat3.current].forEach((m) => {
      if (m) {
        m.emissiveIntensity = emissive;
        m.opacity = opacity;
      }
    });

    if (grpRef.current) {
      const s = 1 + pulse * 0.045;
      grpRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={grpRef} rotation={[0, rotY, startZRot]}>
      <mesh>
        <torusGeometry args={[radius, tube, 20, 56, arcAngle]} />
        <meshPhysicalMaterial
          ref={mat1}
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.14}
          metalness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[tube, 16, 16]} />
        <meshPhysicalMaterial
          ref={mat2}
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.14}
          metalness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh position={[endX, endY, 0]}>
        <sphereGeometry args={[tube, 16, 16]} />
        <meshPhysicalMaterial
          ref={mat3}
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.14}
          metalness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

function HighLevelConnectivitySculpture() {
  const coreSpinRef = useRef<THREE.Group>(null);
  const ringARef = useRef<THREE.Mesh>(null);
  const ringBRef = useRef<THREE.Mesh>(null);
  const packetRefs = useRef<(THREE.Mesh | null)[]>([]);
  const radarRefs = useRef<(THREE.Mesh | null)[]>([]);
  const satelliteRefs = useRef<(THREE.Group | null)[]>([]);

  // 6 Outer Enterprise Connectivity Nodes + 6 Parabolic 3D Optical Fiber Arches to Central Core
  const { nodeCoords, fiberArches, packets } = useMemo(() => {
    const count = 6;
    const radius = 1.92;
    const baseY = -0.92;
    const corePos = new THREE.Vector3(0, -0.18, 0);

    const coords: Array<{ x: number; y: number; z: number; angle: number }> = [];
    const arches: FiberArch[] = [];
    const colors = ["#008FFF", "#06B6D4", "#0284C7", "#0FA4E8", "#008FFF", "#06B6D4"];

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.PI / 6;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      coords.push({ x, y: baseY, z, angle });

      const start = new THREE.Vector3(x, baseY + 0.16, z);
      const mid1 = new THREE.Vector3(x * 0.68, baseY + 0.85, z * 0.68);
      const mid2 = new THREE.Vector3(x * 0.3, 0.35, z * 0.3);

      const curve = new THREE.CatmullRomCurve3([start, mid1, mid2, corePos]);
      const geometry = new THREE.TubeGeometry(curve, 52, 0.024, 10, false);

      arches.push({
        curve,
        geometry,
        color: colors[i],
        speed: 0.42 + (i % 3) * 0.1,
        offset: i * 0.17,
      });
    }

    // 2 bidirectional laser packets per fiber arch (12 total)
    const pkts: Array<{ archIdx: number; dir: 1 | -1; offset: number; color: string }> = [];
    arches.forEach((a, idx) => {
      pkts.push({ archIdx: idx, dir: 1, offset: a.offset, color: "#008FFF" });
      pkts.push({ archIdx: idx, dir: -1, offset: (a.offset + 0.5) % 1, color: "#22D3EE" });
    });

    return { nodeCoords: coords, fiberArches: arches, packets: pkts };
  }, []);

  const tempPos = useMemo(() => new THREE.Vector3(), []);
  const tempTan = useMemo(() => new THREE.Vector3(), []);
  const upVec = useMemo(() => new THREE.Vector3(0, 1, 0), []);
  const tempQuat = useMemo(() => new THREE.Quaternion(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (coreSpinRef.current) {
      coreSpinRef.current.rotation.y += delta * 0.42;
      coreSpinRef.current.rotation.x = Math.sin(t * 0.5) * 0.14;
    }

    if (ringARef.current) {
      ringARef.current.rotation.z += delta * 0.55;
      ringARef.current.rotation.x = Math.PI / 2.6 + Math.sin(t * 0.45) * 0.12;
    }
    if (ringBRef.current) {
      ringBRef.current.rotation.z -= delta * 0.44;
      ringBRef.current.rotation.x = -Math.PI / 2.9 + Math.cos(t * 0.4) * 0.12;
    }

    // Orbiting 3D signal satellites around the optical core
    satelliteRefs.current.forEach((sat, idx) => {
      if (!sat) return;
      const orbitR = 1.28 + idx * 0.18;
      const speed = idx === 0 ? 0.85 : -0.68;
      const a = t * speed + idx * Math.PI;
      sat.position.set(
        Math.cos(a) * orbitR,
        -0.15 + Math.sin(a * 2) * 0.28,
        Math.sin(a) * orbitR
      );
    });

    // High-speed 3D laser capsules racing along the 6 optical fiber arches
    packets.forEach((pkt, i) => {
      const mesh = packetRefs.current[i];
      if (!mesh) return;
      const arch = fiberArches[pkt.archIdx];
      let u = (pkt.offset + t * arch.speed * pkt.dir) % 1;
      if (u < 0) u += 1;

      arch.curve.getPointAt(u, tempPos);
      arch.curve.getTangentAt(u, tempTan).normalize();
      if (pkt.dir === -1) tempTan.negate();

      mesh.position.copy(tempPos);
      tempQuat.setFromUnitVectors(upVec, tempTan);
      mesh.quaternion.copy(tempQuat);

      const fade = Math.sin(u * Math.PI);
      mesh.scale.setScalar(0.65 + fade * 0.55);
    });

    // Expanding 3D holographic radar ripples on the glass base platform
    radarRefs.current.forEach((ring, idx) => {
      if (!ring) return;
      const cycle = (t * 0.36 + idx * 0.333) % 1;
      const s = 0.35 + cycle * 2.15;
      ring.scale.set(s, s, 1);
      const mat = ring.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.sin(cycle * Math.PI) * 0.48;
    });
  });

  const wifiArcs = [
    { r: 0.42, tube: 0.052, color: "#008FFF" },
    { r: 0.68, tube: 0.048, color: "#0FA4E8" },
    { r: 0.94, tube: 0.044, color: "#06B6D4" },
    { r: 1.2, tube: 0.038, color: "#38BDF8" },
  ];

  return (
    <Float speed={1.6} rotationIntensity={0.12} floatIntensity={0.32}>
      <group position={[0, -0.05, 0]}>
        {/* 1. Sleek 3D Frosted-Glass Base Pedestal Platform */}
        <group position={[0, -1.08, 0]}>
          <mesh>
            <cylinderGeometry args={[2.18, 2.3, 0.14, 64]} />
            <meshPhysicalMaterial
              color="#F0F9FF"
              roughness={0.12}
              metalness={0.12}
              clearcoat={1}
              clearcoatRoughness={0.08}
              transparent
              opacity={0.88}
            />
          </mesh>

          {/* Glowing Sapphire Rim Around Pedestal */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
            <torusGeometry args={[2.18, 0.022, 16, 80]} />
            <meshStandardMaterial
              color="#008FFF"
              emissive="#008FFF"
              emissiveIntensity={0.85}
              roughness={0.2}
              metalness={0.4}
            />
          </mesh>

          {/* Inner Precision Tech Track Ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.075, 0]}>
            <torusGeometry args={[1.38, 0.012, 12, 64]} />
            <meshBasicMaterial color="#06B6D4" transparent opacity={0.45} />
          </mesh>

          {/* Expanding 3D Holographic Signal Radar Ripples */}
          {[0, 1, 2].map((idx) => (
            <mesh
              key={`radar-${idx}`}
              ref={(el) => {
                radarRefs.current[idx] = el;
              }}
              rotation={[Math.PI / 2, 0, 0]}
              position={[0, 0.09, 0]}
            >
              <torusGeometry args={[1.0, 0.014, 12, 64]} />
              <meshBasicMaterial
                color={idx % 2 === 0 ? "#008FFF" : "#06B6D4"}
                transparent
                opacity={0.4}
                depthWrite={false}
              />
            </mesh>
          ))}
        </group>

        {/* 2. Central 3D Optical Core Globe & Metallic Gyro Rings */}
        <group position={[0, -0.18, 0]}>
          {/* Inner Glowing Photonic Core */}
          <group ref={coreSpinRef}>
            <mesh>
              <icosahedronGeometry args={[0.46, 1]} />
              <meshStandardMaterial
                color="#008FFF"
                emissive="#008FFF"
                emissiveIntensity={0.95}
                roughness={0.18}
                metalness={0.35}
              />
            </mesh>
            <mesh>
              <icosahedronGeometry args={[0.64, 1]} />
              <meshBasicMaterial
                color="#38BDF8"
                wireframe
                transparent
                opacity={0.42}
              />
            </mesh>
          </group>

          {/* Glossy Clearcoat Crystal Glass Outer Shell */}
          <mesh>
            <sphereGeometry args={[0.72, 48, 48]} />
            <meshPhysicalMaterial
              color="#E0F2FE"
              roughness={0.06}
              metalness={0.08}
              clearcoat={1}
              clearcoatRoughness={0.05}
              transparent
              opacity={0.36}
            />
          </mesh>

          {/* Dual Precision Metallic-Cyan Orbital Connectivity Rings */}
          <mesh ref={ringARef}>
            <torusGeometry args={[1.06, 0.024, 16, 72]} />
            <meshPhysicalMaterial
              color="#008FFF"
              emissive="#008FFF"
              emissiveIntensity={0.45}
              roughness={0.15}
              metalness={0.55}
              clearcoat={1}
            />
          </mesh>

          <mesh ref={ringBRef}>
            <torusGeometry args={[1.22, 0.018, 16, 72]} />
            <meshPhysicalMaterial
              color="#06B6D4"
              emissive="#06B6D4"
              emissiveIntensity={0.4}
              roughness={0.15}
              metalness={0.55}
              clearcoat={1}
            />
          </mesh>
        </group>

        {/* Orbiting 3D Signal Relay Satellites */}
        {[0, 1].map((idx) => (
          <group
            key={`sat-${idx}`}
            ref={(el) => {
              satelliteRefs.current[idx] = el;
            }}
          >
            <mesh>
              <sphereGeometry args={[0.085, 20, 20]} />
              <meshPhysicalMaterial
                color={idx === 0 ? "#008FFF" : "#06B6D4"}
                emissive={idx === 0 ? "#008FFF" : "#06B6D4"}
                emissiveIntensity={0.9}
                roughness={0.12}
                metalness={0.3}
                clearcoat={1}
              />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.14, 16, 16]} />
              <meshBasicMaterial
                color="#38BDF8"
                transparent
                opacity={0.25}
                depthWrite={false}
              />
            </mesh>
          </group>
        ))}

        {/* 3. Sculpted 3D Volumetric WiFi Signal Beacon Crowning the Core */}
        <group position={[0, 0.62, 0]}>
          {/* Glowing 3D WiFi Emitter Orb */}
          <mesh>
            <sphereGeometry args={[0.13, 24, 24]} />
            <meshPhysicalMaterial
              color="#008FFF"
              emissive="#008FFF"
              emissiveIntensity={1.1}
              roughness={0.12}
              metalness={0.25}
              clearcoat={1}
            />
          </mesh>

          {/* Front-Facing Sculpted 3D WiFi Arcs */}
          {wifiArcs.map((w, idx) => (
            <Wifi3DBeaconArc
              key={`wifi-front-${idx}`}
              radius={w.r}
              tube={w.tube}
              arcAngle={Math.PI * 0.56}
              waveIndex={idx}
              color={w.color}
              rotY={0}
            />
          ))}

          {/* Cross-Axis Volumetric 3D WiFi Arcs (Visible as 3D Beacon Rotates!) */}
          {wifiArcs.slice(0, 3).map((w, idx) => (
            <Wifi3DBeaconArc
              key={`wifi-cross-${idx}`}
              radius={w.r}
              tube={w.tube * 0.72}
              arcAngle={Math.PI * 0.52}
              waveIndex={idx + 0.35}
              color={w.color}
              rotY={Math.PI / 2}
            />
          ))}
        </group>

        {/* 4. Six 3D Enterprise Connectivity Nodes Around the Base */}
        {nodeCoords.map((n, idx) => (
          <group key={`node-${idx}`} position={[n.x, n.y, n.z]}>
            {/* Glossy Metallic-White Server / City Hub Tower */}
            <mesh position={[0, 0.06, 0]}>
              <cylinderGeometry args={[0.14, 0.17, 0.26, 6]} />
              <meshPhysicalMaterial
                color="#FFFFFF"
                roughness={0.16}
                metalness={0.28}
                clearcoat={1}
              />
            </mesh>
            {/* Glowing Optical Port Cap */}
            <mesh position={[0, 0.21, 0]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshStandardMaterial
                color={idx % 2 === 0 ? "#008FFF" : "#06B6D4"}
                emissive={idx % 2 === 0 ? "#008FFF" : "#06B6D4"}
                emissiveIntensity={1.1}
              />
            </mesh>
          </group>
        ))}

        {/* 5. Six Sweeping 3D Optical Fiber Highway Arches */}
        {fiberArches.map((arch, idx) => (
          <mesh key={`arch-${idx}`} geometry={arch.geometry}>
            <meshPhysicalMaterial
              color={arch.color}
              emissive={arch.color}
              emissiveIntensity={0.35}
              roughness={0.15}
              metalness={0.2}
              clearcoat={1}
              transparent
              opacity={0.72}
            />
          </mesh>
        ))}

        {/* 6. High-Speed Glowing 3D Optical Laser Data Capsules */}
        {packets.map((pkt, i) => (
          <mesh
            key={`pkt-${i}`}
            ref={(el) => {
              packetRefs.current[i] = el;
            }}
          >
            <capsuleGeometry args={[0.038, 0.16, 6, 12]} />
            <meshStandardMaterial
              color="#FFFFFF"
              emissive={pkt.color}
              emissiveIntensity={1.6}
              roughness={0.1}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function Hero3DConnectivityShowcase() {
  return (
    <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px] select-none">
      {/* Subtle Ambient Halo Behind 3D Stage */}
      <div className="pointer-events-none absolute inset-6 rounded-full bg-gradient-to-tr from-[#008FFF]/18 via-[#06B6D4]/12 to-transparent blur-3xl" />

      {/* Live Interactive 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 1.35, 6.2], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 6]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-6, 3, -4]} intensity={0.9} color="#38BDF8" />
        <pointLight position={[0, 1.2, 0]} intensity={1.6} color="#008FFF" distance={6} />

        {/* Procedural Studio Environment for Crisp Glass & Chrome Reflections (Zero External Fetch) */}
        <Environment resolution={256}>
          <Lightformer
            form="ring"
            intensity={2.2}
            position={[0, 6, 2]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={8}
            color="#ffffff"
          />
          <Lightformer
            form="rect"
            intensity={1.8}
            position={[-6, 2, 4]}
            rotation={[0, Math.PI / 3, 0]}
            scale={[6, 3, 1]}
            color="#BAE6FD"
          />
          <Lightformer
            form="rect"
            intensity={1.5}
            position={[6, -1, 4]}
            rotation={[0, -Math.PI / 3, 0]}
            scale={[6, 3, 1]}
            color="#008FFF"
          />
        </Environment>

        <HighLevelConnectivitySculpture />

        <ContactShadows
          position={[0, -1.48, 0]}
          opacity={0.32}
          scale={7}
          blur={2.4}
          far={3.5}
          color="#0284C7"
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.95}
          minPolarAngle={Math.PI * 0.28}
          maxPolarAngle={Math.PI * 0.56}
        />
      </Canvas>

      {/* Clean Floating Telemetry HUD Badges */}
      <div className="pointer-events-none absolute top-3 right-2 sm:right-4 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#008FFF]/30 shadow-[0_10px_28px_rgba(0,143,255,0.16)] rounded-full px-3.5 py-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008FFF]" />
        </span>
        <span className="text-[11px] font-extrabold text-slate-900 tracking-wide">
          100G Optical + WiFi Mesh
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-2 sm:left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-cyan-400/40 shadow-[0_10px_28px_rgba(6,182,212,0.16)] rounded-full px-3.5 py-1.5">
        <span className="w-2 h-2 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]" />
        <span className="text-[11px] font-bold text-slate-800">
          Interactive 3D • Drag to Rotate
        </span>
      </div>
    </div>
  );
}
