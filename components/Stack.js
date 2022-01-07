import VisibilitySensor from 'react-visibility-sensor'
import { Icon, Button } from './Basics'
import { useState } from 'react'

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

  function onClickNav(navId) {
    window.location = '#' + navId
  }

  return (
  <div {...p} className={'flex flex-col pb-nav ' + p.className}>
    <div className='grow w-full flex snap-x snap-mandatory overflow-x-scroll overflow-y-hidden'>
      {p.items?.map(({id, Content, className}, index) => (
        <HSnapItem id={id} key={id} onAppear={() => onAppearItem(id, index)}
          className={'flex-100 h-full flex-col relative items-center ' + className}>
            <Content />
          </HSnapItem>
      ))}
    </div>

    <div className='flex-center w-full pointer-events-none z-10 py-2'>
      <Button onClick={() => onClickNav(nav.left)} className='transition' style={{
        opacity: nav.left? 1 : 0.5,
        pointerEvents: nav.left? 'all' : 'none',
      }}>
        <Icon name='view-back' size='54' />
      </Button>

      <div className='w-3' />

      <Button onClick={() => onClickNav(nav.right)} className='transition' style={{
        opacity: nav.right? 1 : 0.5,
        pointerEvents: nav.right? 'all' : 'none',
      }}>
        <Icon name='view-forward' size='54' />
      </Button>
    </div>
  </div>
)}

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