import SIcon from 'supercons'
import NImage from 'next/image'
import { animated } from 'react-spring'
import React, { useState, useLayoutEffect, useMemo } from 'react'
import useResizeAware from 'react-resize-aware'
import usePopup from '../model/usePopup'

export const ButtonCs = ' rounded-3xl border-sexy text-shadow-duo font-button leading-none select-none flex-center transition duration-300 '
export const ButtonPrimaryCs = ' text-accent hover:text-accentLite '
export const ButtonSecondaryCs = ' bg-accentWhite text-accent hover:text-accentLite '

export const Button = p => {
  const cs = p.secondary? ButtonSecondaryCs : ButtonPrimaryCs
  return pug`
    button(...p className=ButtonCs + cs + p.className)
  `
}

export const Link = p => {
  const cs = ButtonCs + 'no-underline' + 
    (p.secondary? ButtonSecondaryCs : ButtonPrimaryCs) + p.className

  return pug`
    a(...p className=cs target=p.newTab? '_blank' : null)
  `
}

export const PortfolioLink = p => pug`
  Link.flex-center.glass.grow-0.shrink-0.h-54.pl-5.pr-3.mx-4.mt-6.mb-3.text-3xl(
    ...p 
    className='basis-[54px] pt-[3px] ' + p.className
  ) #{p.children}
    Icon(name='external-fill' size=36 class='mb-[3px] ml-[6px]' ariaHidden)
`

export const Header = p => pug`
  h1.font-head.mx-auto.pt-6.pb-4.text-center.text-shadow-6.drop-shadow-2xl.uppercase.text-accentWhite.leading-tight(
    ...p
    className='text-2xl sm:text-3xl md:text-4xl ' + p.className
  )
`

export const Subheader = p => pug`
  h2.font-head.w-full.flex-center.text-shadow-6.drop-shadow-2xl.uppercase.text-accentWhite.leading-tight.px-6.text-center.shrink-0(
    ...p
    className='text-xl sm:text-3xl py-3 md:py-5 ' + p.className
  )
`

export const Icon = p => pug`
  SIcon(...p glyph=p.name)
`

export const Box = p => pug`
  div.text-accentWhite.text-shadow-tpBlack.rounded-2xl.border-sexy(...p className=p.className)
`

export const Text = p => pug`
  p(...p className='px-4 sm:px-6 py-3 sm:py-5 text-[18px] sm:text-[21px] max-w-[777px] leading-[1.5] font-body ' + p.className)
`

export const Section = p => pug`
  div.flex.flex-wrap.pt-6.relative(...p className=p.className)
`

export const SectionTitle = p => pug`
  h3.font-header.text-shadow-duo.text-accentWhite.leading-tight.bg-accent.px-4.flex-center.rounded-xl.select-none.border-sexy(
    ...p className=p.className + ' pt-[9px] pb-[7px] text-xl sm:text-2xl'
  )
`

export const DropdownButton = p => pug`
  Icon.bg-accentWhite.text-accent(...p name='down-caret' size='27' 
  className=p.className + ButtonCs + (p.expanded && 'bg-accentWhite')
  style=${{
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

export const PopupCloseButton = p => {
  const {hidePopup} = usePopup()

  return pug`
    Button.border-b-0.border-x-0.bg-accent.rounded-b-2xl.rounded-t-none.w-full.text-accentWhite.text-2xl.shrink-0(
      onClick=hidePopup ariaLabel='close popup'
      class='basis-[42px] sm:basis-[54px] hover:bg-accentWhite'
    ) Close
  `
}

const FrameWidth = 6

export const Image = p => {
  const baseWidth = p.width
  const baseHeight = p.height

  const [sizeListener, bounds] = useResizeAware()
  const [imgSize, setImgSize] = useState({width: baseWidth, height: baseHeight})
  const aspectRatio = useMemo(() => p.width / p.height, [p.width, p.height])

  useLayoutEffect(() => {
    const parentAspectRatio = bounds.width / bounds.height
    const shouldFillWidth = parentAspectRatio <= aspectRatio

    if (shouldFillWidth) {
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