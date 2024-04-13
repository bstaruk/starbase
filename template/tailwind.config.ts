import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: '"PT Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      serif: '"PT Serif", "Palatino", "Palatino Linotype", "Palatino LT STD", "Book Antiqua", "Georgia", serif',
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config

