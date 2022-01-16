import React from "react"
import { PopupRoot, Subheader, SectionTitle } from "./Basics"
import usePopup, { Popups } from "../model/usePopup"

export default function SiteMenu(p) { 
  const {showPopup} = usePopup()

  return pug`
    PopupRoot.bg-tpBlack.rounded-2xl(...p className=p.className)
      Subheader.border-b.border-tpWhite.bg-accent.rounded-t-2xl
        span(class='text-xl xs:text-2xl sm:text-3xl') Bubbles Builds!

      div.w-full.grow.flex.flex-col.overflow-y-scroll.overflow-x-hidden.bg-accentDark.rounded-b-2xl.py-3
        
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
  `
}

var MenuButton = p => {
  const {hidePopup} = usePopup()

  function onClick(id) { 
    hidePopup()
    setTimeout(() => {
      document.getElementById(id).scrollIntoView()
      p.onClick && p.onClick()
    }, 200)
  }

  return pug`
    button(
      class='basis-[81px] shrink-0 cursor-pointer w-full flex-center'
      onClick=() => onClick(p.id)
    )
      SectionTitle.h-12(style=${{
        transform: `rotate(${p.rotate}deg)`,
        fontSize: '1.875rem'
      }})
        | #{p.children}
  `
}
