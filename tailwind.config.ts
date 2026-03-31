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
        background: "var(--background)",
        foreground: "var(--foreground)",
        obsidian: "#010101",
        charcoal: "#0A0A0A",
        gold: "#D4AF37",
        "gold-hover": "#b8952b",
      },
      fontFamily: {
        sans: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
      }
    },
  },
  plugins: [],
};
export default config;
