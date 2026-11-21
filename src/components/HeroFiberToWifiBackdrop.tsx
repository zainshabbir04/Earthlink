"use client";

import React, { useEffect, useRef } from "react";

interface HeroFiberToWifiBackdropProps {
  sectionRef: React.RefObject<HTMLElement>;
  textRef: React.RefObject<HTMLDivElement>;
  logoRef: React.RefObject<HTMLDivElement>;
}

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

interface Random3DFiber {
  p0: Vec3;
  p1: Vec3;
  p2: Vec3;
  p3: Vec3;
  color: string;
  highlight: string;
  baseWidth: number;
  delay: number;
  speed: number;
  wobblePhase: number;
}

interface Wifi3DParticle {
  vx: number;
  vy: number;
  vz: number;
  x: number;
  y: number;
  z: number;
  age: number;
  life: number;
  baseSize: number;
  color: string;
  tiltX: number;
  tiltY: number;
}

function cubicBezier3D(t: number, p0: Vec3, p1: Vec3, p2: Vec3, p3: Vec3): Vec3 {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;
  return {
    x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
    y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
    z: uuu * p0.z + 3 * uu * t * p1.z + 3 * u * tt * p2.z + ttt * p3.z,
  };
}

function draw3DWifiLogo(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  alpha: number,
  color: string,
  scaleX: number,
  depthScale: number
) {
  if (alpha <= 0.01) return;
  ctx.save();
  ctx.translate(x, y);
  // Subtle 3D perspective foreshortening
  ctx.scale(scaleX, 1);
  ctx.globalAlpha = alpha;

  const dotY = size * 0.34;
  const arcs = [
    { r: size * 0.34, lw: Math.max(1.8, size * 0.105) },
    { r: size * 0.62, lw: Math.max(1.7, size * 0.1) },
    { r: size * 0.9, lw: Math.max(1.6, size * 0.095) },
  ];

  // 1. 3D Extruded Depth Shadow Layer (gives thick 3D embossed look)
  const depthOffset = Math.max(1.4, size * 0.075 * depthScale);
  ctx.save();
  ctx.translate(depthOffset * 0.6, depthOffset);
  ctx.beginPath();
  ctx.arc(0, dotY, Math.max(2, size * 0.115), 0, Math.PI * 2);
  ctx.fillStyle = "rgba(3, 105, 161, 0.38)";
  ctx.fill();

  ctx.lineCap = "round";
  ctx.strokeStyle = "rgba(3, 105, 161, 0.34)";
  arcs.forEach((arc) => {
    ctx.beginPath();
    ctx.lineWidth = arc.lw;
    ctx.arc(0, dotY, arc.r, -Math.PI * 0.76, -Math.PI * 0.24);
    ctx.stroke();
  });
  ctx.restore();

  // 2. Main Glowing 3D WiFi Face
  ctx.shadowColor = color;
  ctx.shadowBlur = 12 * depthScale;

  ctx.beginPath();
  ctx.arc(0, dotY, Math.max(2, size * 0.115), 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();

  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  arcs.forEach((arc) => {
    ctx.beginPath();
    ctx.lineWidth = arc.lw;
    ctx.arc(0, dotY, arc.r, -Math.PI * 0.76, -Math.PI * 0.24);
    ctx.stroke();
  });

  // 3. Crisp 3D Top Specular Glass Highlight
  ctx.shadowBlur = 0;
  ctx.translate(-0.5, -0.7);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.78)";
  arcs.forEach((arc) => {
    ctx.beginPath();
    ctx.lineWidth = Math.max(0.8, arc.lw * 0.34);
    ctx.arc(0, dotY, arc.r, -Math.PI * 0.73, -Math.PI * 0.27);
    ctx.stroke();
  });

  ctx.beginPath();
  ctx.arc(0, dotY - 0.5, Math.max(1, size * 0.048), 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.fill();

  ctx.restore();
}

export default function HeroFiberToWifiBackdrop({
  sectionRef,
  textRef,
  logoRef,
}: HeroFiberToWifiBackdropProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let width = section.clientWidth;
    let height = section.clientHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Dynamic DOM anchors
    let textCenterX = width * 0.22;
    let textCenterY = height * 0.48;
    let logoX = width * 0.74;
    let logoY = height * 0.5;
    let logoRadius = 90;

    // Smooth mouse 3D camera parallax
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let camX = 0;
    let camY = 0;

    const FOCAL = 620;

    const project = (pt: Vec3) => {
      // Shift relative to logo center so perspective radiates cleanly in 3D
      const dx = pt.x - logoX + camX * (pt.z * 0.0022);
      const dy = pt.y - logoY + camY * (pt.z * 0.0022);
      const scale = FOCAL / Math.max(140, FOCAL + pt.z);
      return {
        x: logoX + dx * scale,
        y: logoY + dy * scale,
        scale,
      };
    };

    const palette = [
      { color: "#008FFF", highlight: "#E0F2FE" },
      { color: "#0FA4E8", highlight: "#BAE6FD" },
      { color: "#06B6D4", highlight: "#CFFAFE" },
      { color: "#0284C7", highlight: "#7DD3FC" },
    ];

    let fibers: Random3DFiber[] = [];

    const generateRandom3DFibers = () => {
      const list: Random3DFiber[] = [];
      const total = 10;

      for (let i = 0; i < total; i++) {
        let sx = 0;
        let sy = 0;
        let sz = (Math.random() - 0.5) * 340; // deep 3D z spread (-170 foreground to +170 background)

        if (i < 4) {
          // 4 fiber cables always originate from behind the Hero Text background (randomized spread)
          sx = textCenterX - 180 + Math.random() * 160;
          sy = textCenterY - 150 + Math.random() * 300;
        } else {
          // 6 fiber cables shoot in from completely random 360° directions around the banner edges!
          const angle =
            ((i - 4) / 6) * Math.PI * 2 + (Math.random() - 0.5) * 0.85;
          const dist = Math.max(width, height) * (0.42 + Math.random() * 0.25);
          sx = logoX + Math.cos(angle) * dist;
          sy = logoY + Math.sin(angle) * dist;
        }

        const p0: Vec3 = { x: sx, y: sy, z: sz };
        const p3: Vec3 = { x: logoX, y: logoY, z: 0 };

        // Organic 3D sweeping S-curve control points
        const perpX = -(p3.y - p0.y);
        const perpY = p3.x - p0.x;
        const len = Math.hypot(perpX, perpY) || 1;
        const nx = perpX / len;
        const ny = perpY / len;
        const bend1 = (Math.random() - 0.5) * 210;
        const bend2 = (Math.random() - 0.5) * 160;

        const p1: Vec3 = {
          x: p0.x + (p3.x - p0.x) * 0.34 + nx * bend1,
          y: p0.y + (p3.y - p0.y) * 0.34 + ny * bend1,
          z: sz * 0.65 + (Math.random() - 0.5) * 180,
        };
        const p2: Vec3 = {
          x: p0.x + (p3.x - p0.x) * 0.7 + nx * bend2,
          y: p0.y + (p3.y - p0.y) * 0.7 + ny * bend2,
          z: sz * 0.25 + (Math.random() - 0.5) * 130,
        };

        const pal = palette[i % palette.length];
        list.push({
          p0,
          p1,
          p2,
          p3,
          color: pal.color,
          highlight: pal.highlight,
          baseWidth: 2.8 + Math.random() * 1.8,
          delay: i * 0.08 + Math.random() * 0.12,
          speed: 0.48 + Math.random() * 0.28,
          wobblePhase: Math.random() * Math.PI * 2,
        });
      }

      // Sort back-to-front by average Z so foreground 3D cables naturally pass in front of background ones
      list.sort((a, b) => b.p0.z - a.p0.z);
      fibers = list;
    };

    const measureAnchors = () => {
      const secRect = section.getBoundingClientRect();
      width = secRect.width;
      height = secRect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      if (textRef.current) {
        const tRect = textRef.current.getBoundingClientRect();
        textCenterX = tRect.left - secRect.left + tRect.width * 0.38;
        textCenterY = tRect.top - secRect.top + tRect.height * 0.48;
      } else {
        textCenterX = width * 0.2;
        textCenterY = height * 0.48;
      }

      if (logoRef.current) {
        const lRect = logoRef.current.getBoundingClientRect();
        logoX = lRect.left - secRect.left + lRect.width / 2;
        logoY = lRect.top - secRect.top + lRect.height / 2;
        logoRadius = lRect.width / 2;
      } else {
        logoX = width * 0.74;
        logoY = height * 0.5;
        logoRadius = 90;
      }

      generateRandom3DFibers();
    };

    measureAnchors();
    const resizeObserver = new ResizeObserver(measureAnchors);
    resizeObserver.observe(section);
    window.addEventListener("resize", measureAnchors);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseTargetX = ((e.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 90;
      mouseTargetY = ((e.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 70;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 3D WiFi Logo Particles
    const wifiParticles: Wifi3DParticle[] = [];
    const wifiColors = ["#008FFF", "#0FA4E8", "#06B6D4", "#0284C7"];
    let lastSpawn = 0;

    const spawn3DWifiLogo = (burstIdx?: number) => {
      const angle =
        burstIdx !== undefined
          ? (burstIdx / 9) * Math.PI * 2 + (Math.random() - 0.5) * 0.3
          : Math.random() * Math.PI * 2;
      const speed = 58 + Math.random() * 44;
      const zVel = (Math.random() - 0.58) * 140; // slightly biased toward viewer for pop-out 3D depth!
      const startR = logoRadius * 0.45;
      wifiParticles.push({
        x: logoX + Math.cos(angle) * startR,
        y: logoY + Math.sin(angle) * startR,
        z: (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        vz: zVel,
        age: 0,
        life: 2.3 + Math.random() * 1.1,
        baseSize: 17 + Math.random() * 10,
        color: wifiColors[Math.floor(Math.random() * wifiColors.length)],
        tiltX: (Math.random() - 0.5) * 0.35,
        tiltY: Math.random() * Math.PI * 2,
      });
    };

    const CYCLE_DURATION = 9.2;
    const startTime = performance.now();
    let prevTime = startTime;
    let lastCycleIndex = 0;
    let burstTriggeredCycle = -1;

    const render = (now: number) => {
      const dt = Math.min(0.05, (now - prevTime) / 1000);
      prevTime = now;
      const elapsed = (now - startTime) / 1000;
      const cycleIndex = Math.floor(elapsed / CYCLE_DURATION);
      const cycleT = elapsed % CYCLE_DURATION;

      // Re-randomize 3D incoming fiber directions on every new cycle!
      if (cycleIndex !== lastCycleIndex) {
        lastCycleIndex = cycleIndex;
        generateRandom3DFibers();
      }

      // Smooth 3D camera parallax
      camX += (mouseTargetX - camX) * 0.05;
      camY += (mouseTargetY - camY) * 0.05;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const fadeReset =
        cycleT > CYCLE_DURATION - 0.65
          ? Math.max(0, (CYCLE_DURATION - cycleT) / 0.65)
          : 1;

      // ------------------------------------------------------------------
      // STAGE 1: Real 3D Perspective Fiber Wires From Random Directions -> Logo
      // ------------------------------------------------------------------
      const growDuration = 1.45;

      fibers.forEach((fiber, idx) => {
        const rawProg = (cycleT - fiber.delay) / growDuration;
        const prog = Math.max(0, Math.min(1, rawProg));
        const eased = 1 - Math.pow(1 - prog, 3);
        if (eased <= 0.005) return;

        // Subtle organic 3D wave sway
        const swayY = Math.sin(elapsed * 1.2 + fiber.wobblePhase) * 12;
        const swayZ = Math.cos(elapsed * 0.9 + fiber.wobblePhase) * 18;
        const p1Anim: Vec3 = { x: fiber.p1.x, y: fiber.p1.y + swayY, z: fiber.p1.z + swayZ };
        const p2Anim: Vec3 = { x: fiber.p2.x, y: fiber.p2.y - swayY * 0.6, z: fiber.p2.z - swayZ * 0.6 };

        const segments = 38;
        const activeSegs = Math.max(2, Math.floor(eased * segments));

        // Sample projected 3D points along the cable
        const pts: Array<{ x: number; y: number; scale: number }> = [];
        for (let s = 0; s <= activeSegs; s++) {
          const u = s === activeSegs ? eased : Math.min(eased, s / segments);
          const pt3 = cubicBezier3D(u, fiber.p0, p1Anim, p2Anim, fiber.p3);
          pts.push(project(pt3));
        }

        // Depth-aware alpha (foreground cables crisper, background cables softer)
        const avgScale = (pts[0].scale + pts[pts.length - 1].scale) * 0.5;
        const depthAlpha = Math.max(0.32, Math.min(0.95, avgScale * 0.72)) * fadeReset;

        // Draw segmented 3D cylindrical fiber cable (thickness scales smoothly with real 3D Z-depth!)
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (let s = 0; s < pts.length - 1; s++) {
          const a = pts[s];
          const b = pts[s + 1];
          const segScale = (a.scale + b.scale) * 0.5;
          const w = fiber.baseWidth * segScale;
          // Fade in gently right at the outer start point
          const segFrac = s / Math.max(1, segments);
          const entryFade = Math.min(1, segFrac * 5.5);

          // 3D cast depth shadow underneath cable
          ctx.beginPath();
          ctx.moveTo(a.x + 2 * segScale, a.y + 4 * segScale);
          ctx.lineTo(b.x + 2 * segScale, b.y + 4 * segScale);
          ctx.strokeStyle = "rgba(15, 23, 42, 0.08)";
          ctx.lineWidth = w + 2.2 * segScale;
          ctx.globalAlpha = depthAlpha * entryFade;
          ctx.stroke();

          // Outer glowing optical aura
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = fiber.color;
          ctx.lineWidth = w + 3.2 * segScale;
          ctx.globalAlpha = depthAlpha * 0.2 * entryFade;
          ctx.stroke();

          // Main 3D cylindrical fiber body
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = fiber.color;
          ctx.lineWidth = w;
          ctx.globalAlpha = depthAlpha * 0.75 * entryFade;
          ctx.stroke();

          // Top specular 3D glass-core highlight
          ctx.beginPath();
          ctx.moveTo(a.x - 0.4 * segScale, a.y - 0.6 * segScale);
          ctx.lineTo(b.x - 0.4 * segScale, b.y - 0.6 * segScale);
          ctx.strokeStyle = fiber.highlight;
          ctx.lineWidth = Math.max(0.8, w * 0.34);
          ctx.globalAlpha = depthAlpha * 0.9 * entryFade;
          ctx.stroke();
        }

        // Bright 3D Laser Tip while extending toward the EARTHLINK logo
        if (prog > 0.01 && prog < 0.99) {
          const tip = pts[pts.length - 1];
          const r = 6.5 * tip.scale;
          ctx.save();
          ctx.beginPath();
          ctx.arc(tip.x, tip.y, r, 0, Math.PI * 2);
          ctx.fillStyle = "#008FFF";
          ctx.shadowColor = "#008FFF";
          ctx.shadowBlur = 18 * tip.scale;
          ctx.globalAlpha = 0.95;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(tip.x, tip.y, r * 0.42, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
          ctx.restore();
        }

        // Continuous high-speed 3D optical data photons streaming into the EARTHLINK logo
        if (prog >= 0.98 && fadeReset > 0.05) {
          for (let p = 0; p < 2; p++) {
            const pu = (elapsed * fiber.speed + p * 0.5 + idx * 0.13) % 1;
            const pt3 = cubicBezier3D(pu, fiber.p0, p1Anim, p2Anim, fiber.p3);
            const pr = project(pt3);
            const edgeFade = Math.sin(pu * Math.PI) * fadeReset;
            const radius = 4.4 * pr.scale;

            ctx.save();
            ctx.beginPath();
            ctx.arc(pr.x, pr.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = p === 0 ? "#008FFF" : "#06B6D4";
            ctx.shadowColor = "#008FFF";
            ctx.shadowBlur = 14 * pr.scale;
            ctx.globalAlpha = 0.92 * edgeFade;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(pr.x, pr.y, radius * 0.45, 0, Math.PI * 2);
            ctx.fillStyle = "#FFFFFF";
            ctx.globalAlpha = edgeFade;
            ctx.fill();
            ctx.restore();
          }
        }
      });

      // ------------------------------------------------------------------
      // STAGE 2: Core Ignition + Real 3D WiFi Logos Radiating Outward
      // ------------------------------------------------------------------
      const wifiStart = 1.6;
      const wifiActive = cycleT >= wifiStart && cycleT < CYCLE_DURATION - 0.6;

      if (wifiActive && burstTriggeredCycle !== cycleIndex) {
        burstTriggeredCycle = cycleIndex;
        for (let b = 0; b < 9; b++) {
          spawn3DWifiLogo(b);
        }
        lastSpawn = elapsed;
      }

      if (wifiActive && elapsed - lastSpawn > 0.32) {
        spawn3DWifiLogo();
        lastSpawn = elapsed;
      }

      // 3D Connection Flash Ring behind the EARTHLINK logo
      const flashProg = (cycleT - (wifiStart - 0.05)) / 0.85;
      if (flashProg > 0 && flashProg < 1) {
        const rx = logoRadius * (0.85 + flashProg * 1.15);
        const ry = rx * 0.88; // subtle 3D tilt
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(logoX, logoY, rx, ry, -0.18, 0, Math.PI * 2);
        ctx.strokeStyle = "#008FFF";
        ctx.lineWidth = 4.2 * (1 - flashProg);
        ctx.shadowColor = "#008FFF";
        ctx.shadowBlur = 20;
        ctx.globalAlpha = Math.sin(flashProg * Math.PI) * 0.78;
        ctx.stroke();
        ctx.restore();
      }

      // Tilted 3D Perspective Expanding Signal Rings radiating from behind the logo
      if (cycleT >= wifiStart) {
        const wElapsed = cycleT - wifiStart;
        const env = Math.min(1, wElapsed / 0.5) * fadeReset;
        for (let rIdx = 0; rIdx < 3; rIdx++) {
          const p = (wElapsed * 0.42 + rIdx * 0.333) % 1;
          const rx = logoRadius * 0.85 + p * (logoRadius * 1.5);
          const ry = rx * (0.76 + (rIdx % 2) * 0.14);
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(
            logoX,
            logoY,
            rx,
            ry,
            rIdx % 2 === 0 ? -0.22 : 0.22,
            0,
            Math.PI * 2
          );
          ctx.strokeStyle = rIdx % 2 === 0 ? "#008FFF" : "#06B6D4";
          ctx.lineWidth = 2.4 * (1 - p * 0.45);
          ctx.globalAlpha = Math.sin(p * Math.PI) * 0.36 * env;
          ctx.stroke();
          ctx.restore();
        }
      }

      // Update & depth-sort all 3D WiFi Logos emerging from behind the EARTHLINK logo
      for (let i = wifiParticles.length - 1; i >= 0; i--) {
        const wp = wifiParticles[i];
        wp.age += dt;
        if (wp.age >= wp.life) {
          wifiParticles.splice(i, 1);
          continue;
        }
        wp.x += wp.vx * dt;
        wp.y += wp.vy * dt;
        wp.z += wp.vz * dt;
      }

      // Sort back-to-front by Z for true 3D occlusion ordering
      wifiParticles.sort((a, b) => b.z - a.z);

      wifiParticles.forEach((wp) => {
        const prog = wp.age / wp.life;
        const pr = project({ x: wp.x, y: wp.y, z: wp.z });
        const alpha =
          Math.sin(Math.min(1, prog) * Math.PI) *
          Math.min(1, pr.scale * 0.92) *
          fadeReset;
        const currentSize = wp.baseSize * pr.scale * (0.78 + prog * 0.52);
        const perspectiveSquash =
          0.86 + Math.cos(elapsed * 2.2 + wp.tiltY) * 0.14;

        draw3DWifiLogo(
          ctx,
          pr.x,
          pr.y,
          currentSize,
          alpha,
          wp.color,
          perspectiveSquash,
          pr.scale
        );
      });

      ctx.restore();
      animId = window.requestAnimationFrame(render);
    };

    animId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureAnchors);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [sectionRef, textRef, logoRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
