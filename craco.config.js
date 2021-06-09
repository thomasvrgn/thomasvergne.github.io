// craco.config.js
if (process.env.NODE_ENV.startsWith('dev'))
  require('dotenv').config();
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};