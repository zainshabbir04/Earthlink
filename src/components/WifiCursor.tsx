"use client";

import React, { useEffect, useState } from "react";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export default function WifiCursor() {
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  useEffect(() => {
    let rippleId = 0;

    const handleDown = (e: MouseEvent) => {
      const id = ++rippleId;
      setRipples((prev) => [...prev.slice(-3), { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 520);
    };

    window.addEventListener("mousedown", handleDown);
    return () => window.removeEventListener("mousedown", handleDown);
  }, []);

  return (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          style={{ left: r.x, top: r.y }}
          className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-[#008FFF] animate-wifiClickRipple"
        />
      ))}
    </>
  );
}
