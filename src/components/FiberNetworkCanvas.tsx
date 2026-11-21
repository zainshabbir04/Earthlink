"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FiberLink {
  curve: THREE.CatmullRomCurve3;
  speed: number;
  offset: number;
  color: string;
}

function IspConnectivityNetwork() {
  const networkRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const pulseRingRefs = useRef<(THREE.Mesh | null)[]>([]);
  const packetRefs = useRef<(THREE.Mesh | null)[]>([]);
  const packetHaloRefs = useRef<(THREE.Mesh | null)[]>([]);

  // 1. Generate 26 ISP Network Nodes (POPs / Enterprise Hubs) distributed evenly in 3D space
  const { nodePositions, meshLinesGeo, fiberLinks } = useMemo(() => {
    const count = 26;
    const nodes: THREE.Vector3[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const rAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      const radius = 1.48 + (i % 3) * 0.08;
      nodes.push(
        new THREE.Vector3(
          Math.cos(theta) * rAtY * radius,
          y * radius,
          Math.sin(theta) * rAtY * radius
        )
      );
    }

    // Connect nearby POP nodes + hub-to-node optical trunks into a clean ISP connectivity graph
    const lineCoords: number[] = [];
    const links: FiberLink[] = [];
    const origin = new THREE.Vector3(0, 0, 0);

    // Outer mesh connections between neighboring nodes
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 1.28) {
          lineCoords.push(
            nodes[i].x,
            nodes[i].y,
            nodes[i].z,
            nodes[j].x,
            nodes[j].y,
            nodes[j].z
          );

          // Select well-spaced links for animated optical data packets
          if ((i + j) % 3 === 0 && links.length < 14) {
            const mid = nodes[i]
              .clone()
              .add(nodes[j])
              .multiplyScalar(0.5)
              .normalize()
              .multiplyScalar(1.66);
            links.push({
              curve: new THREE.CatmullRomCurve3([nodes[i], mid, nodes[j]]),
              speed: 0.32 + (links.length % 4) * 0.07,
              offset: (links.length * 0.19) % 1,
              color: links.length % 2 === 0 ? "#008FFF" : "#06B6D4",
            });
          }
        }
      }
    }

    // Radial optical backbone trunks radiating from the central EARTHLINK core to key outer POP nodes
    for (let i = 0; i < count; i += 3) {
      lineCoords.push(0, 0, 0, nodes[i].x, nodes[i].y, nodes[i].z);
      const mid = nodes[i].clone().multiplyScalar(0.52);
      mid.y += (i % 2 === 0 ? 1 : -1) * 0.16;
      links.push({
        curve: new THREE.CatmullRomCurve3([origin, mid, nodes[i]]),
        speed: 0.36 + (i % 3) * 0.08,
        offset: (i * 0.13) % 1,
        color: "#008FFF",
      });
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(lineCoords, 3)
    );

    return {
      nodePositions: nodes,
      meshLinesGeo: linesGeometry,
      fiberLinks: links,
    };
  }, []);

  const tempPos = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    // Smooth 3D rotation + subtle interactive pointer parallax
    if (networkRef.current) {
      networkRef.current.rotation.y += delta * 0.18;
      const targetX = Math.sin(t * 0.35) * 0.12 + state.pointer.y * 0.14;
      networkRef.current.rotation.x = THREE.MathUtils.lerp(
        networkRef.current.rotation.x,
        targetX,
        0.04
      );
    }

    // Counter-rotating 100G optical backbone orbital rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.25;
      ring1Ref.current.rotation.x = Math.PI / 2.8 + Math.sin(t * 0.4) * 0.08;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.2;
      ring2Ref.current.rotation.y = Math.cos(t * 0.35) * 0.2;
      ring2Ref.current.rotation.x = -Math.PI / 3.1;
    }

    // Expanding ISP wireless/optical connectivity signal ripples from center
    pulseRingRefs.current.forEach((ring, idx) => {
      if (!ring) return;
      const cycle = (t * 0.34 + idx * 0.5) % 1;
      const scale = 0.52 + cycle * 1.18;
      ring.scale.set(scale, scale, 1);
      const mat = ring.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.sin(cycle * Math.PI) * 0.34;
    });

    // High-speed data packets zipping along optical fiber links
    fiberLinks.forEach((link, i) => {
      const u = (link.offset + t * link.speed) % 1;
      link.curve.getPointAt(u, tempPos);
      const fade = Math.sin(u * Math.PI);

      const core = packetRefs.current[i];
      if (core) {
        core.position.copy(tempPos);
        core.scale.setScalar(0.75 + fade * 0.45);
      }
      const halo = packetHaloRefs.current[i];
      if (halo) {
        halo.position.copy(tempPos);
        halo.scale.setScalar(0.9 + fade * 0.75);
        const mat = halo.material as THREE.MeshBasicMaterial;
        mat.opacity = fade * 0.35;
      }
    });
  });

  return (
    <group>
      {/* Rotating 3D ISP Connectivity Constellation */}
      <group ref={networkRef}>
        {/* Clean Fiber Mesh & Hub-to-POP Trunk Lines */}
        <lineSegments geometry={meshLinesGeo}>
          <lineBasicMaterial
            color="#0FA4E8"
            transparent
            opacity={0.34}
            depthWrite={false}
          />
        </lineSegments>

        {/* Glossy 3D ISP Network POP Nodes */}
        {nodePositions.map((pos, idx) => (
          <group key={`pop-${idx}`} position={[pos.x, pos.y, pos.z]}>
            <mesh>
              <sphereGeometry args={[idx % 3 === 0 ? 0.062 : 0.044, 14, 14]} />
              <meshStandardMaterial
                color={idx % 2 === 0 ? "#008FFF" : "#06B6D4"}
                emissive={idx % 2 === 0 ? "#008FFF" : "#06B6D4"}
                emissiveIntensity={0.45}
                roughness={0.2}
                metalness={0.15}
              />
            </mesh>
            {idx % 3 === 0 && (
              <mesh>
                <sphereGeometry args={[0.105, 12, 12]} />
                <meshBasicMaterial
                  color="#38BDF8"
                  transparent
                  opacity={0.22}
                  depthWrite={false}
                />
              </mesh>
            )}
          </group>
        ))}

        {/* Live Optical Data Packets Racing Between ISP Nodes */}
        {fiberLinks.map((link, i) => (
          <group key={`pkt-${i}`}>
            <mesh
              ref={(el) => {
                packetRefs.current[i] = el;
              }}
            >
              <sphereGeometry args={[0.046, 10, 10]} />
              <meshBasicMaterial color={link.color} />
            </mesh>
            <mesh
              ref={(el) => {
                packetHaloRefs.current[i] = el;
              }}
            >
              <sphereGeometry args={[0.1, 10, 10]} />
              <meshBasicMaterial
                color="#38BDF8"
                transparent
                opacity={0.3}
                depthWrite={false}
              />
            </mesh>
          </group>
        ))}

        {/* Sleek 3D 100G Backbone Orbital Rings */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[1.64, 0.016, 14, 72]} />
          <meshStandardMaterial
            color="#008FFF"
            emissive="#008FFF"
            emissiveIntensity={0.35}
            transparent
            opacity={0.5}
            depthWrite={false}
          />
        </mesh>

        <mesh ref={ring2Ref}>
          <torusGeometry args={[1.52, 0.013, 14, 72]} />
          <meshStandardMaterial
            color="#06B6D4"
            emissive="#06B6D4"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Expanding Front-Facing ISP Signal Connectivity Pulses */}
      {[0, 1].map((idx) => (
        <mesh
          key={`isp-pulse-${idx}`}
          ref={(el) => {
            pulseRingRefs.current[idx] = el;
          }}
          position={[0, 0, -0.25]}
        >
          <torusGeometry args={[1.0, 0.015, 12, 64]} />
          <meshBasicMaterial
            color={idx === 0 ? "#008FFF" : "#06B6D4"}
            transparent
            opacity={0.28}
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
        <directionalLight position={[4, 5, 6]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-4, -4, 3]} intensity={0.6} color="#38BDF8" />
        <IspConnectivityNetwork />
      </Canvas>
    </div>
  );
}
