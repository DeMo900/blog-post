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
        neutral: {},
        brand: {},
        accent: {},
      },
    },
  },
  plugins: [],
}
