/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{html,js}',
  './pages/**/*.{html,js}',
  './index.html',],
  theme: {
    screens: {
      'xs': '414px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      
      colors: {
        'body': '#294283',
        'green-selected-text': '#A3C8AB',
        'pink-selected-text': '#B26B9F',
        'regular-text': '#FFFFFF',
        'yellow': '#DEBD69',
        'green': '#5dbc70',
        'blue': '#A9E0FF',
        'pink': '#de5499'

      }, 
    
      fontFamily: {
        'folklore': ['IM FELL DW Pica', 'sans-serif']
      },
      keyframes:{
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },

      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },


    },
  },
}
