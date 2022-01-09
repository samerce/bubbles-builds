import VisibilitySensor from 'react-visibility-sensor'
import { Icon, Button } from './Basics'
import { useState } from 'react'
import { colorToRgba } from '@react-spring/shared'

export const HSnapItem = (p) => (
  <VisibilitySensor onChange={isVisible => {
    if (isVisible && p.onAppear) p.onAppear()
  }}>
    <div {...p} className={'snap-start snap-always inline-flex ' + p.className}>
    </div>
  </VisibilitySensor>
)

export const HSnapStack = p => {
  const [nav, setNav] = useState({})
  
  function onAppearItem(id, index) {
    const itemLeft = (index > 0)? p.items[index - 1] : null
    const itemRight = (index < p.items.length - 1)? p.items[index + 1] : null
    setNav({
      left: itemLeft?.id,
      right: itemRight?.id
    })
    window.location = '#' + id
  }

  return (
    <div className={'flex flex-col pb-nav ' + p.className}>
      <div className='grow w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'>
        
        {p.items.map(({id, Content, className}, index) => (
          <HSnapItem className={'flex-100 h-full flex-col items-center relative ' + className}
            id={id} key={id} onAppear={() => onAppearItem(id, index)}>
            <Content />
          </HSnapItem>
        ))}

      </div>

      <HSnapNav nav={nav} />
    </div>
  )
}

export const VSnapStack = (p) => (
  <div {...p} className={'snap-y snap-mandatory overflow-x-visible overflow-y-scroll ' + p.className}>
  </div>
)

export const VSnapItem = p => pug`
  VisibilitySensor(onChange = visible => {
    if (visible && p.onAppear) p.onAppear()
  })
    .snap-start.snap-always.w-full.h-full.relative(...p)
`

// Helpers

var HSnapNav = p => {
  function onClickNav(navId) {
    window.location = '#' + navId
  }

  return pug`
    div.flex-center.w-full.pointer-events-none.z-10.pt-2
      Button.transition(
        onClick=() => onClickNav(p.nav.left) 
        style={
          opacity: p.nav.left? 1 : 0.5,
          pointerEvents: p.nav.left? 'auto' : 'none',
        }
      )
        Icon(name='view-back' size='54')

      div.w-3

      Button.transition(
        onClick=() => onClickNav(p.nav.right)
        style={
          opacity: p.nav.right? 1 : 0.5,
          pointerEvents: p.nav.right? 'auto' : 'none',
        }
      )
        Icon(name='view-forward' size='54')
  `
}