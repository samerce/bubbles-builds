import SIcon from 'supercons'
import NImage from 'next/image'
import { animated } from 'react-spring'
import React, { useState, useLayoutEffect, useMemo } from 'react'
import useResizeAware from 'react-resize-aware'

const ButtonClasses = ' rounded-3xl glass text-accent border-sexy text-shadow-tpWhite font-button uppercase leading-none '

export const Button = (p) => (
  <animated.button {...p} className={ButtonClasses + p.className}>
  </animated.button>
)

export const Link = p => pug`
  a(...p className=ButtonClasses + p.className target=p.newTab? '_blank' : null)
`

export const PrimaryLink = p => pug`
  Link(...p className='h-16 px-7 m-4 text-3xl flex-center pt-[3px] ' + p.className)
`

export const Header = (p) => (
  <h1 {...p}
  className={'font-head mx-auto pt-11 pb-8 text-5xl text-center text-shadow-6 drop-shadow-2xl uppercase text-accentLite leading-tight ' + p.className}>
  </h1>
)

export const Subheader = p => pug`
  h2.font-head.w-full.p-6.text-2xl.text-center.text-shadow-6.drop-shadow-2xl.uppercase.text-accentLite.leading-tight(...p className=p.className)
`

export const PageTitle = (p) => (
  <div {...p} className={'self-center text-white text-center text-10xl uppercase font-head text-shadow-6 drop-shadow-2xl ' + p.className}>
  </div>
)

export const Icon = (p) => (
  <SIcon {...p} glyph={p.name} />
)

export const Box = (p) => (
  <div {...p} className={'glass-dark text-accentLite text-shadow-tpBlack rounded-2xl border-sexy ' + p.className}></div>
)

export const Section = p => pug`
  .flex-center.flex-wrap.px-3.py-6.w-full.border-b.border-b-tpWhite(...p className=p.className)
`

export const SectionButton = p => pug`
  .flex-center
    .h-9.text-xl.rounded-xl.flex-center.px-3.bg-transparent.border-none.text-accentLite
      Icon.inline.text-accentLite(name='down-caret' size='27')
`

export const SectionTitle = p => pug`
  .basis-full.flex.justify-between.items-center.ml-4
    h3.font-button.text-2xl.text-center.text-shadow-6.drop-shadow-2xl.uppercase.text-white.leading-tight.pointer-events-none(...p className=p.className)
    SectionButton
`

export const PopupRoot = p => pug`
  Box.h-full.flex.flex-col.overflow-hidden(
    ...p 
    className=${'max-w-[777px] ' + p.className}
  )
`

export const Image = p => {
  const TheImage = p.framed? FramedImage : BaseImage
  const baseWidth = p.width
  const baseHeight = p.height

  if (p.fillHeight) {
    const [sizeListener, bounds] = useResizeAware()
    const [imgWidth, setImgWidth] = useState(baseWidth)
    const aspectRatio = useMemo(() => baseWidth / baseHeight, [baseWidth, baseHeight])

    useLayoutEffect(() => {
      setImgWidth(Math.floor(bounds.height * aspectRatio))
    }, [bounds.height])

    return (
      <div className={`h-full relative ` + p.className} style={{width: imgWidth}}>
        {sizeListener}
        <TheImage {...p} width={imgWidth} height={bounds.height} className='' />
      </div>
    )
  }

  return <TheImage {...p} />
}

// Helpers 

const FrameWidth = 9

var BaseImage = pp => (
  <NImage
    layout='fill' objectFit='contain' quality='90'
    {...pp}
    className={'rounded-xl ' + pp.className}
  />
)

var FramedImage = p => (
  <div className='relative h-full w-full'>
    <div className='absolute rounded-2xl glass border-sexy' style={{
      width: p.width + FrameWidth * 2,
      height: p.height + FrameWidth * 2,
      top: -FrameWidth,
      left: -FrameWidth,
    }} />

    <BaseImage {...p} />
  </div>
)