/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'ai-black': '#0A0A0A',
        'ai-gray': '#1A1A1A',
      },
    },
  },
  plugins: [],
};