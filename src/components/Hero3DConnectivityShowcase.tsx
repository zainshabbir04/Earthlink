"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
  Billboard,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

interface BuildingConfig {
  x: number;
  z: number;
  angle: number;
  width: number;
  depth: number;
  height: number;
  hasSpire: boolean;
  accent: string;
}

interface FiberArch {
  curve: THREE.CatmullRomCurve3;
  geometry: THREE.TubeGeometry;
  color: string;
  speed: number;
  offset: number;
}

function CenterEarthlinkLogo3D() {
  const logoTex = useTexture("/logo-color.png");

  return (
    <Billboard follow lockX={false} lockY={false} lockZ={false}>
      <group>
        {/* Outer Glowing Cyan Metallic Ring Bezel */}
        <mesh>
          <torusGeometry args={[0.68, 0.042, 20, 64]} />
          <meshPhysicalMaterial
            color="#008FFF"
            emissive="#008FFF"
            emissiveIntensity={0.75}
            roughness={0.14}
            metalness={0.45}
            clearcoat={1}
          />
        </mesh>

        {/* Glossy White Crystal Medallion Backing */}
        <mesh position={[0, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.66, 0.66, 0.05, 48]} />
          <meshPhysicalMaterial
            color="#FFFFFF"
            roughness={0.12}
            metalness={0.08}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>

        {/* Crisp Official EARTHLINK Logo Plane (Correct 560:306 Aspect Ratio) */}
        <mesh position={[0, 0, 0.032]}>
          <planeGeometry args={[1.04, 0.568]} />
          <meshBasicMaterial map={logoTex} transparent toneMapped={false} />
        </mesh>
      </group>
    </Billboard>
  );
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
    const raw = Math.sin(t * 3.2 - waveIndex * 0.78) * 0.5 + 0.5;
    const pulse = Math.pow(raw, 1.5);
    const emissive = 0.25 + pulse * 1.15;
    const opacity = 0.4 + pulse * 0.6;

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
        <torusGeometry args={[radius, tube, 18, 48, arcAngle]} />
        <meshPhysicalMaterial
          ref={mat1}
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.14}
          metalness={0.2}
          clearcoat={1}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[tube, 14, 14]} />
        <meshPhysicalMaterial
          ref={mat2}
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.14}
          metalness={0.2}
          clearcoat={1}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh position={[endX, endY, 0]}>
        <sphereGeometry args={[tube, 14, 14]} />
        <meshPhysicalMaterial
          ref={mat3}
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.14}
          metalness={0.2}
          clearcoat={1}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

