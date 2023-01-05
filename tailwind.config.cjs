/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        hoverGray: '#c1c1c19e'
      },
      backgroundImage: {
        darkTheme: 'url("./src/assets/dark-theme.webp")',
        lightTheme: 'url("./src/assets/light-theme.webp")'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
