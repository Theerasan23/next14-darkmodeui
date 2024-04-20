import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "parallax": "url('../public/wallpapers/business.jpg')",
        "login": "url('../public/wallpapers/business.jpg')",
        "b-fix": "bg-fixed bg-cover",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
