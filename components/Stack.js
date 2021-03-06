import { useInView as useVisibility} from 'react-intersection-observer'
import { Icon, Button } from './Basics'
import { useState, useRef, useEffect } from 'react'

const VisibilityOffset = 324

export const HSnapItem = p => pug`
  SnapItem.inline-flex(...p className=p.className)
`

export const HSnapStack = p => {
  const [nav, setNav] = useState({})
  
  function onAppearItem(id, index) {
    const itemLeft = (index > 0)? p.items[index - 1] : null
    const itemRight = (index < p.items.length - 1)? p.items[index + 1] : null
    setNav({
      left: itemLeft?.id,
      right: itemRight?.id
    })
    
    // causes page to jump, figure out another way to give these pages urls
    // window.location = '#' + id 
  }

  return (
    <div className={'flex flex-col flex-1 w-full h-full relative overflow-hidden ' + p.className}>
      <div className='grow w-full max-h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'>
        
        {p.items.map(({id, Content, className}, index) => (
          <HSnapItem className={'flex-100 h-full max-w-full max-h-full flex-col items-center relative px-[9px] ' + className}
          id={id} key={id} onAppear={() => onAppearItem(id, index)}>

            <Content {...p.itemProps} />

          </HSnapItem>
        ))}

      </div>

      <HSnapNav nav={nav} />
    </div>
  )
}

export const VSnapStack = (p) => pug`
  div.snap-y.snap-mandatory.overflow-x-visible.overflow-y-scroll(
    ...p 
    className=p.className
    ref=p.forwardRef
  )
`

export const VSnapItem = p => pug`
  SnapItem.w-full.h-full.relative(...p className=p.className)
`

// Helpers

const IconCx = 'w-[54px] h-[54px]'

var SnapItem = p => {
  const [ref, visible] = useVisibility({
    threshold: .92,
    trackVisibility: true,
    delay: 250,
  })

  useEffect(() => {
    if (visible && p.onAppear) p.onAppear()
  }, [visible])

  return pug`
    section.snap-start.snap-always(...p className=p.className ref=ref)
  `
}

var HSnapNav = p => {
  function buttonStyle(btn) {
    return {
      opacity: btn? 1 : 0.5,
      pointerEvents: btn? 'auto' : 'none',
      cursor: btn? 'pointer' : 'default',
    }
  }

  function onClickNav(navId) {
    document.getElementById(navId).scrollIntoView({behavior: 'smooth'})
  }

  return pug`
    div.flex-center.w-full.pointer-events-none.z-10.pt-2
      Button.glass(
        onClick=() => onClickNav(p.nav.left) 
        style=${buttonStyle(p.nav.left)}
        aria-label='go to previous image in gallery'
      )
        Icon(name='view-back' className=IconCx aria-hidden)

      div.w-3

      Button.glass(
        onClick=() => onClickNav(p.nav.right)
        style=${buttonStyle(p.nav.right)}
        aria-label='go to next image in gallery'
      )
        Icon(name='view-forward' className=IconCx aria-hidden)
  `
}