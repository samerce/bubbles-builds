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
  bottom: {
    nav: NavHeight,
  },
  fontSize: {
    '8xl': '6rem',
    '9xl': '7rem',
    '10xl': '8rem',
  },
  fontFamily: {
    head: 'bungee shade',
    body: 'yanone kaffeesatz',
    button: 'bayon',
  },
  dropShadow: ({ theme }) => ({
    tpWhite: '1px 1px ' + theme('colors.tpWhite'),
  }),
  colors: ({ theme }) => ({
    accent: '#92017a',
    accentLite: '#fff0fc',
    accentDark: '#1a0114',
    tpWhite: '#fff0fc21',
    tpBlack: '#1a011421',
    placeholder: '#fff0fc8c',
  }),
}

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './hooks/**/*.js',
    './model/**/*.js',
  ],
  theme: {
    extend: extensions,
  },
  variants: {},
  plugins: [],
}
