/** @type {import('tailwindcss').Config} */
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: colors.teal,
      secondary: colors.orange,
      neutral: colors.gray,
      white: '#FFF',
    },
    extend: {},
  },
  plugins: [],
};
