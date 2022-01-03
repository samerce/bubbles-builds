import SIcon from 'supercons'
import NImage from 'next/image'
import { animated } from 'react-spring'

var ButtonClasses = ' rounded-3xl glass text-accent border-width-1 border-tpWhite shadow-asBorder text-shadow-tpWhite font-button uppercase leading-none '

export const Button = (p) => (
  <animated.button {...p} className={ButtonClasses + p.className}>
  </animated.button>
)

export const Link = (p) => (
  <a {...p} className={ButtonClasses + p.className} target={p.ext? '_blank' : null}>
  </a>
)

export const Header = (p) => (
  <h1 {...p}
  className={'font-head mx-auto mt-11 mb-8 text-5xl text-center text-shadow-6 drop-shadow-2xl uppercase ' + p.className}>
  </h1>
)

export const PageTitle = (p) => (
  <div {...p} className={'self-center text-white text-center text-10xl uppercase font-head text-shadow-6 drop-shadow-2xl ' + p.className}>
  </div>
)

export const Icon = (p) => (
  <SIcon {...p} glyph={p.name} />
)

export const Image = (p) => (
  <div className={p.className}>
    <NImage layout='responsive' objectFit='contain' quality='90' {...p} className={p.imgClass} />
  </div>
)