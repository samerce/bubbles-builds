import SIcon from 'supercons'
import { animated } from 'react-spring'

export const Button = (p) => (
  <animated.button {...p} className={ButtonClasses + p.className}>
  </animated.button>
)

export const Link = (p) => (
  <a {...p} className={ButtonClasses + p.className}>
  </a>
)

export const Header = (p) => (
  <h1 {...p}
  className={'font-head mx-auto my-16 text-5xl text-shadow-6 drop-shadow-2xl uppercase ' + p.className}>
  </h1>
)

export const PageTitle = (p) => (
  <div {...p} className={'self-center text-white text-center text-10xl uppercase font-head text-shadow-6 drop-shadow-2xl ' + p.className}>
  </div>
)

export const Icon = (p) => (
  <SIcon {...p} glyph={p.name} />
)

var ButtonClasses = ' rounded-3xl glass text-accent border-width-1 border-tpWhite shadow-asBorder text-shadow-tpWhite font-head lowercase '