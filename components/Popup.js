import usePopup, {Popups} from '../model/usePopup'
import { animated, useSpring, config } from 'react-spring'
import How from './How'
import Why from './Why'
import Contact from './Contact'
import Music from './Music'
import SiteMenu from './SiteMenu'
import WhoIsBubbles from './WhoIsBubbles'

const Anim = animated.div

export default function Popup(p) {
  const {popupId} = usePopup()
  const rootStyle = {
    pointerEvents: popupId? 'auto' : 'none',
  }

  return pug`
    div.fixed.top-0.left-0.h-full.w-full.z-10(
      class='pt-3 md:pt-7 px-3 pb-nav md:pb-navBig'
      style=rootStyle
    )
      Background

      div.h-full.w-full.relative.flex.justify-center.pointer-events-none
        
        PopupContent.origin-bottom-left.justify-end(id=Popups.How)
          How.pointer-events-auto

        PopupContent.origin-bottom-right.justify-end(id=Popups.Why)
          Why.pointer-events-auto

        PopupContent.origin-bottom-left.justify-end(
          id=Popups.Contact
          class='w-full max-w-[432px] sm:w-[432px]'
        )
          Contact.pointer-events-auto

        PopupContent.origin-bottom-right.justify-end(id=Popups.Music)
          Music.pointer-events-auto

        PopupContent.origin-bottom.justify-end(id=Popups.SiteMenu)
          SiteMenu.pointer-events-auto

        PopupContent.justify-center(id=Popups.WhoIsBubbles)
          WhoIsBubbles.pointer-events-auto
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
    Anim.absolute.top-0.left-0.w-full.h-full.bg-black.bg-opacity-80.opacity-0(
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
    Anim.absolute.h-full.flex-col.flex(
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