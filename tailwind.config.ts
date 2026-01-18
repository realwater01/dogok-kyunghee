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
        primary: "#3D3D3D",
        secondary: "#FAFAF8",
        accent: "#A08060",
        "accent-hover": "#8B7355",
        cream: "#F5F0E8",
        "brown-bg": "#E8DFD3",
        brown: {
          light: "#D4C4B0",
          DEFAULT: "#C9B99A",
          dark: "#8B7355",
          bg: "#E8DFD3",
        },
        text: {
          DEFAULT: "#4A4A4A",
          light: "#7A7A7A",
        }
      },
      fontFamily: {
        sans: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        title: ["GyeonggiTitle", "Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
