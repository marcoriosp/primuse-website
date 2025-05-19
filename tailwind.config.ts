import type { Config } from "tailwindcss";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react/class-list.json"
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
  plugins: [flowbiteReact],
};

export default config;