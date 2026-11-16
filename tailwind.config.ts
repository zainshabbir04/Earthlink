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
        // Exact colors extracted from logo-color.png:
        // 1. "EARTH" & Signal Waves Cyan: #19A2E6
        // 2. "LINK" & Swoosh Jet Black: #0B0D10 / #14171C
        // 3. "Broadband (Pvt). Ltd." Grey: #757679
        brand_cyan: "#19A2E6",
        brand_blue: "#0D84C4",
        brand_black: "#0B0D10",
        brand_charcoal: "#15181F",
        brand_grey: "#757679",
        dimgray: "#ECEEF2",
        zinc: "#D8DCE3",
        lightwhite: "#111317",
        skyblue: "#19A2E6",
        blue: "#0D84C4",
        purple: "#15181F",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        "cyan-glow": "0 10px 30px -5px rgba(25, 162, 230, 0.32)",
        "cyan-glow-lg": "0 18px 45px -8px rgba(25, 162, 230, 0.42)",
        "card-premium": "0 12px 34px -8px rgba(11, 13, 16, 0.08)",
        "card-hover": "0 20px 44px -10px rgba(25, 162, 230, 0.22)",
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
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.06)", opacity: "1" },
        },
        fadeInOutSmooth: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDash: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        rotateImage: "rotateImage 28s linear infinite",
        rotateReverse: "rotateReverse 34s linear infinite",
        breathe: "breathe 5s ease-in-out infinite",
        fadeInOutSmooth: "fadeInOutSmooth 4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        pulseDash: "pulseDash 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
