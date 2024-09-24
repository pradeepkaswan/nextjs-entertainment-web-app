import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      primary: "#FC4747",
      "dark-blue": {
        DEFAULT: "#10141E",
        light: "#161D2F",
      },
      "greyish-blue": "#5A698F",
    },
    textUnderlineOffset: {
      "primary-offset": "16px",
    },
  },
  plugins: [],
};
export default config;
