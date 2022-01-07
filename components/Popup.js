import usePopup, {Popups} from '../model/usePopup'
import { animated, useSpring, config } from 'react-spring'
import How from './How'
import Why from './Why'

const Anim = animated.div

export default p => {
  const {popupId} = usePopup()
  const rootStyle = {
    pointerEvents: popupId? 'auto' : 'none',
  }

  return pug`
    .fixed.top-0.left-0.h-full.w-full.z-10.pb-nav(
      class='pt-[36px]'
      style=rootStyle
    )
      Background

      .h-full.w-full.relative.flex.justify-center.pointer-events-none
        PopupContent.origin-bottom-left(id=Popups.How)
          How

        PopupContent.origin-bottom-right(id=Popups.Why)
          Why
  `
}

var Background = p => {
  const {popupId, hidePopup} = usePopup()
  const visible = popupId !== null

  const opacity = AnimOpacity(visible)
  const style = {
    opacity: opacity.opacity.to(o => o),
    pointerEvents: visible? 'all' : 'none',
  }

  return pug`
    Anim.absolute.top-0.left-0.w-full.h-full.bg-black.bg-opacity-50.glass.opacity-0(
      onClick=hidePopup
      style=style
    )
  `
}

var PopupContent = p => {
  const {popupId} = usePopup()
  const visible = popupId === p.id

  const opacity = AnimOpacity(visible)
  const scale = useSpring({
    scale: visible? 1 : 0,
    config: {
      ...config.stiff,
      mass: .69,
    }
  })

  return pug`
    Anim.absolute.h-full.pointer-events-auto(
      ...p
      className=p.className
      style=${{...opacity, ...scale}}
    )
  `
}

function AnimOpacity(visible) {
  return useSpring({
    opacity: visible? 1 : 0,
    config: {
      ...config.stiff,
      mass: .12,
    }
  })
}