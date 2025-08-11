/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./assets/**/*.js",
  ],
  theme: {
    screens: {
      sm: { max: '639px' },
      md: { max: '767px' },
      lg: { max: '1023px' }
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      },
      colors: {
        // Status Palette
        status: {
          success: {
            DEFAULT: "#38663C",
            dark: "#27492B"
          },
          info: {
            DEFAULT: "#3A4591",
            dark: "#23295C"
          },
          warning: {
            DEFAULT: "#855F37",
            dark: "#5C3F1F"
          },
          danger: {
            DEFAULT: "#83393E",
            dark: "#5A262A"
          }
        },
        // Main Palette
        brand: {
          DEFAULT: '#588157',          // fern_green DEFAULT
          dark: '#3a5a40',             // hunter_green DEFAULT
          light: '#96b795',            // fern_green 700
        },
        accent: {
          DEFAULT: '#a3b18a',          // sage DEFAULT
          dark: '#344e41',             // brunswick_green DEFAULT
          light: '#dae0d0',            // sage 800
        },
        background: {
          lightest: '#f8f7f5',         // timberwolf 900
          lighter: '#e9e7e1',          // timberwolf 700
          DEFAULT: '#dad7cd',          // timberwolf DEFAULT
          dark: '#615b48',             // timberwolf 200
        },
        text: {
          primary: '#312e24',          // timberwolf 100
          secondary: '#f0efeb',        // timberwolf 800
          tertiary: '#859865',         // sage 400
          muted: '#466645',            // fern_green 400
        },
        border: {
          DEFAULT: '#2e4833',          // hunter_green 400
          light: '#a3c2b3',            // brunswick_green 800
        }
      },
    },
  },
plugins: [],
}
