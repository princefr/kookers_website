module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class' or false
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
        '150': '150ms',
        '200': '200ms',
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat']
    }
  },
  variants: {
    extend: {
      opacity: ['disabled', 'checked'],
      backgroundColor: ['disabled', 'checked']
      
    },
  },
  plugins: [],
}
