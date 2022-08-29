/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        smokeyBlack: "#090C02",
        beige: "#DDE2C6",
        beige2: "#E6EED6",
        laurelGreen: "#BBC5AA",
        rufous: "#A72608",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      boxShadow: {
        deep: "0px 3px 3px 5px #2D2A32",
      },
    },
  },
  plugins: [],
};
