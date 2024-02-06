import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color--primary)",
        secondary: "var(--color--secondary)",
        lightGray: "var(--Base-Gray-Ultra-light)",
        mediumGray: "var(--Base-Gray-Medium)",
      },
      fontFamily: {
        primary: "var(--font--primary)",
        secondary: "var(--font--secondary)",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
export default config;
