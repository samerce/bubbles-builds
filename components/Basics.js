import SIcon from 'supercons'

export const Button = (p) => (
  <button {...p} className={ButtonClasses + p.className}>
  </button>
)

export const Link = (p) => (
  <a {...p} className={ButtonClasses + p.className}>
  </a>
)

export const Header = (p) => (
  <h1 {...p} 
  className={'font-head mx-auto my-16 text-5xl text-shadow-tpBlack ' + p.className}></h1>
)

export const PageTitle = (p) => (
  <div {...p} className={'self-center text-white text-center text-10xl uppercase font-head text-shadow-accent ' + p.className}>
  </div>
)

export const Icon = (p) => (
  <SIcon {...p} glyph={p.name} />
)

var ButtonClasses = ' m-2 rounded-3xl glass text-accent border-width-1 border-tpWhite shadow-asBorder '