/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eefdfc",
          100: "#d3f9fa",
          200: "#acf1f5",
          300: "#73e6ed",
          400: "#32d1de",
          500: "#17b4c3",
          600: "#1693a7",
          700: "#187486",
          800: "#1d5e6d",
          900: "#1c4f5d",
          950: "#0d343f",
        },
      },
    },
  },
  plugins: [],
};
