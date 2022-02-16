const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      darkBlue: '#0E172A',
      lightblue: '#0EA4E9',
      greenBlue: '#1D588A',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red
    }
  },
  plugins: [],
}
