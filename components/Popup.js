import usePopup, {Popups} from '../model/usePopup'
import { animated, useSpring, config } from 'react-spring'
import How from './How'
import Why from './Why'
import Contact from './Contact'
import Music from './Music'

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

        PopupContent.origin-bottom-left(id=Popups.Contact)
          Contact

        PopupContent.origin-bottom-right(id=Popups.Music)
          Music
  `
}

var Background = p => {
  const {popupId, hidePopup} = usePopup()
  const visible = popupId !== null

  const style = {
    ...opacityAnim(visible),
    pointerEvents: visible? 'auto' : 'none',
  }

  return pug`
    Anim.absolute.top-0.left-0.w-full.h-full.bg-black.bg-opacity-50.opacity-0(
      onClick=hidePopup
      style=style
    )
  `
}

var PopupContent = p => {
  const {popupId} = usePopup()
  const visible = popupId === p.id
  const scale = useSpring({
    scale: visible? 1 : 0,
    config: {
      ...config.stiff,
      mass: .69,
    }
  })

  return pug`
    Anim.absolute.h-full.flex-col.flex.justify-end.pointer-events-auto(
      ...p
      className=p.className
      style=${{...scale, ...opacityAnim(visible)}}
    )
  `
}

function opacityAnim(visible) {
  return useSpring({
    opacity: visible? 1 : 0,
    config: {
      ...config.stiff,
      mass: .12,
    }
  })
}