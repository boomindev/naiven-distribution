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
        background: "#080808",
        surface: "#111111",
        "surface-elevated": "#171717",
        border: "#222222",
        "border-light": "#2f2f2f",
        /* Accent color: Emerald [COLOR] */
        accent: {
          DEFAULT: "#10b981",
          hover: "#34d399",
          muted: "rgba(16, 185, 129, 0.15)",
          border: "rgba(16, 185, 129, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widestx: "0.25em",
        ultra: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
