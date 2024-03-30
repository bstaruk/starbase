const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: '"PT Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
