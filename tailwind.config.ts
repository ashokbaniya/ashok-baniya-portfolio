import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        "background-alt": "var(--background-alt)",
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-dim": "var(--primary-dim)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px var(--border), 0 0 40px -10px rgba(57, 255, 136, 0.35)",
        "glow-sm": "0 0 20px -6px rgba(57, 255, 136, 0.45)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
