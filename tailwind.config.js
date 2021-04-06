module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class' or false
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
        '150': '150ms',
        '200': '200ms',
      },

      animation: {
        slideleft: 'slideleft 0.4s ease-in',
        slideright: 'slideright 0.4s ease-in',
        slideup: 'slideup 0.3s ease-in',
        growup: 'growup 0.3s ease-in',
        growdown: 'growdown 0.3s ease-in'
      },
      keyframes : {

        growdown: {
          "0%" :  {
              height: '100%'
          },
          "100%" :{
              height: '0%'
          }
        },

        growup: {
          "0%" :  {
              height: '0%'
          },
          "100%" :{
              height: '100%'
          }
        },

        slideleft: {
          "0%" :  {
              marginLeft: '120%'
          },
          "100%" :{
              marginLeft: '0'
          }
        },

        slideup: {
          "0%" :  {
              marginBottom: '10%'
          },
          "100%" :{
              marginBottom: '0'
          }
        },

        slideright:  {
          "0%" :  {
              marginLeft: '0'
          },
          "100%" :{
              marginLeft: '120%'
          }
        }
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
