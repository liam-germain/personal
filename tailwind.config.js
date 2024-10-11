module.exports = {
  content: [
    "./apps/v2/src/**/*.{js,ts,jsx,tsx}",
    "./apps/v2/src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#D1D5DB',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}