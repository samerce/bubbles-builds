import VisibilitySensor from 'react-visibility-sensor'
import { Icon, Button } from './Basics'
import { useState } from 'react'

export const HSnapItem = p => pug`
  VisibilitySensor(onChange=isVisible => {
    if (isVisible && p.onAppear) p.onAppear()
  })
    div.snap-start.snap-always.inline-flex(...p className=p.className)
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

            <Content />

          </HSnapItem>
        ))}

      </div>

      <HSnapNav nav={nav} />
    </div>
  )
}

export const VSnapStack = (p) => pug`
  div.snap-y.snap-mandatory.overflow-x-visible.overflow-y-scroll(...p className=p.className)
`

export const VSnapItem = p => pug`
  VisibilitySensor(onChange = visible => {
    if (visible && p.onAppear) p.onAppear()
  })
    div.snap-start.snap-always.w-full.h-full.relative(...p className=p.className)
`

// Helpers

const IconCx = 'w-[54px] h-[54px]'

var HSnapNav = p => {
  function onClickNav(navId) {
    document.getElementById(navId).scrollIntoView({behavior: 'smooth'})
  }

  return pug`
    div.flex-center.w-full.pointer-events-none.z-10.pt-2
      Button.glass.transition(
        onClick=() => onClickNav(p.nav.left) 
        style={
          opacity: p.nav.left? 1 : 0.5,
          pointerEvents: p.nav.left? 'auto' : 'none',
        }
      )
        Icon(name='view-back' className=IconCx)

      div.w-3

      Button.glass.transition(
        onClick=() => onClickNav(p.nav.right)
        style={
          opacity: p.nav.right? 1 : 0.5,
          pointerEvents: p.nav.right? 'auto' : 'none',
        }
      )
        Icon(name='view-forward' className=IconCx)
  `
}