/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],

        josefin: ["Josefin Sans", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        circular: ["circular", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animations")],
};
