"use client";

import React, { useEffect, useRef } from "react";

interface HeroFiberToWifiBackdropProps {
  sectionRef: React.RefObject<HTMLElement>;
  textRef: React.RefObject<HTMLDivElement>;
  logoRef: React.RefObject<HTMLDivElement>;
}

interface WifiParticle {
  angle: number;
  dist: number;
  maxDist: number;
  speed: number;
  baseSize: number;
  opacity: number;
  color: string;
  wobblePhase: number;
}

interface FiberCableDef {
  startOffsetY: number;
  cp1Y: number;
  cp2Y: number;
  color: string;
  coreColor: string;
  width: number;
  delay: number;
}

function cubicBezierPoint(
  t: number,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number
) {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;
  return {
    x: uuu * x0 + 3 * uu * t * x1 + 3 * u * tt * x2 + ttt * x3,
    y: uuu * y0 + 3 * uu * t * y1 + 3 * u * tt * y2 + ttt * y3,
  };
}

function drawWifiLogo(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  alpha: number,
  color: string
) {
  if (alpha <= 0.01) return;
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = alpha;

  // Soft white contrast glow so WiFi logos look crisp on the light sky banner
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;

  // Center WiFi dot at bottom of icon
  const dotY = size * 0.34;
  ctx.beginPath();
  ctx.arc(0, dotY, Math.max(1.8, size * 0.11), 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();

  // 3 classic upward WiFi signal arcs
  ctx.lineCap = "round";
  ctx.strokeStyle = color;

  const arcs = [
    { r: size * 0.34, lw: Math.max(1.6, size * 0.1) },
    { r: size * 0.62, lw: Math.max(1.6, size * 0.095) },
    { r: size * 0.9, lw: Math.max(1.5, size * 0.09) },
  ];

  arcs.forEach((arc) => {
    ctx.beginPath();
    ctx.lineWidth = arc.lw;
    // Upward 90-degree WiFi arc (-135° to -45°)
    ctx.arc(0, dotY, arc.r, -Math.PI * 0.76, -Math.PI * 0.24);
    ctx.stroke();
  });

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

    // Dynamic anchor points measured from actual DOM elements
    let startX = width * 0.08;
    let startY = height * 0.48;
    let logoX = width * 0.74;
    let logoY = height * 0.5;
    let logoRadius = 90;

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
        startX = Math.max(0, tRect.left - secRect.left - 30);
        startY = tRect.top - secRect.top + tRect.height * 0.48;
      } else {
        startX = width * 0.04;
        startY = height * 0.48;
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
    };

    measureAnchors();
    const resizeObserver = new ResizeObserver(measureAnchors);
    resizeObserver.observe(section);
    window.addEventListener("resize", measureAnchors);

    // 5 glossy multi-core fiber optic cables sweeping from behind the Hero text into the EARTHLINK logo
    const cables: FiberCableDef[] = [
      {
        startOffsetY: -115,
        cp1Y: -135,
        cp2Y: -75,
        color: "#008FFF",
        coreColor: "#7DD3FC",
        width: 3.4,
        delay: 0.0,
      },
      {
        startOffsetY: -55,
        cp1Y: -65,
        cp2Y: -22,
        color: "#0FA4E8",
        coreColor: "#BAE6FD",
        width: 3.0,
        delay: 0.14,
      },
      {
        startOffsetY: 0,
        cp1Y: 10,
        cp2Y: -8,
        color: "#0284C7",
        coreColor: "#E0F2FE",
        width: 3.8,
        delay: 0.06,
      },
      {
        startOffsetY: 58,
        cp1Y: 72,
        cp2Y: 28,
        color: "#06B6D4",
        coreColor: "#A5F3FC",
        width: 3.0,
        delay: 0.2,
      },
      {
        startOffsetY: 118,
        cp1Y: 138,
        cp2Y: 78,
        color: "#008FFF",
        coreColor: "#7DD3FC",
        width: 3.2,
        delay: 0.28,
      },
    ];

    // Real-time WiFi Logo particles emitted from behind the EARTHLINK logo
    const wifiParticles: WifiParticle[] = [];
    const wifiColors = ["#008FFF", "#0FA4E8", "#06B6D4", "#0284C7"];
    let lastSpawnTime = 0;

    const spawnWifiLogo = (burstIndex?: number) => {
      const baseAngle =
        burstIndex !== undefined
          ? (burstIndex / 8) * Math.PI * 2 + (Math.random() - 0.5) * 0.25
          : Math.random() * Math.PI * 2;
      wifiParticles.push({
        angle: baseAngle,
        dist: logoRadius * 0.55,
        maxDist: logoRadius + 115 + Math.random() * 85,
        speed: 44 + Math.random() * 28,
        baseSize: 16 + Math.random() * 11,
        opacity: 1,
        color: wifiColors[Math.floor(Math.random() * wifiColors.length)],
        wobblePhase: Math.random() * Math.PI * 2,
      });
    };

    const CYCLE_DURATION = 9.0; // seconds: 0-1.7s cables connect, 1.7-8.4s WiFi logos stream out, 8.4-9.0s smooth reset
    const startTime = performance.now();
    let prevTime = startTime;
    let burstTriggeredInCycle = -1;

    const render = (now: number) => {
      const dt = Math.min(0.05, (now - prevTime) / 1000);
      prevTime = now;
      const elapsed = (now - startTime) / 1000;
      const cycleIndex = Math.floor(elapsed / CYCLE_DURATION);
      const cycleT = elapsed % CYCLE_DURATION;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const fadeReset =
        cycleT > CYCLE_DURATION - 0.6
          ? Math.max(0, (CYCLE_DURATION - cycleT) / 0.6)
          : 1;

      // ------------------------------------------------------------------
      // STAGE 1: Fiber Optic Cables flowing from Text Background -> Logo
      // ------------------------------------------------------------------
      const spanX = logoX - startX;
      const growDuration = 1.4;

      cables.forEach((cable, idx) => {
        const x0 = startX - 24;
        const y0 = startY + cable.startOffsetY;
        const x3 = logoX;
        const y3 = logoY;

        // Smooth S-curve control points across the banner
        const waveShift = Math.sin(elapsed * 1.1 + idx * 0.9) * 10;
        const x1 = x0 + spanX * 0.38;
        const y1 = y0 + cable.cp1Y * 0.35 + waveShift;
        const x2 = x0 + spanX * 0.72;
        const y2 = y3 + cable.cp2Y * 0.45 - waveShift * 0.7;

        const rawProg = (cycleT - cable.delay) / growDuration;
        const prog = Math.max(0, Math.min(1, rawProg));
        const eased = 1 - Math.pow(1 - prog, 3);

        if (eased > 0.005) {
          const steps = 44;
          const maxStep = Math.max(1, Math.floor(eased * steps));

          // 1a. Outer Glowing Fiber Cladding
          ctx.save();
          ctx.beginPath();
          for (let s = 0; s <= maxStep; s++) {
            const u = (s / steps) * (eased / (maxStep / steps));
            const clampedU = Math.min(eased, s / steps);
            const pt = cubicBezierPoint(
              s === maxStep ? eased : clampedU,
              x0,
              y0,
              x1,
              y1,
              x2,
              y2,
              x3,
              y3
            );
            if (s === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
            void u;
          }
          const cableGrad = ctx.createLinearGradient(x0, y0, x3, y3);
          cableGrad.addColorStop(0, "rgba(0, 143, 255, 0.08)");
          cableGrad.addColorStop(0.28, cable.color);
          cableGrad.addColorStop(1, "#008FFF");

          ctx.strokeStyle = cableGrad;
          ctx.lineWidth = cable.width + 2.4;
          ctx.lineCap = "round";
          ctx.globalAlpha = 0.22 * fadeReset;
          ctx.stroke();

          // 1b. Crisp Main Fiber Cable
          ctx.strokeStyle = cableGrad;
          ctx.lineWidth = cable.width;
          ctx.globalAlpha = 0.62 * fadeReset;
          ctx.stroke();

          // 1c. Bright Inner Glass Core Filament
          ctx.strokeStyle = cable.coreColor;
          ctx.lineWidth = 1.1;
          ctx.globalAlpha = 0.85 * fadeReset;
          ctx.stroke();
          ctx.restore();

          // Leading laser light tip while cable is extending toward the logo
          if (prog > 0.01 && prog < 0.99) {
            const tip = cubicBezierPoint(eased, x0, y0, x1, y1, x2, y2, x3, y3);
            ctx.save();
            ctx.beginPath();
            ctx.arc(tip.x, tip.y, 6.5, 0, Math.PI * 2);
            ctx.fillStyle = "#008FFF";
            ctx.shadowColor = "#008FFF";
            ctx.shadowBlur = 16;
            ctx.globalAlpha = 0.95;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(tip.x, tip.y, 2.8, 0, Math.PI * 2);
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
            ctx.restore();
          }

          // Continuous high-speed optical light packets streaming from text -> logo once connected
          if (prog >= 0.98 && fadeReset > 0.05) {
            for (let p = 0; p < 2; p++) {
              const pu = (elapsed * (0.58 + idx * 0.05) + p * 0.5 + idx * 0.17) % 1;
              const pt = cubicBezierPoint(pu, x0, y0, x1, y1, x2, y2, x3, y3);
              const edgeFade = Math.sin(pu * Math.PI) * fadeReset;

              ctx.save();
              ctx.beginPath();
              ctx.arc(pt.x, pt.y, 4.2, 0, Math.PI * 2);
              ctx.fillStyle = p === 0 ? "#008FFF" : "#06B6D4";
              ctx.shadowColor = "#008FFF";
              ctx.shadowBlur = 12;
              ctx.globalAlpha = 0.9 * edgeFade;
              ctx.fill();

              ctx.beginPath();
              ctx.arc(pt.x, pt.y, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = "#FFFFFF";
              ctx.globalAlpha = edgeFade;
              ctx.fill();
              ctx.restore();
            }
          }
        }
      });

      // ------------------------------------------------------------------
      // STAGE 2: Connection Flash + WiFi Logos Radiating From Logo Background
      // ------------------------------------------------------------------
      const wifiStart = 1.5;
      const wifiActive = cycleT >= wifiStart && cycleT < CYCLE_DURATION - 0.55;

      // Instant burst of 8 WiFi logos the moment fibers connect behind the logo!
      if (wifiActive && burstTriggeredInCycle !== cycleIndex) {
        burstTriggeredInCycle = cycleIndex;
        for (let b = 0; b < 8; b++) {
          spawnWifiLogo(b);
        }
        lastSpawnTime = elapsed;
      }

      // Continuous real-time stream of WiFi logos emerging from behind the logo
      if (wifiActive && elapsed - lastSpawnTime > 0.36) {
        spawnWifiLogo();
        lastSpawnTime = elapsed;
      }

      // Connection ignition flash ring behind the logo
      const flashDur = 0.9;
      const flashProg = (cycleT - (wifiStart - 0.05)) / flashDur;
      if (flashProg > 0 && flashProg < 1) {
        const r = logoRadius * 0.8 + flashProg * (logoRadius * 1.1);
        ctx.save();
        ctx.beginPath();
        ctx.arc(logoX, logoY, r, 0, Math.PI * 2);
        ctx.strokeStyle = "#008FFF";
        ctx.lineWidth = 4 * (1 - flashProg);
        ctx.shadowColor = "#008FFF";
        ctx.shadowBlur = 18;
        ctx.globalAlpha = Math.sin(flashProg * Math.PI) * 0.75;
        ctx.stroke();
        ctx.restore();
      }

      // Soft expanding concentric WiFi signal rings radiating from behind the logo
      if (cycleT >= wifiStart) {
        const wElapsed = cycleT - wifiStart;
        const env = Math.min(1, wElapsed / 0.5) * fadeReset;
        for (let rIdx = 0; rIdx < 3; rIdx++) {
          const p = (wElapsed * 0.42 + rIdx * 0.333) % 1;
          const radius = logoRadius * 0.85 + p * (logoRadius * 1.45);
          ctx.save();
          ctx.beginPath();
          ctx.arc(logoX, logoY, radius, 0, Math.PI * 2);
          ctx.strokeStyle = rIdx % 2 === 0 ? "#008FFF" : "#06B6D4";
          ctx.lineWidth = 2.2 * (1 - p * 0.5);
          ctx.globalAlpha = Math.sin(p * Math.PI) * 0.34 * env;
          ctx.stroke();
          ctx.restore();
        }
      }

      // Update & draw all floating WiFi Logos coming out from behind the EARTHLINK logo
      for (let i = wifiParticles.length - 1; i >= 0; i--) {
        const wp = wifiParticles[i];
        wp.dist += wp.speed * dt;
        const progress =
          (wp.dist - logoRadius * 0.55) /
          Math.max(1, wp.maxDist - logoRadius * 0.55);

        if (progress >= 1) {
          wifiParticles.splice(i, 1);
          continue;
        }

        // Smooth fade-in as it emerges from behind the logo, smooth fade-out at outer edge
        const alpha =
          Math.sin(Math.min(1, progress) * Math.PI) * 0.92 * fadeReset;
        const currentSize = wp.baseSize * (0.75 + progress * 0.55);
        const wobble = Math.sin(elapsed * 2.4 + wp.wobblePhase) * 0.08;
        const px = logoX + Math.cos(wp.angle + wobble) * wp.dist;
        const py = logoY + Math.sin(wp.angle + wobble) * wp.dist;

        drawWifiLogo(ctx, px, py, currentSize, alpha, wp.color);
      }

      ctx.restore();
      animId = window.requestAnimationFrame(render);
    };

    animId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureAnchors);
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
