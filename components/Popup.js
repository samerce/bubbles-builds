import { useEffect } from 'react'
import usePopup, {Popups} from '../model/usePopup'
import How from './How'
import Why from './Why'
import Contact from './Contact'
import Music from './Music'
import SiteMenu from './SiteMenu'
import WhoIsBubbles from './WhoIsBubbles'
import Thanks from './Thanks'
import NavIntro from './NavIntro'
import Alert from './Alert'

const ease = 'cubic-bezier(0.34, 1.56, 0.64, 1)'

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

        PopupContent.justify-center(id=Popups.Thanks)
          Thanks.pointer-events-auto
          
        PopupContent.justify-end.origin-bottom(id=Popups.NavIntro)
          NavIntro.pointer-events-auto
          
        PopupContent.justify-center(id=Popups.Alert)
          Alert.pointer-events-auto
  `
}

function Background(p) {
  const {popupId, hidePopup} = usePopup()
  const visible = !!popupId

  const style = {
    opacity: visible? 1 : 0,
    pointerEvents: visible? 'auto' : 'none',
  }

  return pug`
    div.absolute.top-0.left-0.w-full.h-full.bg-black.bg-opacity-80.opacity-0.transition.duration-300(
      onClick=hidePopup
      style=style
      className=${`ease-[${ease}]`}
    )
  `
}

function PopupContent(p) {
  const {popupId} = usePopup()
  const visible = popupId === p.id
  console.log('popupid', popupId, p.id, visible)

  return pug`
    div.absolute.h-full.flex-col.transition.duration-300(
      ...p
      className=${p.className + ` ease-[${ease}]`}
      style=${{
        ...p.style, 
        transform: `scale(${visible? 1 : 0})`,
        opacity: visible? 1 : 0,
      }}
    )
  `
}
