import { useEffect } from 'react'
import usePopup, {Popups} from '../model/usePopup'
import { animated, useSpring, config } from 'react-spring'
import How from './How'
import Why from './Why'
import Contact from './Contact'
import Music from './Music'
import SiteMenu from './SiteMenu'
import WhoIsBubbles from './WhoIsBubbles'
import Gratitude from './Gratitude'

const Anim = animated.div

export default function Popup(p) {
  const {popupId} = usePopup()
  const rootStyle = {
    pointerEvents: popupId? 'auto' : 'none',
  }

  return pug`
    div.fixed.top-0.left-0.h-full.w-full.z-10(
      class='pt-1 md:pt-4 px-1 pb-nav md:pb-navBig'
      style=rootStyle
    )
      Background

      div.h-full.w-full.relative.flex.justify-center.pointer-events-none
        
        PopupContent.justify-end(
          id=Popups.How
          style={transformOrigin: '22% bottom'}
        )
          How.pointer-events-auto

        PopupContent.origin-bottom-right.justify-end(
          id=Popups.Why
          style={transformOrigin: '80% bottom'}
        )
          Why.pointer-events-auto

        PopupContent.origin-bottom-left.justify-end(
          id=Popups.Contact
          class='w-full max-w-[432px] sm:w-[432px]'
          style={transformOrigin: '28% bottom'}
        )
          Contact.pointer-events-auto

        PopupContent.origin-bottom-right.justify-end(
          id=Popups.Music
          style={transformOrigin: '74% bottom'}
        )
          Music.pointer-events-auto

        PopupContent.origin-bottom.justify-end(id=Popups.SiteMenu)
          SiteMenu.pointer-events-auto

        PopupContent.justify-center(id=Popups.WhoIsBubbles)
          WhoIsBubbles.pointer-events-auto

        PopupContent.justify-center(id=Popups.Gratitude)
          Gratitude.pointer-events-auto
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

  useEffect(() => {
    if (!visible) {
      setTimeout(() => {
        document.getElementById(p.id).style.display = 'none'
      }, 300)
    }
  }, [popupId])

  return pug`
    Anim.absolute.h-full.flex-col.flex(
      ...p
      className=p.className
      style=${{
        ...p.style, 
        ...scale, 
        ...opacityAnim(visible),
        display: visible? 'flex' : 'inherit',
      }}
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