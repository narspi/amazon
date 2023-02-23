/** @type {import('tailwindcss').Config} */
const lineClump = require('@tailwindcss/line-clamp');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921"
        }
      }
    },
  },
  plugins: [
    lineClump
  ],
}
