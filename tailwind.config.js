/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode based on a class (for toggling between light and dark themes)
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Tells Tailwind where to look for class names to generate styles
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette if you want to add specific brand colors
        primary: '#1D4ED8', // Example of adding a primary color (blue)
        secondary: '#6EE7B7', // Example of a secondary color (green)
        danger: '#EF4444', // Example of a danger color (red)
      },
    },
  },
  plugins: [],
};
