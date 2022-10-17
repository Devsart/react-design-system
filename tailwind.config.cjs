/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors:{
      black:'#000',
      white:'#fff',
      gray: {
        900:'#121214',
        800:'#202024',
        400:'#7c7c8a',
        200:'#c4c4cc',
        100:'#e1e1e6',
      },
      cyan:{
        500:'#81d8f7',
        300:'#a5e7ff',
      }
    },
    extend: {
      keyframes:{
        float: {
          '0%': {
            boxshadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
            transform: 'translatey(0px)'
          },
          '50%': {
            boxshadow: '0 25px 15px 0px rgba(0,0,0,0.2)',
            transform: 'translatey(-20px)',
          },
          '100%': {
            boxshadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
            transform: 'translatey(0px)'
          },
        }
      },
      fontFamily:{
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
