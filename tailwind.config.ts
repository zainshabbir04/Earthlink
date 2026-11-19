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
        brand_cyan: "#2EC1D9",
        brand_blue: "#008FFF",
        brand_blue_alt: "#1591EE",
        dimgray: "#141414",
        zinc: "#272727",
        light_white: "#D3D3D3",
        brand: {
          cyan: "#2EC1D9",
          cyanLight: "#38BDF8",
          cyanDark: "#008FFF",
          navy: "#050505",
          navyLight: "#0D0D0D",
          navyCard: "#000000",
          charcoal: "#D3D3D3",
          slate: "#9C9C9C",
          surface: "#0A0A0A",
          surfaceAlt: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        roboto: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "glow-cyan": "0 0 35px -5px rgba(46, 193, 217, 0.35)",
        "glow-cyan-sm": "0 0 20px -4px rgba(0, 143, 255, 0.35)",
        "card-premium": "0 10px 35px -10px rgba(0, 0, 0, 0.7)",
        "card-hover": "0 20px 45px -12px rgba(46, 193, 217, 0.22)",
      },
      keyframes: {
        rotateImage: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(0.94)", opacity: "0.9" },
          "50%": { transform: "scale(1.06)", opacity: "1" },
        },
        fadeInOutSmooth: {
          "0%, 100%": { transform: "translateY(0px)", opacity: "0.88" },
          "50%": { transform: "translateY(-6px)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rotateImage: "rotateImage 28s linear infinite",
        breathe: "breathe 4.5s ease-in-out infinite",
        fadeInOutSmooth: "fadeInOutSmooth 4s ease-in-out infinite",
        marquee: "marquee 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
