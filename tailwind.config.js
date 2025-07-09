/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#2563EB',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        secondary: {
          50: '#ecfdf5',
          500: '#059669',
          600: '#047857',
          700: '#065f46',
        },
        accent: {
          500: '#DC2626',
          600: '#b91c1c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}