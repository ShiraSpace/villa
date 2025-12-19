import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Luxury gold palette
        gold: {
          50: "#fdfaf3",
          100: "#f9f1e1",
          200: "#f2e0bd",
          300: "#e9cb94",
          400: "#ddb16a",
          500: "#d4984d", // Primary gold
          600: "#c17d3d",
          700: "#a06234",
          800: "#825032",
          900: "#6b422b",
        },
        // Neutral luxury tones
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        // Accent colors
        ocean: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          700: "#0369a1",
        },
      },
      fontFamily: {
        // Luxury serif for headings
        serif: ["Playfair Display", "Georgia", "serif"],
        // Clean sans for body
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        hero: ["3.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      backgroundImage: {
        "gradient-luxury":
          "linear-gradient(135deg, #d4984d 0%, #a06234 100%)",
        "gradient-dark":
          "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        luxury: "0 10px 40px rgba(0, 0, 0, 0.1)",
        "luxury-lg": "0 20px 60px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
} satisfies Config;
