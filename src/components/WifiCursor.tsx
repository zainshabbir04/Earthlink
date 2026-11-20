"use client";

import React, { useEffect, useRef, useState } from "react";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export default function WifiCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("wifi-cursor-active");

    let rippleId = 0;

    const handleMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      setVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest(
            'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="pointer"]'
          )
        );
        setIsPointer(interactive);
      }
    };

    const handleDown = (e: MouseEvent) => {
      setIsPressed(true);
      const id = ++rippleId;
      setRipples((prev) => [...prev.slice(-3), { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 520);
    };

    const handleUp = () => setIsPressed(false);
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      document.documentElement.classList.remove("wifi-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Click Signal Ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          style={{ left: r.x, top: r.y }}
          className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-[#008FFF] animate-wifiClickRipple"
        />
      ))}

      {/* Custom WiFi Signal Pointer */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-150 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        {/* Hotspot is centered directly on the glowing WiFi emitter dot at (0, 0) */}
        <div
          className={`relative -translate-x-[5px] -translate-y-[5px] transition-transform duration-200 ease-out ${
            isPressed ? "scale-90" : isPointer ? "scale-[1.2]" : "scale-100"
          }`}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible drop-shadow-[0_2px_6px_rgba(0,143,255,0.45)]"
          >
            <defs>
              <linearGradient id="wifiCursorGrad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#008FFF" />
                <stop offset="55%" stopColor="#0FA4E8" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>

            {/* White contrast halo behind the emitter dot so it pops on dark & light sections */}
            <circle cx="5" cy="5" r="4.6" fill="#FFFFFF" fillOpacity="0.95" />
            {/* Exact Pointer Tip: Glowing WiFi Core Emitter Dot */}
            <circle
              cx="5"
              cy="5"
              r="3.2"
              fill={isPointer ? "#06B6D4" : "#008FFF"}
            />

            {/* WiFi Signal Wave 1 (Inner) */}
            <path
              d="M 12.2 6.8 A 8 8 0 0 1 6.8 12.2"
              stroke="#FFFFFF"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeOpacity="0.85"
            />
            <path
              d="M 12.2 6.8 A 8 8 0 0 1 6.8 12.2"
              stroke="url(#wifiCursorGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="wifi-cursor-arc wifi-cursor-arc-1"
            />

            {/* WiFi Signal Wave 2 (Middle) */}
            <path
              d="M 19.2 8.2 A 14.5 14.5 0 0 1 8.2 19.2"
              stroke="#FFFFFF"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeOpacity="0.78"
            />
            <path
              d="M 19.2 8.2 A 14.5 14.5 0 0 1 8.2 19.2"
              stroke="url(#wifiCursorGrad)"
              strokeWidth="2.3"
              strokeLinecap="round"
              className="wifi-cursor-arc wifi-cursor-arc-2"
            />

            {/* WiFi Signal Wave 3 (Outer) */}
            <path
              d="M 26.2 9.8 A 21 21 0 0 1 9.8 26.2"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeOpacity="0.7"
            />
            <path
              d="M 26.2 9.8 A 21 21 0 0 1 9.8 26.2"
              stroke={isPointer ? "#06B6D4" : "url(#wifiCursorGrad)"}
              strokeWidth="2.2"
              strokeLinecap="round"
              className="wifi-cursor-arc wifi-cursor-arc-3"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
