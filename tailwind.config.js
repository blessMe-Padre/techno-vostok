/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'ss': '451px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'brown': '#625F4F',
      // ---------------------------------
      'main-black': '#262626',
      'default-black': '#000000',
      'light-black': '#5E5D5C',
      'light-gray': '#CBCBCB',
      'light-blue': '#93AAD6',
      'blue': '#81B8F9',
      'green': '#D1D618',
      'dark-green': '#102E30',
      'light-green': '#254D57',
      'light-green2': '#2F616D',
      'dark-blue': ' #0F3E52',
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'bodyFont': ['archangelsk', 'regular'],
      }
    }
  },
  plugins: [],
}

