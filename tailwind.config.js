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
        sans: ["Cabin", "sans-serif"],
        headings:["Raleway", "sans-serif"]
      },
      screens:{
        'desktop': '1920px',
      }
    },
  },
  plugins: [],
});
