/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Status Palette
        status: {
          success: "#48864D",
          info: "#4A57BA",
          warning: "AD7E48",
          danger: "#A5494F",
        },
        // Main Palette
        neutral: {
          light: {
            DEFAULT: '#d1d1d1',
            100: '#2a2a2a',
            200: '#545454',
            300: '#7d7d7d',
            400: '#a7a7a7',
            500: '#d1d1d1',
            600: '#dadada',
            700: '#e3e3e3',
            800: '#ededed',
            900: '#f6f6f6'
          },
          dark: {
            DEFAULT: '#040f0f',
            100: '#010303',
            200: '#020606',
            300: '#030a0a',
            400: '#030d0d',
            500: '#040f0f',
            600: '#195d5d',
            700: '#2dabab',
            800: '#64d6d6',
            900: '#b2eaea'
          }
        },
        brand: {
          DEFAULT: '#51a3a3',
          100: '#102121',
          200: '#204242',
          300: '#306262',
          400: '#418383',
          500: '#51a3a3',
          600: '#71b9b9',
          700: '#94caca',
          800: '#b8dcdc',
          900: '#dbeded'
        },
        accent: {
          DEFAULT: '#827081',
          100: '#1a1619',
          200: '#332d33',
          300: '#4d434c',
          400: '#675966',
          500: '#827081',
          600: '#9a8b9a',
          700: '#b4a8b3',
          800: '#cdc5cc',
          900: '#e6e2e6'
        },
      },
    },
  },
plugins: [],
}
