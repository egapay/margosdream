/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors:{
      primary1: "#E3B313",
      secondary: "#CFC2C9",
      accent1: "#DF4A69",
      accent2: "#57ACD3",
      transparent: 'transparent',
      navbarClear: 'rgba(51, 51, 51, 0.6)',
      navbarSolid: '#000000',
      black: '#000',
      white: '#fff',
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

