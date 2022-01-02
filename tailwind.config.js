const NavHeight = '81px'

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
        nav: NavHeight,
      },
      flex: {
        100: '0 0 100%',
      },
      padding: {
        nav: NavHeight,
      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      fontFamily: {
        head: 'Monoton',
      },
      dropShadow: ({ theme }) => ({
        tpWhite: '1px 1px ' + theme('colors.tpWhite'),
      }),
      boxShadow: ({ theme }) => ({
        asBorder: '0 0 0 1px ' + theme('colors.tpBlack'),
      }),
      colors: ({ theme }) => ({
        accent: theme.colors.purple[800],
        accentLite: theme.colors.purple[200],
        accentDark: theme.colors.purple[900],
        tpWhite: 'rgba(255,255,255,.18)',
        tpBlack: 'rgba(0,0,0,.27)',
      }),
    },
    
  },
  variants: {},
  plugins: [],
}
