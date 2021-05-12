const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors,
    },
  },
  variants: {
    extend: {
      fontWeight: ['dark'],
      textColor: ['dark', 'children', 'children-hover'],
      transitionProperty: ['children'],
      transitionDuration: ['children'],
    },
  },
  plugins: [
    require('./plugins/children'),
  ],
}
