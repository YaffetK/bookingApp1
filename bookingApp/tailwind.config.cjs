/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: "#4a52c4",
        lblue: "#54c0cf",
        grays: "#d3cecf",
      },
    },
  },
  plugins: [],
};
