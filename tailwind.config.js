/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './index.html',],
  theme: {
    extend: {
      colors: {
        'body': '#121D38',
        'green-selected-text': '#A3C8AB',
        'pink-selected-text': '#B26B9F',
        'regular-text': '#FFFFFF',
        'green': '#A3C8AB',
        'pink': '#B26B9F'

      }, 
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      fontFamily: {
        'folklore': ['IM FELL DW Pica', 'sans-serif']
      }
    },
  },
}
