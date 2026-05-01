import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        "cyklos-navy": "var(--cyklos-navy)",
        "cyklos-cyan": "var(--cyklos-cyan)",
        "cyklos-purple": "var(--cyklos-purple)",
        "cyklos-dark": "var(--cyklos-dark)",
        "cyklos-slate": "var(--cyklos-slate)",
        "cacambar-orange": "var(--cacambar-orange)",
        "cacambar-dark": "var(--cacambar-dark)",
      },
    },
  },
  plugins: [],
};

export default config;
