import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      quantico: ["var(--font-roboto-quantico)"],
      outfit: ["var(--font-outfit)"],
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "pastel": {
        extend: "dark",
        colors: {
          background: "#0d0c0c",
          foreground: "#F6FDC3",
          primary: {
            300: "#F7A8B2",
            600: "#EE8C98",
            900: "#E5707E",
            DEFAULT: "#E5707E",
            foreground: "#A3DDCB",
          },
          secondary: {
            300: "#F8DEBD",
            600: "#FCD7AA",
            900: "#FFCF96",
            DEFAULT: "#FFCF96",
            foreground: "#FFCF96",
          }
        },
      },
    },
  })],
};
export default config;
