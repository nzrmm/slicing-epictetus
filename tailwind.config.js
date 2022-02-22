const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js, ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        xl: '3rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    fontFamily: {
      sans: ['Patrick Hand', 'cursive'],
    },
    extend: {
      colors: {
        dark: {
          500: '#4B5563',
          600: '#374151',
          700: '#1F2937',
          800: '#111827',
        },
        typo: colors.neutral,
      },
    },
  },
  plugins: [],
};
