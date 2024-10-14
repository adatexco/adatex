/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      alegreya: ["Alegreya Sans", "sans-serif"],
    },
    input: {
      styles: {
        base: {
          container: {
            minWidth: "min-w-[10px]",
          },
        },
      },
    },
    extend: {
      screens: {
        less: { raw: "(max-width: 639px)" },
      },
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        primary: "#3c3c3b",
        secondary: "#42403f",
        heading: "#000000",
        background: "#efeff1",
      },
    },
  },
  plugins: [],
});
