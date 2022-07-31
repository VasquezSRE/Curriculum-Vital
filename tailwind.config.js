/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        500: '#0077FF',
        600: '#005FCC',
        700: '#004799',
        800: '#003066',
        900: '#001833',
        950: '#000C1A',
      },
      secondary: {
        500: '#24DBB7',
        600: '#00CCA3',
        700: '#00997A',
        800: '#006652',
        900: '#003329',
        950: '#001A14',
      },
      white: '#FFF',
    },
    extend: {},
  },
  plugins: [],
};
