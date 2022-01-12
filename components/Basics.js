import SIcon from 'supercons'
import NImage from 'next/image'
import { animated } from 'react-spring'
import React, { useState, useLayoutEffect, useMemo } from 'react'
import useResizeAware from 'react-resize-aware'

const ButtonClasses = ' rounded-3xl text-accent border-sexy text-shadow-duo font-button uppercase leading-none select-none flex-center '

export const Button = (p) => (
  <animated.button {...p} className={ButtonClasses + p.className}>
  </animated.button>
)

export const Link = p => pug`
  a(...p className=ButtonClasses + p.className target=p.newTab? '_blank' : null)
`

export const PrimaryLink = p => pug`
  Link(...p className='glass grow-0 shrink-0 basis-[54px] h-54 px-7 mx-4 mt-6 mb-3 text-3xl pt-[3px] ' + p.className)
`

export const Header = (p) => (
  <h1 {...p}
  className={'font-head mx-auto py-9 text-2xl sm:text-3xl md:text-4xl text-center text-shadow-6 drop-shadow-2xl uppercase text-accentLite leading-tight ' + p.className}>
  </h1>
)

export const Subheader = p => pug`
  h2.font-head.w-full.p-6.text-2xl.text-center.text-shadow-6.drop-shadow-2xl.uppercase.text-accentLite.leading-tight(...p className=p.className)
`

export const Icon = (p) => (
  <SIcon {...p} glyph={p.name} />
)

export const Box = (p) => (
  <div {...p} className={'text-accentLite text-shadow-tpBlack rounded-2xl border-sexy ' + p.className}></div>
)

export const Section = p => pug`
  div.flex-center.flex-wrap.px-3.py-6.w-full.border-b.border-b-tpWhite(...p className=p.className)
`

export const SectionButton = p => pug`
  Icon.w-16.h-9.px-3.text-accentLite(name='down-caret' size='27')
`

export const SectionTitle = p => pug`
  h3.font-button.text-2xl.text-shadow-6.uppercase.text-accentLite.leading-tight(
    ...p className=p.className
  )
`

export const PopupRoot = p => pug`
  Box.flex.flex-col.overflow-hidden(
    ...p 
    className='max-w-full max-h-full lg:max-w-[777px] ' + p.className
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