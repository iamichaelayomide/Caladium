import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        dm: ["var(--font-dm-sans)", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#111111",
        body: "#3A3A3A",
        muted: "#6B6B6B",
        faint: "#A0A0A0",
        surface: "#FFFFFF",
        soft: "#F8F7F5",
        border: "#E8E8E4",
        accent: {
          DEFAULT: "#1A6B4A",
          hover: "#145A3D",
          light: "#EAF5EF",
          text: "#0F4A33"
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#FBF6E9"
        },
        dark: {
          DEFAULT: "#111111",
          surface: "#1A1A1A",
          border: "#2A2A2A"
        }
      },
      fontSize: {
        label: ["11px", { lineHeight: "1", letterSpacing: "0.12em" }]
      },
      boxShadow: {
        card: "0 2px 24px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.10)",
        overlay: "0 32px 80px rgba(0,0,0,0.18)"
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
