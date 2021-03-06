const defaultTheme = require('tailwindcss/defaultTheme')
const NavHeightBig = '108px'
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
    head: 'denk one, sans-serif',
    title: 'denk one, sans-serif',
    body: 'crimson pro',//'yanone kaffeesatz',
    button: 'bayon, sans-serif',
    header: 'bayon, sans-serif',
  },
  dropShadow: ({ theme }) => ({
    tpWhite: '1px 1px ' + theme('colors.tpWhite'),
  }),
  colors: ({ theme }) => ({
    accent: '#92017a',
    accentLite: '#ff01d5',
    accentDark: '#500143',
    accentWhite: '#fff0fc',
    accentBlack: '#1a0114',
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
