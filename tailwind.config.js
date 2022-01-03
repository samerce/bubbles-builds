const NavHeight = '108px'

const extensions = {
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
    head: 'bungee shade',
    body: 'bentham',
    button: 'bayon',
  },
  dropShadow: ({ theme }) => ({
    tpWhite: '1px 1px ' + theme('colors.tpWhite'),
  }),
  colors: ({ theme }) => ({
    accent: '#4f1a99',
    accentLite: '#f4ebff',
    accentDark: '#18082e', 
    tpWhite: 'rgba(244, 235, 255,.18)',
    tpBlack: 'rgba(24, 8, 46,.27)',
  }),
}

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
    extend: extensions,
  },
  variants: {},
  plugins: [],
}
