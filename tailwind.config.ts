import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        green: "#4BB543",
        "light-green": "rgba(38, 220, 100, 0.14)",
        dark: "#161616",
        "dark-15": "rgba(22, 22, 22, 0.15)",
        primary: "#AF812B",
        "primary-secondary": "#B78E40",
        "primary-light": "#F7F2EA",
        "primary-medium": "#E7D9BF",
        secondary: "#F7F2EA",
        "light-secondary": "#E6E6E6",
        error: "#D9534F",
        gray: "#636363",
        "light-gray": "#FAFAFA",
        "lighter-gray": "#EBEBEB",
        "gray-60": "rgba(255,255,255,0.6)",
        "gray-10": "rgba(255,255,255,0.1)",
        "gray-80": "rgba(255,255,255,0.8)",
        red: "#DC2626",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)"],
        platypi: ["var(--font-platypi)"],
      },
    },
  },
  plugins: [],
};

export default config;
