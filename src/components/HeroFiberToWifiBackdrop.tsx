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
  colorStart: string;
  colorEnd: string;
  glowColor: string;
  baseWidth: number;
  delay: number;
  speed: number;
  wobblePhase: number;
}

interface WifiMedallion3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  age: number;
  life: number;
  baseSize: number;
  accent: string;
  accentLight: string;
  spinPhase: number;
}

interface SparkleGlint {
  x: number;
  y: number;
  z: number;
  vy: number;
  age: number;
  life: number;
  size: number;
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

/**
 * Draws an ultra-crisp 3D Frosted-Crystal Medallion containing a glowing 3D WiFi Logo
 */
function drawCrystalWifiMedallion(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  alpha: number,
  accent: string,
  accentLight: string,
  scaleX: number,
  depthScale: number
) {
  if (alpha <= 0.015 || radius < 4) return;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scaleX, 1);
  ctx.globalAlpha = alpha;

  // 1. Soft 3D Elevated Drop Shadow
  ctx.save();
  ctx.beginPath();
  ctx.arc(radius * 0.08, radius * 0.22, radius * 0.96, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(2, 132, 199, 0.16)";
  ctx.shadowColor = "rgba(0, 143, 255, 0.28)";
  ctx.shadowBlur = 16 * depthScale;
  ctx.fill();
  ctx.restore();

  // 2. Frosted Crystal 3D Sphere / Medallion Body
  const bodyGrad = ctx.createRadialGradient(
    -radius * 0.3,
    -radius * 0.35,
    radius * 0.1,
    0,
    0,
    radius
  );
  bodyGrad.addColorStop(0, "rgba(255, 255, 255, 0.98)");
  bodyGrad.addColorStop(0.62, "rgba(240, 249, 255, 0.92)");
  bodyGrad.addColorStop(1, "rgba(186, 230, 253, 0.78)");

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fillStyle = bodyGrad;
  ctx.fill();

  // 3. Luminous Prism Rim Border
  const rimGrad = ctx.createLinearGradient(-radius, -radius, radius, radius);
  rimGrad.addColorStop(0, "#FFFFFF");
  rimGrad.addColorStop(0.45, accent);
  rimGrad.addColorStop(1, accentLight);

  ctx.lineWidth = Math.max(1.3, radius * 0.095);
  ctx.strokeStyle = rimGrad;
  ctx.stroke();

  // 4. Upper Curved Glass Sheen Reflection
  ctx.beginPath();
  ctx.ellipse(
    0,
    -radius * 0.44,
    radius * 0.56,
    radius * 0.26,
    0,
    0,
    Math.PI * 2
  );
  ctx.fillStyle = "rgba(255, 255, 255, 0.72)";
  ctx.fill();

  // 5. Crisp Glowing WiFi Icon Nested Inside the Crystal Medallion
  const iconSize = radius * 0.78;
  const dotY = iconSize * 0.42;

  ctx.save();
  ctx.shadowColor = accent;
  ctx.shadowBlur = 8 * depthScale;

  // WiFi Emitter Dot
  ctx.beginPath();
  ctx.arc(0, dotY, Math.max(1.8, iconSize * 0.145), 0, Math.PI * 2);
  ctx.fillStyle = accent;
  ctx.fill();

  // 3 Bold Upward WiFi Signal Arcs
  ctx.lineCap = "round";
  const arcs = [
    { r: iconSize * 0.42, lw: Math.max(1.6, iconSize * 0.135), c: accent },
    { r: iconSize * 0.74, lw: Math.max(1.5, iconSize * 0.125), c: accent },
    { r: iconSize * 1.05, lw: Math.max(1.4, iconSize * 0.115), c: accentLight },
  ];

  arcs.forEach((arc) => {
    ctx.beginPath();
    ctx.lineWidth = arc.lw;
    ctx.strokeStyle = arc.c;
    ctx.arc(0, dotY, arc.r, -Math.PI * 0.76, -Math.PI * 0.24);
    ctx.stroke();
  });
  ctx.restore();

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

    // Smooth interactive 3D camera parallax
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let camX = 0;
    let camY = 0;

    const FOCAL = 600;

    const project = (pt: Vec3) => {
      const dx = pt.x - logoX + camX * (pt.z * 0.0024);
      const dy = pt.y - logoY + camY * (pt.z * 0.0024);
      const scale = FOCAL / Math.max(140, FOCAL + pt.z);
      return {
        x: logoX + dx * scale,
        y: logoY + dy * scale,
        scale,
      };
    };

    // High-contrast prism-optical telecom palette
    const fiberPalettes = [
      { start: "#38BDF8", end: "#0066FF", glow: "#008FFF" },
      { start: "#22D3EE", end: "#0284C7", glow: "#06B6D4" },
      { start: "#60A5FA", end: "#008FFF", glow: "#38BDF8" },
      { start: "#06B6D4", end: "#1D4ED8", glow: "#0FA4E8" },
    ];

    let fibers: Random3DFiber[] = [];

    const generateRandom3DFibers = () => {
      const list: Random3DFiber[] = [];
      const total = 10;

      for (let i = 0; i < total; i++) {
        let sx = 0;
        let sy = 0;
        const sz = (Math.random() - 0.5) * 340;

        if (i < 4) {
          // 4 optical conduits emerge from behind the Hero text background
          sx = textCenterX - 180 + Math.random() * 170;
          sy = textCenterY - 150 + Math.random() * 300;
        } else {
          // 6 optical conduits sweep in from random 360° directions across the banner
          const angle =
            ((i - 4) / 6) * Math.PI * 2 + (Math.random() - 0.5) * 0.85;
          const dist = Math.max(width, height) * (0.42 + Math.random() * 0.25);
          sx = logoX + Math.cos(angle) * dist;
          sy = logoY + Math.sin(angle) * dist;
        }

        const p0: Vec3 = { x: sx, y: sy, z: sz };
        const p3: Vec3 = { x: logoX, y: logoY, z: 0 };

        const perpX = -(p3.y - p0.y);
        const perpY = p3.x - p0.x;
        const len = Math.hypot(perpX, perpY) || 1;
        const nx = perpX / len;
        const ny = perpY / len;
        const bend1 = (Math.random() - 0.5) * 210;
        const bend2 = (Math.random() - 0.5) * 165;

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

        const pal = fiberPalettes[i % fiberPalettes.length];
        list.push({
          p0,
          p1,
          p2,
          p3,
          colorStart: pal.start,
          colorEnd: pal.end,
          glowColor: pal.glow,
          baseWidth: 3.0 + Math.random() * 1.9,
          delay: i * 0.08 + Math.random() * 0.12,
          speed: 0.52 + Math.random() * 0.28,
          wobblePhase: Math.random() * Math.PI * 2,
        });
      }

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
      mouseTargetX =
        ((e.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 95;
      mouseTargetY =
        ((e.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 75;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 3D Crystal WiFi Medallions & Micro Photonic Sparkles
    const wifiMedallions: WifiMedallion3D[] = [];
    const sparkles: SparkleGlint[] = [];
    const medallionAccents = [
      { accent: "#008FFF", light: "#06B6D4" },
      { accent: "#0284C7", light: "#38BDF8" },
      { accent: "#06B6D4", light: "#008FFF" },
    ];
    let lastSpawn = 0;

    const spawnCrystalWifi = (burstIdx?: number) => {
      const angle =
        burstIdx !== undefined
          ? (burstIdx / 8) * Math.PI * 2 + (Math.random() - 0.5) * 0.28
          : Math.random() * Math.PI * 2;
      const speed = 56 + Math.random() * 42;
      const zVel = (Math.random() - 0.58) * 145;
      const startR = logoRadius * 0.48;
      const pal =
        medallionAccents[Math.floor(Math.random() * medallionAccents.length)];

      wifiMedallions.push({
        x: logoX + Math.cos(angle) * startR,
        y: logoY + Math.sin(angle) * startR,
        z: (Math.random() - 0.5) * 45,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        vz: zVel,
        age: 0,
        life: 2.5 + Math.random() * 1.1,
        baseSize: 16 + Math.random() * 7.5,
        accent: pal.accent,
        accentLight: pal.light,
        spinPhase: Math.random() * Math.PI * 2,
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

      if (cycleIndex !== lastCycleIndex) {
        lastCycleIndex = cycleIndex;
        generateRandom3DFibers();
      }

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
      // STAGE 1: Prism-Core 3D Optical Fiber Conduits & Laser Comet Streams
      // ------------------------------------------------------------------
      const growDuration = 1.45;

      fibers.forEach((fiber, idx) => {
        const rawProg = (cycleT - fiber.delay) / growDuration;
        const prog = Math.max(0, Math.min(1, rawProg));
        const eased = 1 - Math.pow(1 - prog, 3);
        if (eased <= 0.005) return;

        const swayY = Math.sin(elapsed * 1.2 + fiber.wobblePhase) * 12;
        const swayZ = Math.cos(elapsed * 0.9 + fiber.wobblePhase) * 18;
        const p1Anim: Vec3 = {
          x: fiber.p1.x,
          y: fiber.p1.y + swayY,
          z: fiber.p1.z + swayZ,
        };
        const p2Anim: Vec3 = {
          x: fiber.p2.x,
          y: fiber.p2.y - swayY * 0.6,
          z: fiber.p2.z - swayZ * 0.6,
        };

        const segments = 40;
        const activeSegs = Math.max(2, Math.floor(eased * segments));

        const pts: Array<{ x: number; y: number; scale: number }> = [];
        for (let s = 0; s <= activeSegs; s++) {
          const u = s === activeSegs ? eased : Math.min(eased, s / segments);
          pts.push(project(cubicBezier3D(u, fiber.p0, p1Anim, p2Anim, fiber.p3)));
        }

        const avgScale = (pts[0].scale + pts[pts.length - 1].scale) * 0.5;
        const depthAlpha =
          Math.max(0.32, Math.min(0.95, avgScale * 0.74)) * fadeReset;

        const cableGrad = ctx.createLinearGradient(
          pts[0].x,
          pts[0].y,
          pts[pts.length - 1].x,
          pts[pts.length - 1].y
        );
        cableGrad.addColorStop(0, fiber.colorStart);
        cableGrad.addColorStop(0.55, fiber.glowColor);
        cableGrad.addColorStop(1, fiber.colorEnd);

        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (let s = 0; s < pts.length - 1; s++) {
          const a = pts[s];
          const b = pts[s + 1];
          const segScale = (a.scale + b.scale) * 0.5;
          const w = fiber.baseWidth * segScale;
          const segFrac = s / Math.max(1, segments);
          const entryFade = Math.min(1, segFrac * 5.2);

          // Soft 3D ambient shadow beneath optical conduit
          ctx.beginPath();
          ctx.moveTo(a.x + 2.2 * segScale, a.y + 4.4 * segScale);
          ctx.lineTo(b.x + 2.2 * segScale, b.y + 4.4 * segScale);
          ctx.strokeStyle = "rgba(15, 23, 42, 0.075)";
          ctx.lineWidth = w + 2.4 * segScale;
          ctx.globalAlpha = depthAlpha * entryFade;
          ctx.stroke();

          // Luminous outer prism halo
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = fiber.glowColor;
          ctx.lineWidth = w + 4.2 * segScale;
          ctx.globalAlpha = depthAlpha * 0.16 * entryFade;
          ctx.stroke();

          // Translucent crystal-glass jacket
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = cableGrad;
          ctx.lineWidth = w;
          ctx.globalAlpha = depthAlpha * 0.72 * entryFade;
          ctx.stroke();

          // Ultra-crisp gleaming white optical core filament
          ctx.beginPath();
          ctx.moveTo(a.x - 0.45 * segScale, a.y - 0.65 * segScale);
          ctx.lineTo(b.x - 0.45 * segScale, b.y - 0.65 * segScale);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
          ctx.lineWidth = Math.max(0.85, w * 0.32);
          ctx.globalAlpha = depthAlpha * 0.9 * entryFade;
          ctx.stroke();
        }

        // Helper to draw a sleek tapered 3D Laser Comet along the curve
        const drawLaserComet = (headU: number, tailLen: number, alphaMul: number) => {
          const tailSteps = 8;
          for (let k = 0; k < tailSteps; k++) {
            const u0 = Math.max(0, headU - (k / tailSteps) * tailLen);
            const u1 = Math.max(0, headU - ((k + 1) / tailSteps) * tailLen);
            if (u0 <= 0.002) continue;
            const pA = project(cubicBezier3D(u0, fiber.p0, p1Anim, p2Anim, fiber.p3));
            const pB = project(cubicBezier3D(u1, fiber.p0, p1Anim, p2Anim, fiber.p3));
            const frac = 1 - k / tailSteps;

            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.strokeStyle = k < 2 ? "#FFFFFF" : fiber.glowColor;
            ctx.lineWidth = Math.max(1.2, 5.2 * frac * pA.scale);
            ctx.globalAlpha = frac * frac * 0.85 * alphaMul;
            ctx.stroke();
          }

          // White-hot photonic head orb
          const headPt3 = cubicBezier3D(headU, fiber.p0, p1Anim, p2Anim, fiber.p3);
          const head = project(headPt3);
          const r = 5.4 * head.scale;
          ctx.save();
          ctx.beginPath();
          ctx.arc(head.x, head.y, r, 0, Math.PI * 2);
          ctx.fillStyle = fiber.glowColor;
          ctx.shadowColor = fiber.glowColor;
          ctx.shadowBlur = 18 * head.scale;
          ctx.globalAlpha = 0.92 * alphaMul;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(head.x, head.y, r * 0.48, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.globalAlpha = alphaMul;
          ctx.fill();
          ctx.restore();

          // Occasional micro photonic glint drifting off the laser head
          if (Math.random() < 0.08 && sparkles.length < 36) {
            sparkles.push({
              x: headPt3.x + (Math.random() - 0.5) * 14,
              y: headPt3.y + (Math.random() - 0.5) * 14,
              z: headPt3.z,
              vy: -14 - Math.random() * 18,
              age: 0,
              life: 0.7 + Math.random() * 0.5,
              size: 1.5 + Math.random() * 1.8,
            });
          }
        };

        // Leading laser comet while cable is extending toward the EARTHLINK logo
        if (prog > 0.02 && prog < 0.99) {
          drawLaserComet(eased, 0.14, 1);
        }

        // Continuous tapered optical laser comets streaming into the logo once connected
        if (prog >= 0.98 && fadeReset > 0.05) {
          for (let p = 0; p < 2; p++) {
            const pu = (elapsed * fiber.speed + p * 0.5 + idx * 0.13) % 1;
            const edgeFade = Math.sin(pu * Math.PI) * fadeReset;
            drawLaserComet(pu, 0.11, edgeFade);
          }
        }
      });

      // Draw micro photonic sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const sp = sparkles[i];
        sp.age += dt;
        if (sp.age >= sp.life) {
          sparkles.splice(i, 1);
          continue;
        }
        sp.y += sp.vy * dt;
        const pr = project(sp);
        const a = Math.sin((sp.age / sp.life) * Math.PI) * 0.85 * fadeReset;
        ctx.save();
        ctx.beginPath();
        ctx.arc(pr.x, pr.y, sp.size * pr.scale, 0, Math.PI * 2);
        ctx.fillStyle = "#38BDF8";
        ctx.shadowColor = "#008FFF";
        ctx.shadowBlur = 8;
        ctx.globalAlpha = a;
        ctx.fill();
        ctx.restore();
      }

      // ------------------------------------------------------------------
      // STAGE 2: Holographic Aurora Pulse + 3D Crystal WiFi Medallions
      // ------------------------------------------------------------------
      const wifiStart = 1.6;
      const wifiActive = cycleT >= wifiStart && cycleT < CYCLE_DURATION - 0.6;

      if (wifiActive && burstTriggeredCycle !== cycleIndex) {
        burstTriggeredCycle = cycleIndex;
        for (let b = 0; b < 8; b++) {
          spawnCrystalWifi(b);
        }
        lastSpawn = elapsed;
      }

      if (wifiActive && elapsed - lastSpawn > 0.38) {
        spawnCrystalWifi();
        lastSpawn = elapsed;
      }

      // Holographic Cyan-Aqua Shockwave Bloom Behind the EARTHLINK Logo
      const flashProg = (cycleT - (wifiStart - 0.05)) / 0.95;
      if (flashProg > 0 && flashProg < 1) {
        const r = logoRadius * (0.85 + flashProg * 1.25);
        const bloom = ctx.createRadialGradient(
          logoX,
          logoY,
          logoRadius * 0.5,
          logoX,
          logoY,
          r
        );
        bloom.addColorStop(0, "rgba(0, 143, 255, 0.32)");
        bloom.addColorStop(0.65, "rgba(6, 182, 212, 0.16)");
        bloom.addColorStop(1, "rgba(56, 189, 248, 0)");

        ctx.save();
        ctx.globalAlpha = Math.sin(flashProg * Math.PI);
        ctx.fillStyle = bloom;
        ctx.beginPath();
        ctx.arc(logoX, logoY, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(logoX, logoY, r, r * 0.86, -0.2, 0, Math.PI * 2);
        ctx.strokeStyle = "#008FFF";
        ctx.lineWidth = 3.6 * (1 - flashProg);
        ctx.shadowColor = "#008FFF";
        ctx.shadowBlur = 22;
        ctx.stroke();
        ctx.restore();
      }

      // Dual Tilted 3D Iridescent Orbital Signal Rings radiating behind the logo
      if (cycleT >= wifiStart) {
        const wElapsed = cycleT - wifiStart;
        const env = Math.min(1, wElapsed / 0.5) * fadeReset;
        for (let rIdx = 0; rIdx < 3; rIdx++) {
          const p = (wElapsed * 0.4 + rIdx * 0.333) % 1;
          const rx = logoRadius * 0.88 + p * (logoRadius * 1.55);
          const ry = rx * (0.74 + (rIdx % 2) * 0.16);
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(
            logoX,
            logoY,
            rx,
            ry,
            rIdx % 2 === 0 ? -0.24 : 0.24,
            0,
            Math.PI * 2
          );
          ctx.setLineDash(rIdx === 1 ? [10, 8] : []);
          ctx.strokeStyle = rIdx % 2 === 0 ? "#008FFF" : "#06B6D4";
          ctx.lineWidth = 2.2 * (1 - p * 0.4);
          ctx.globalAlpha = Math.sin(p * Math.PI) * 0.34 * env;
          ctx.stroke();
          ctx.restore();
        }
      }

      // Update & depth-sort all 3D Crystal WiFi Medallions
      for (let i = wifiMedallions.length - 1; i >= 0; i--) {
        const wm = wifiMedallions[i];
        wm.age += dt;
        if (wm.age >= wm.life) {
          wifiMedallions.splice(i, 1);
          continue;
        }
        wm.x += wm.vx * dt;
        wm.y += wm.vy * dt;
        wm.z += wm.vz * dt;
      }

      wifiMedallions.sort((a, b) => b.z - a.z);

      wifiMedallions.forEach((wm) => {
        const prog = wm.age / wm.life;
        const pr = project({ x: wm.x, y: wm.y, z: wm.z });
        const alpha =
          Math.sin(Math.min(1, prog) * Math.PI) *
          Math.min(1, pr.scale * 0.95) *
          fadeReset;
        const radius = wm.baseSize * pr.scale * (0.72 + prog * 0.5);
        const perspectiveSquash =
          0.88 + Math.cos(elapsed * 2.1 + wm.spinPhase) * 0.12;

        drawCrystalWifiMedallion(
          ctx,
          pr.x,
          pr.y,
          radius,
          alpha,
          wm.accent,
          wm.accentLight,
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
