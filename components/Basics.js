import SIcon from 'supercons'

export const Button = (p) => (
  <button {...p} className={'m-2 rounded-3xl bg-accentLite bg-opacity-50 glass button text-accent ' + p.className}>
  </button>
)

export const Link = (p) => (
  <a {...p} className={'m-2 rounded-3xl bg-accentLite bg-opacity-50 glass button text-accent ' + p.className}>
  </a>
)

export const Header = (p) => (
  <h1 {...p} className={'font-head mx-auto my-10 text-5xl ' + p.className} 
    style={{textShadow: '1px 1px rgba(0,0,0,.27)'}}></h1>
)

export const PageTitle = (p) => (
  <div {...p} className={'self-center text-white text-center text-10xl uppercase font-head text-shadow-accent ' + p.className} >
  </div>
)

export const Icon = (p) => (
  <SIcon {...p} glyph={p.name} />
)