import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "Segoe UI", "Roboto", "Arial"],
        display: ["var(--font-display)", "system-ui", "Georgia"],
      },
      colors: {
        bg: "hsl(var(--bg))",
        card: "hsl(var(--card))",
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        gold: "hsl(var(--gold))",
        gold2: "hsl(var(--gold2))",
        accent: "hsl(var(--accent))",
        accent2: "hsl(var(--accent2))",
      },
      boxShadow: {
        luxe: "0 18px 60px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(255,215,120,.08), 0 30px 80px rgba(0,0,0,.45)",
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 10% 10%, rgba(255,215,120,.12), transparent 40%), radial-gradient(circle at 90% 20%, rgba(180,120,255,.10), transparent 45%), radial-gradient(circle at 30% 90%, rgba(60,220,180,.08), transparent 45%)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
