/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Tight", "sans-serif"],
      },
      screens:{
        'desktop': '1920px',
      }
    },
  },
  plugins: [],
});
