/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*js"],
  theme: {
    extend: {
      screens: {
        'xs': '0px'
      },
      spacing: {
        '53': '13.6rem'
      }
    },
  },
  plugins: [
  ],
}

