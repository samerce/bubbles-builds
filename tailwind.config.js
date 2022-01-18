const defaultTheme = require('tailwindcss/defaultTheme')
const NavHeightBig = '108px'
const NavHeight = '81px'

const extensions = {
  width: {
    54: '54px',
    108: '108px',
  },
  height: {
    54: '54px',
    108: '108px',
    nav: NavHeight,
    navBig: NavHeightBig,
  },
  flex: {
    100: '0 0 100%',
  },
  padding: {
    2: '9px',
    7: '27px',
    nav: NavHeight,
    navBig: NavHeightBig,
  },
  bottom: {
    nav: NavHeight,
    navBig: NavHeightBig,
  },
  fontSize: {
    '8xl': '6rem',
    '9xl': '7rem',
    '10xl': '8rem',
  },
  fontFamily: {
    head: 'bungee shade',
    title: 'bungee shade',
    body: 'crimson pro',//'yanone kaffeesatz',
    button: 'bayon',
    header: 'bayon',
  },
  dropShadow: ({ theme }) => ({
    tpWhite: '1px 1px ' + theme('colors.tpWhite'),
  }),
  colors: ({ theme }) => ({
    accent: '#92017a',
    accentLite: '#ff01d5',
    accentWhite: '#fff0fc',
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
    screens: {
      '2xs': '375px',
      xs: '400px',
      ...defaultTheme.screens,
    },
  },
  variants: {},
  plugins: [],
}
