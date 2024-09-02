/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#333333',
        grey: '#737373',
        borders: '#D9D9D9',
        'bg-submit': '#633CFF',
      },
    },
  },
  plugins: [],
};
