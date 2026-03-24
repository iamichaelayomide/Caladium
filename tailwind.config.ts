import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1200px"
        }
      },
      fontFamily: {
        bricolage: ["var(--font-bricolage)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      colors: {
        bg: "#F8F8F6",
        surface: "#FFFFFF",
        border: "#E8E8E8",
        ink: "#141414",
        muted: "#6B6B6B",
        faint: "#A1A1A1",
        accent: "#1A6B4A",
        "accent-light": "#E8F5EF",
        "accent-hover": "#145A3D",
        gold: "#C9A84C",
        "gold-light": "#FBF6E9",
        pastel: {
          green: "#D4EDE1",
          gold: "#F5EDCF",
          blue: "#D6E8FF",
          warm: "#F5EDE6",
          purple: "#EDD6FF"
        }
      },
      boxShadow: {
        card: "0 4px 32px rgba(0,0,0,0.07)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.12)",
        soft: "0 2px 20px rgba(0,0,0,0.06)"
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 4s ease-in-out infinite",
        morph: "morphBlob 8s ease-in-out infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        morphBlob: {
          "0%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
          "25%": { borderRadius: "58% 42% 75% 25% / 76% 46% 54% 24%" },
          "50%": { borderRadius: "50% 50% 33% 67% / 55% 27% 73% 45%" },
          "75%": { borderRadius: "33% 67% 58% 42% / 63% 68% 32% 37%" },
          "100%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
