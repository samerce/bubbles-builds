import React from "react"
import { PopupRoot, Subheader, Button } from "./Basics"
import usePopup, { Popups } from "../model/usePopup"
import usePopupScrollReset from "../hooks/usePopupScrollReset"
import useNav from "../model/useNav"

const ScrollerId = 'site-menu-scroller'

export default function SiteMenu(p) { 
  const {showPopup} = usePopup()

  usePopupScrollReset(ScrollerId, Popups.SiteMenu)

  return pug`
    PopupRoot.bg-tpBlack.rounded-2xl(...p className=p.className)
      Subheader.border-b.border-tpWhite.bg-accent.rounded-t-2xl
        span(class='text-xl xs:text-2xl sm:text-3xl') Bubbles Builds!

      div.w-full.grow.flex.flex-col.overflow-y-scroll.overflow-x-hidden.bg-accentBlack.rounded-b-2xl.py-5.px-5(id=ScrollerId)
        
        MenuButton(id='bio' rotate=3 onClick=${() => {
          setTimeout(() => showPopup(Popups.WhoIsBubbles), 400)
        }}) Who is Bubbles?

        MenuButton(id='expressyouryes' rotate=-1) Express Your Yes

        MenuButton(id='rickyforhouse' rotate=2) Ricky for House
        
        MenuButton(id='acupuncture' rotate=-3) Acupuncture

        MenuButton(id='dqitwh' rotate=1) DQITWH

        MenuButton(id='flitandland' rotate=-2) Flit & Land

        MenuButton(id='psymail' rotate=3) Psymail

        MenuButton(id='glyphite' rotate=-1) Glyphite
        
        MenuButton(id='bjg' rotate=2) Blackjack Genius

        MenuButton(id='letsbuild' rotate=-3) Let’s Build Together!
  `
}

var MenuButton = p => {
  const {hidePopup} = usePopup()
  const {page} = useNav()
  let cs = 'pt-[3px] '

  if (p.id === page.id) 
    cs += '!bg-accent !text-accentWhite cursor-default !hover:text-accentWhite'

  function onClick(id) {
    if (p.id === page.id) return

    hidePopup()
    setTimeout(() => {
      document.getElementById(id).scrollIntoView()
      p.onClick && p.onClick()
    }, 200)
  }

  return pug`
    div.w-full.flex-center.shrink-0(class='basis-[72px]')
      Button.h-12.px-6.text-2xl(
        onClick=() => onClick(p.id)
        type='secondary' className=cs
        style=${{
          transform: `rotate(${p.rotate}deg)`
        }}
      ) #{p.children}
  `
}
