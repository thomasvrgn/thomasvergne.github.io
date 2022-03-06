const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    // Children variants
    plugin(function ({ addVariant }) {
      addVariant('children', '& > *');
    }),
  ],
}
