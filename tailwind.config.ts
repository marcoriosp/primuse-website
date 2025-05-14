import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        background: "rgb(var(--background))",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundColor: {
        'primary': 'rgb(var(--primary))',
        'dark': 'rgb(var(--background))',
      },
    },
  },
  plugins: [],
};

export default config;