/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        xs: "0.65rem",
        sm: "0.8rem",
        base: "0.96rem",
        xl: "1.25rem",
        "2xl": "1.463rem",
        "3xl": "1.88rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      colors: {
        green: "#134A28",
        black: "#010101",
        white: "#ffffff",
        gray: "#707070",
      },
      backgroundImage: {
        lawyer: "url('/src/assets/images/find-a-lawyer.jpg')",
      },
      backgroundPosition: {
        "center-bottom": "center bottom",
        "left-top": "left top",
        "left-bottom": "left bottom",
        "right-bottom": "right bottom",
        "right-top": "right top",
      },
    },
  },
  plugins: [],
};
