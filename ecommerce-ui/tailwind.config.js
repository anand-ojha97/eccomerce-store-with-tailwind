/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default-green': '#81C408',  // Adding a custom hex color
      },
    },
  },
  plugins: [],
}

