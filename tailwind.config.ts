import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: "var(--color-primary)",
      //   secondary: "var(--color-secondary)",
      //   accent: "var(--color-accent)",
      //   background: "var(--color-background)",
      //   text: "var(--color-text)",
      //   header: "var(--color-header)",
      //   footer: "var(--color-footer)",
      //   sidebar: "var(--color-sidebar)",
      //   gray: {
      //     100: "var(--color-gray-100)",
      //     200: "var(--color-gray-200)",
      //     300: "var(--color-gray-300)",
      //   },
      // },
    },
  },
  plugins: [],
};
export default config;