function EnterpriseBuilding3D({
  cfg,
  baseY,
}: {
  cfg: BuildingConfig;
  baseY: number;
}) {
  const floorCount = Math.max(3, Math.round(cfg.height * 5.2));
  const topY = baseY + cfg.height;

  return (
    <group position={[cfg.x, 0, cfg.z]} rotation={[0, -cfg.angle, 0]}>
      {/* Main Architectural Tower Body */}
      <mesh position={[0, baseY + cfg.height / 2, 0]}>
        <boxGeometry args={[cfg.width, cfg.height, cfg.depth]} />
        <meshPhysicalMaterial
          color="#F8FAFC"
          roughness={0.18}
          metalness={0.22}
          clearcoat={0.9}
        />
      </mesh>

      {/* Glowing Cyan Glass Window Strips Wrapping Each Floor */}
      {Array.from({ length: floorCount }, (_, fIdx) => {
        const fy = baseY + 0.1 + (fIdx / floorCount) * (cfg.height - 0.18);
        return (
          <mesh key={fIdx} position={[0, fy, 0]}>
            <boxGeometry args={[cfg.width + 0.012, 0.036, cfg.depth + 0.012]} />
            <meshStandardMaterial
              color={cfg.accent}
              emissive={cfg.accent}
              emissiveIntensity={0.75}
              roughness={0.15}
            />
          </mesh>
        );
      })}

      {/* Stepped Modern Rooftop Crown */}
      <mesh position={[0, topY + 0.045, 0]}>
        <boxGeometry args={[cfg.width * 0.68, 0.09, cfg.depth * 0.68]} />
        <meshPhysicalMaterial
          color="#E0F2FE"
          roughness={0.15}
          metalness={0.35}
          clearcoat={1}
        />
      </mesh>

      {/* Rooftop Telecom Antenna Spire */}
      {cfg.hasSpire && (
        <mesh position={[0, topY + 0.16, 0]}>
          <cylinderGeometry args={[0.01, 0.018, 0.16, 8]} />
          <meshStandardMaterial color="#0284C7" metalness={0.6} roughness={0.2} />
        </mesh>
      )}

      {/* Glowing Rooftop Optical Splice Port (Fiber Wire Origin) */}
      <mesh position={[0, topY + (cfg.hasSpire ? 0.24 : 0.12), 0]}>
        <sphereGeometry args={[0.055, 14, 14]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive={cfg.accent}
          emissiveIntensity={1.8}
        />
      </mesh>
    </group>
  );
}

const LIGHTNING_SEGMENTS = 20;

function BuildingsFiberLightningScene() {
  const ringARef = useRef<THREE.Mesh>(null);
  const ringBRef = useRef<THREE.Mesh>(null);
  const packetRefs = useRef<(THREE.Mesh | null)[]>([]);
  const radarRefs = useRef<(THREE.Mesh | null)[]>([]);
  const lastLightningUpdate = useRef(0);

  const baseY = -1.16;
  const centerCore = useMemo(() => new THREE.Vector3(0, -0.05, 0), []);

  // 1. Six Detailed 3D Enterprise Buildings + Optical Fiber Arches + Electric Lightning Lines
  const { buildings, fiberArches, lightningLines, packets } = useMemo(() => {
    const specs = [
      { w: 0.34, d: 0.34, h: 0.78, spire: true, accent: "#008FFF" },
      { w: 0.3, d: 0.3, h: 0.58, spire: false, accent: "#06B6D4" },
      { w: 0.36, d: 0.32, h: 0.88, spire: true, accent: "#0284C7" },
      { w: 0.32, d: 0.32, h: 0.64, spire: false, accent: "#0FA4E8" },
      { w: 0.35, d: 0.35, h: 0.82, spire: true, accent: "#008FFF" },
      { w: 0.28, d: 0.3, h: 0.56, spire: false, accent: "#06B6D4" },
    ];

    const ringRadius = 1.98;
    const bList: BuildingConfig[] = [];
    const arches: FiberArch[] = [];
    const lLines: THREE.Line[] = [];

    specs.forEach((sp, i) => {
      const angle = (i / specs.length) * Math.PI * 2 + Math.PI / 6;
      const x = Math.cos(angle) * ringRadius;
      const z = Math.sin(angle) * ringRadius;

      bList.push({
        x,
        z,
        angle,
        width: sp.w,
        depth: sp.d,
        height: sp.h,
        hasSpire: sp.spire,
        accent: sp.accent,
      });

      const roofPortY = baseY + sp.h + (sp.spire ? 0.24 : 0.12);
      const start = new THREE.Vector3(x, roofPortY, z);
      const mid1 = new THREE.Vector3(x * 0.68, roofPortY + 0.55, z * 0.68);
      const mid2 = new THREE.Vector3(x * 0.32, 0.32, z * 0.32);

      const curve = new THREE.CatmullRomCurve3([start, mid1, mid2, centerCore]);
      const geometry = new THREE.TubeGeometry(curve, 48, 0.02, 10, false);

      arches.push({
        curve,
        geometry,
        color: sp.accent,
        speed: 0.45 + (i % 3) * 0.1,
        offset: i * 0.17,
      });

      // Live Electric Lightning Wire BufferGeometry along each building-to-logo arch
      const positions = new Float32Array((LIGHTNING_SEGMENTS + 1) * 3);
      const lGeo = new THREE.BufferGeometry();
      lGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const lMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? "#38BDF8" : "#00E5FF",
        transparent: true,
        opacity: 0.92,
      });
      lLines.push(new THREE.Line(lGeo, lMat));
    });

    const pkts: Array<{ archIdx: number; dir: 1 | -1; offset: number; color: string }> = [];
    arches.forEach((a, idx) => {
      pkts.push({ archIdx: idx, dir: 1, offset: a.offset, color: "#008FFF" });
      pkts.push({ archIdx: idx, dir: -1, offset: (a.offset + 0.5) % 1, color: "#22D3EE" });
    });

    return {
      buildings: bList,
      fiberArches: arches,
      lightningLines: lLines,
      packets: pkts,
    };
  }, [baseY, centerCore]);

  const tempPos = useMemo(() => new THREE.Vector3(), []);
  const tempTan = useMemo(() => new THREE.Vector3(), []);
  const upVec = useMemo(() => new THREE.Vector3(0, 1, 0), []);
  const tempQuat = useMemo(() => new THREE.Quaternion(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (ringARef.current) {
      ringARef.current.rotation.z += delta * 0.48;
      ringARef.current.rotation.x = Math.PI / 2.6 + Math.sin(t * 0.45) * 0.12;
    }
    if (ringBRef.current) {
      ringBRef.current.rotation.z -= delta * 0.38;
      ringBRef.current.rotation.x = -Math.PI / 2.9 + Math.cos(t * 0.4) * 0.12;
    }

    // Update crackling electric lightning bolts along every fiber wire (~16 times/sec for crisp electric feel)
    if (t - lastLightningUpdate.current > 0.062) {
      lastLightningUpdate.current = t;
      lightningLines.forEach((line, idx) => {
        const arch = fiberArches[idx];
        const posAttr = line.geometry.getAttribute("position") as THREE.BufferAttribute;
        const arr = posAttr.array as Float32Array;
        const mat = line.material as THREE.LineBasicMaterial;
        // Flicker electric intensity per wire
        mat.opacity = 0.55 + Math.random() * 0.45;

        for (let s = 0; s <= LIGHTNING_SEGMENTS; s++) {
          const u = s / LIGHTNING_SEGMENTS;
          arch.curve.getPointAt(u, tempPos);
          // Zero jitter at exact endpoints, electric crackle in middle
          const env = Math.sin(u * Math.PI);
          const jitter = 0.095 * env;
          arr[s * 3] = tempPos.x + (Math.random() - 0.5) * jitter;
          arr[s * 3 + 1] = tempPos.y + (Math.random() - 0.5) * jitter;
          arr[s * 3 + 2] = tempPos.z + (Math.random() - 0.5) * jitter;
        }
        posAttr.needsUpdate = true;
      });
    }

    // High-speed 3D laser capsules racing between buildings and the EARTHLINK logo
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

    // Expanding 3D holographic radar ripples on the glass city base
    radarRefs.current.forEach((ring, idx) => {
      if (!ring) return;
      const cycle = (t * 0.36 + idx * 0.333) % 1;
      const s = 0.35 + cycle * 2.25;
      ring.scale.set(s, s, 1);
      const mat = ring.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.sin(cycle * Math.PI) * 0.45;
    });
  });

  const wifiArcs = [
    { r: 0.36, tube: 0.044, color: "#008FFF" },
    { r: 0.58, tube: 0.04, color: "#0FA4E8" },
    { r: 0.8, tube: 0.036, color: "#06B6D4" },
  ];

  return (
    <Float speed={1.3} rotationIntensity={0.08} floatIntensity={0.22}>
      <group position={[0, -0.05, 0]}>
        {/* 1. Floating 3D Frosted-Glass City Platform */}
        <group position={[0, baseY - 0.07, 0]}>
          <mesh>
            <cylinderGeometry args={[2.32, 2.44, 0.14, 64]} />
            <meshPhysicalMaterial
              color="#F0F9FF"
              roughness={0.12}
              metalness={0.12}
              clearcoat={1}
              transparent
              opacity={0.9}
            />
          </mesh>

          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
            <torusGeometry args={[2.32, 0.022, 16, 80]} />
            <meshStandardMaterial
              color="#008FFF"
              emissive="#008FFF"
              emissiveIntensity={0.85}
              roughness={0.2}
              metalness={0.4}
            />
          </mesh>

          {[0, 1, 2].map((idx) => (
            <mesh
              key={`radar-${idx}`}
              ref={(el) => {
                radarRefs.current[idx] = el;
              }}
              rotation={[Math.PI / 2, 0, 0]}
              position={[0, 0.085, 0]}
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

        {/* 2. Six Detailed 3D Enterprise Buildings Around the Platform */}
        {buildings.map((cfg, idx) => (
          <EnterpriseBuilding3D key={`bldg-${idx}`} cfg={cfg} baseY={baseY} />
        ))}

        {/* 3. Center Official EARTHLINK Logo Medallion + Dual Orbital Rings */}
        <group position={[0, -0.05, 0]}>
          <Suspense fallback={null}>
            <CenterEarthlinkLogo3D />
          </Suspense>

          <mesh ref={ringARef}>
            <torusGeometry args={[0.98, 0.018, 16, 72]} />
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
            <torusGeometry args={[1.14, 0.014, 16, 72]} />
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

        {/* 4. Sculpted 3D Volumetric WiFi Signal Beacon Above the EARTHLINK Logo */}
        <group position={[0, 0.82, 0]}>
          <mesh>
            <sphereGeometry args={[0.1, 20, 20]} />
            <meshPhysicalMaterial
              color="#008FFF"
              emissive="#008FFF"
              emissiveIntensity={1.1}
              roughness={0.12}
              clearcoat={1}
            />
          </mesh>
          {wifiArcs.map((w, idx) => (
            <Wifi3DBeaconArc
              key={`wifi-f-${idx}`}
              radius={w.r}
              tube={w.tube}
              arcAngle={Math.PI * 0.56}
              waveIndex={idx}
              color={w.color}
              rotY={0}
            />
          ))}
          {wifiArcs.map((w, idx) => (
            <Wifi3DBeaconArc
              key={`wifi-c-${idx}`}
              radius={w.r}
              tube={w.tube * 0.72}
              arcAngle={Math.PI * 0.52}
              waveIndex={idx + 0.35}
              color={w.color}
              rotY={Math.PI / 2}
            />
          ))}
        </group>

        {/* 5. Sweeping 3D Optical Fiber Arches + Crackling Electric Lightning Wires */}
        {fiberArches.map((arch, idx) => (
          <group key={`wire-grp-${idx}`}>
            <mesh geometry={arch.geometry}>
              <meshPhysicalMaterial
                color={arch.color}
                emissive={arch.color}
                emissiveIntensity={0.45}
                roughness={0.15}
                metalness={0.2}
                clearcoat={1}
                transparent
                opacity={0.68}
              />
            </mesh>
            <primitive object={lightningLines[idx]} />
          </group>
        ))}

        {/* 6. High-Speed Glowing Laser Capsules Racing Along Every Building Wire */}
        {packets.map((pkt, i) => (
          <mesh
            key={`pkt-${i}`}
            ref={(el) => {
              packetRefs.current[i] = el;
            }}
          >
            <capsuleGeometry args={[0.036, 0.15, 6, 12]} />
            <meshStandardMaterial
              color="#FFFFFF"
              emissive={pkt.color}
              emissiveIntensity={1.7}
              roughness={0.1}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

const ORBIT_HEADINGS = [
  {
    label: "Dedicated Internet (1:1 DIA)",
    top: "4%",
    left: "50%",
    dotColor: "bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]",
  },
  {
    label: "Cloud & Managed IT",
    top: "36%",
    left: "95%",
    dotColor: "bg-[#008FFF] shadow-[0_0_8px_#008FFF]",
  },
  {
    label: "Cybersecurity & 24/7 NOC",
    top: "86%",
    left: "78%",
    dotColor: "bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]",
  },
  {
    label: "Point-to-Point Optical (<1ms)",
    top: "86%",
    left: "22%",
    dotColor: "bg-[#008FFF] shadow-[0_0_8px_#008FFF]",
  },
  {
    label: "MPLS & Multi-Branch VPN",
    top: "36%",
    left: "5%",
    dotColor: "bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]",
  },
];

export default function Hero3DConnectivityShowcase() {
  return (
    <div className="relative w-full h-[430px] sm:h-[480px] lg:h-[520px] flex items-center justify-center select-none">
      {/* Soft Studio Glow Behind the 3D City & Fiber Hub */}
      <div className="pointer-events-none absolute inset-6 rounded-full bg-gradient-to-tr from-[#008FFF]/18 via-[#06B6D4]/12 to-transparent blur-3xl" />

      {/* Live Interactive 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 1.45, 6.5], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[5, 8, 6]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-6, 3, -4]} intensity={0.9} color="#38BDF8" />
        <pointLight position={[0, 1.1, 0]} intensity={1.6} color="#008FFF" distance={6} />

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

        <BuildingsFiberLightningScene />

        <ContactShadows
          position={[0, -1.52, 0]}
          opacity={0.32}
          scale={7.2}
          blur={2.4}
          far={3.5}
          color="#0284C7"
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.85}
          minPolarAngle={Math.PI * 0.28}
          maxPolarAngle={Math.PI * 0.56}
        />
      </Canvas>

      {/* 5 Service Headings Revolving Smoothly in a 360° Circle Around the 3D Scene */}
      <div className="pointer-events-none absolute w-[300px] sm:w-[390px] xl:w-[430px] h-[300px] sm:h-[390px] xl:h-[430px] rounded-full animate-[spin_26s_linear_infinite] z-20">
        {ORBIT_HEADINGS.map((item) => (
          <div
            key={item.label}
            style={{ top: item.top, left: item.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className="animate-[spin_26s_linear_infinite_reverse] bg-white/95 backdrop-blur-md border border-[#008FFF]/45 shadow-[0_8px_24px_rgba(0,143,255,0.2)] text-[10px] sm:text-[11.5px] xl:text-[12.5px] px-3 py-1.5 rounded-full whitespace-nowrap">
              <span className="flex items-center gap-1.5 text-slate-900 font-bold">
                <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
