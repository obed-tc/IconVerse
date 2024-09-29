/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#effaff',
          '100': '#def3ff',
          '200': '#b6eaff',
          '300': '#75dbff',
          '400': '#2cc9ff',
          '500': '#00a8e8',
          '600': '#008fd4',
          '700': '#0072ab',
          '800': '#00608d',
          '900': '#065074',
          '950': '#04334d',
        },
      },
    },
  },
  plugins: [],
};
