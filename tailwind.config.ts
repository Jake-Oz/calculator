import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      mainbackground: "var(--color-main-background)",
      togglebackground: "var(--color-toggle-background)",
      keypadbackground: "var(--color-keypad-background)",
      screenbackground: "var(--color-screen-background)",
      keybackground: "var(--color-key-background)",
      keyshadow: "var(--color-key-shadow)",
      toggle: "var(--color-toggle)",
      toggleshadow: "var(--color-toggle-shadow)",
      keylight: "var(--color-key-light)",
      keylightshadow: "var(--color-key-light-shadow)",
      text: "var(--color-text)",
      textwhite: "var(--color-text-white)",
      textyellow: "var(--color-text-yellow)",
    },
  },
  plugins: [],
};

export default config;
