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
          text: {
            DEFAULT: '#d4d4d4',
            dark: '#1f1f1f',
          },
          background: {
            DEFAULT: '#0e0e0e',
            100: '#0e0e0e',
            200: '#1a1a1a',
            300: '#262626',
            400: '#333333',
            500: '#4d4d4d',
            600: '#6b6b6b',
            700: '#898989',
            800: '#b6b6b6',
            900: '#e2e2e2'
          }
        },
        brand: {
          DEFAULT: '#409d9d',
          100: '#102121',
          200: '#1f3d3d',
          300: '#2e5959',
          400: '#3d7676',
          500: '#409d9d',
          600: '#5bb3b3',
          700: '#83c8c8',
          800: '#b3dddd',
          900: '#e0f3f3'
        },
        accent: {
          DEFAULT: '#8a6a89',
          100: '#1c141b',
          200: '#392935',
          300: '#574050',
          400: '#755668',
          500: '#8a6a89',
          600: '#a3849f',
          700: '#be9fba',
          800: '#d9c0d7',
          900: '#f2e4f1'
        }
      },
    },
  },
plugins: [],
}
