/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxl': {'min': '1280px', 'max': '1440px'},
      // => @media (max-width: 1440px) { ... }

      'xl': {'min': '1024px', 'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'min': '769px', 'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'min': '640px', 'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'min': '0px','max': '639px'},
      // => @media (max-width: 639px) { ... }

      'spxx': {'min': '320px', 'max': '320px'},

      'spxxx': {'min': '375px', 'max': '375px'},

      'sp': {'min': '360px', 'max': '360px'},

      'spx': {'min': '428px', 'max': '428px'},

      //android responsiveness
      'nx': {'min': '376px', 'max': '425px'},

      'nxx': {'min': '321px', 'max': '375px'},

      'nxxx': {'min': '0px', 'max': '320px'},

      'yx': {'min': '426px', 'max': '768px'}
    },
  },
  plugins: [],
}
