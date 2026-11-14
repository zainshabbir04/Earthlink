import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand_cyan: "#0FA4E8",
        brand_blue: "#0284C7",
        brand_blue_alt: "#0369A1",
        dimgray: "#F8FAFC",
        zinc: "#E2E8F0",
        light_white: "#334155",
        brand: {
          cyan: "#0FA4E8",
          cyanLight: "#38BDF8",
          cyanDark: "#0284C7",
          navy: "#0F172A",
          navyLight: "#1E293B",
          navyCard: "#FFFFFF",
          charcoal: "#0F172A",
          slate: "#475569",
          surface: "#F8FAFC",
          surfaceAlt: "#F0F9FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        roboto: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "glow-cyan": "0 12px 35px -6px rgba(15, 164, 232, 0.35)",
        "glow-cyan-sm": "0 6px 20px -4px rgba(15, 164, 232, 0.25)",
        "card-premium": "0 10px 30px -8px rgba(15, 23, 42, 0.06)",
        "card-hover": "0 20px 45px -10px rgba(15, 164, 232, 0.18)",
      },
      keyframes: {
        rotateImage: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotateReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.05)" },
        },
        fadeInOutSmooth: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDash: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        rotateImage: "rotateImage 26s linear infinite",
        rotateReverse: "rotateReverse 34s linear infinite",
        breathe: "breathe 4s ease-in-out infinite",
        fadeInOutSmooth: "fadeInOutSmooth 3.8s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
        pulseDash: "pulseDash 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
