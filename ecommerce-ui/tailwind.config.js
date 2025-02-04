/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default-green': '#81C408',
        'default-gold':'#FFB524', // Adding a custom hex color
        'footer-bg':'#45595b',
        'theme-gray':'#f4f6f8',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add the font family
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(rgba(255, 181, 36, 0.7), rgba(255, 181, 36, 0.7))',
      },
      boxShadow: {
        'custom-shadow': '0px 0px 55px rgba(0, 0, 0, 0.4)',  // Your custom shadow
      },
      scale: {
        '120': '1.2', // Adding scale 1.2
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1280px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '820px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

