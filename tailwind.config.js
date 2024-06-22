// npm install -D tailwindcss
//npx tailwindcss init
//npx tailwindcss -i ./css/input.css -o ./css/style.css --watch
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'surface':'#121212',//Background
        'surfaceInverted':'#2e2e2e',//Background Inverted
        'onSurface':'#D1D1D1',//Text on Background
        'surfaceContainerLow':'#D1D1D1',//Container on background
        'surfaceContainer':'#1e1e1e',//Container on background
        'surfaceContainerHigh':'#D1D1D1',//Container on background
        'primary':'#ffe3f4',//Primary Color
        'onPrimary':'#F2F2F2',//Text on Primary Color
        'secondary':'#fff0f5',//Yada Yada...
        'onSecondary':'#1A1A1A',
        'tertiary':'#E34234',
        //'onTertiary':'#F2F2F2',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

