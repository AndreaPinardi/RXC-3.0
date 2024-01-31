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
        primary: "var(--base---primary)",
        secondary: "var(--light---primary)",
      },
      fontFamily: {
        primary: "var(--font--primary)",
        secondary: "var(--font--secondary)",
      },
    },
  },
  plugins: [],
};
export default config;
