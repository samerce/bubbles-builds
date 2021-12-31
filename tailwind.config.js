module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ],
  theme: {
    extend: {
      width: {
        54: '54px',
        108: '108px',
      },
      height: {
        54: '54px',
        108: '108px',
      },
      flex: {
        100: '0 0 100%',

      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      fontFamily: {
        head: 'Monoton',
      },
      textShadow: {
        'text-shadow-1': '1px 1px black',
      },
    },
    
  },
  variants: {},
  plugins: [],
}
