"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Smoothly animates verified numeric strings (e.g. "1,200+", "100G", "99.99%", "< 15m", "24/7/365")
 * when scrolled into view using IntersectionObserver + requestAnimationFrame.
 */
export default function AnimatedCounter({
  value,
  duration = 1600,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState<string>(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    // Parse first numeric token (supports commas and decimals like 1,200 or 99.99)
    const match = value.match(/^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const numStr = match[2];
    const suffix = match[3];
    const hasComma = numStr.includes(",");
    const decimalPart = numStr.split(".")[1];
    const decimals = decimalPart ? decimalPart.length : 0;
    const target = parseFloat(numStr.replace(/,/g, ""));

    const formatNumber = (n: number) => {
      const fixed = n.toFixed(decimals);
      if (!hasComma) return fixed;
      const parts = fixed.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = performance.now();

            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = target * eased;
              setDisplayValue(`${prefix}${formatNumber(current)}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(value);
              }
            };

            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
