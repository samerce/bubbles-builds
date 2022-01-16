import SIcon from 'supercons'
import NImage from 'next/image'
import { animated } from 'react-spring'
import React, { useState, useLayoutEffect, useMemo } from 'react'
import useResizeAware from 'react-resize-aware'

export const ButtonClasses = ' rounded-3xl text-accent border-sexy text-shadow-duo font-button uppercase leading-none select-none flex-center '

export const Button = (p) => (
  <animated.button {...p} className={ButtonClasses + p.className}>
  </animated.button>
)

export const Link = p => pug`
  a(...p className='no-underline ' + ButtonClasses + p.className target=p.newTab? '_blank' : null)
`

export const PrimaryLink = p => pug`
  Link(...p className='glass grow-0 shrink-0 basis-[54px] h-54 px-7 mx-4 mt-6 mb-3 text-3xl pt-[3px] ' + p.className)
`

export const Header = (p) => (
  <h1 {...p}
  className={'font-head mx-auto pt-6 pb-4 text-2xl sm:text-3xl md:text-4xl text-center text-shadow-6 drop-shadow-2xl uppercase text-accentLite leading-tight ' + p.className}>
  </h1>
)

export const Subheader = p => pug`
  h2.font-head.w-full.p-6.text-xl.text-center.text-shadow-6.drop-shadow-2xl.uppercase.text-accentLite.leading-tight(...p className=p.className + ' sm:text-2xl')
`

export const Icon = (p) => (
  <SIcon {...p} glyph={p.name} />
)

export const Box = (p) => (
  <div {...p} className={'text-accentLite text-shadow-tpBlack rounded-2xl border-sexy ' + p.className}></div>
)

export const Section = p => pug`
  div.flex.flex-wrap.pt-3.relative(...p className=p.className)
`

export const SectionTitle = p => pug`
  h3.font-header.text-2xl.text-shadow-duo.text-accent.leading-tight.bg-white.px-3.h-9.flex-center.rounded-xl.select-none(
    ...p className=p.className + ' pt-[3px]'
  )
`

export const DropdownButton = p => pug`
  Icon.glass(...p name='down-caret' size='27' className=p.className + ButtonClasses style=${{
    transform: p.expanded? 'rotate(180deg)' : 'rotate(0deg)',
    padding: p.expanded? '0' : '1px 0 0 1px',
    ...p.style
  }})
`

export const PopupRoot = p => pug`
  Box.flex.flex-col.overflow-hidden(
    ...p 
    className='max-w-full max-h-full lg:max-w-[777px] ' + p.className
  )
`

const FrameWidth = 6

export const Image = p => {
  const baseWidth = p.width
  const baseHeight = p.height

  const [sizeListener, bounds] = useResizeAware()
  const [imgSize, setImgSize] = useState({width: baseWidth, height: baseHeight})
  const aspectRatio = useMemo(() => p.width / p.height, [p.width, p.height])

  useLayoutEffect(() => {
    const parentAspectRatio = bounds.width / bounds.height
    const fillWidth = parentAspectRatio <= aspectRatio

    if (fillWidth) {
      setImgSize({
        width: bounds.width,
        height: Math.floor(bounds.width / aspectRatio),
      })
    } else { // fill height
      setImgSize({
        width: Math.floor(bounds.height * aspectRatio),
        height: bounds.height,
      })
    }
  }, [bounds.width, bounds.height])

  return (
    <div className={
      p.className + ' relative h-full w-full overflow-hidden ' + (p.framed && 'p-[18px]')
    }>
      <div className='relative h-full w-full flex-center flex-col'>
        {sizeListener}

        <div className='relative' style={{
          width: imgSize.width, height: imgSize.height
        }}>

          {p.framed &&
            <div className='absolute rounded-2xl glass border-sexy' style={{
              width: imgSize.width + FrameWidth * 2,
              height: imgSize.height + FrameWidth * 2,
              top: -FrameWidth,
              left: -FrameWidth,
            }} />
          }
  
          <NImage 
            quality='90' {...p} {...imgSize} className={'rounded-xl ' + p.className} 
            placeholder='blur'
          />

        </div>
      </div>
    </div>
  )
}