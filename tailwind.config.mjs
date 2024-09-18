/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        green: "#134A28",
        black: "#010101",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
