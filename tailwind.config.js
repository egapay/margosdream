/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily:{
      manropeExtraLight: ["manropeExtraLight", "sans-serif"],
      manropeLight: ["manropeLight", "sans-serif"],
      manrope: ["manrope", "sans-serif"],
      manropeSemiBold: ["manropeSemiBold", "sans-serif"],
      manropeMedium: ["manropeMedium", "sans-serif"],
      manropeBold: ["manropeBold", "sans-serif"],
      manropeExtraBold: ["manropeExtraBold", "sans-serif"],
      
    },
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
      siteBackground: '#F8F8FF'
    },
    extend: {
      animation: {
        fadeIn1: 'fadeIn 1s ease-in',
        fadeIn2: 'fadeIn 2.05s ease-in',
        fadeIn3: 'fadeIn 2.1s ease-in',
        fadeIn4: 'fadeIn 2.15s ease-in',
        fadeIn5: 'fadeIn 2.2s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

