import React from "react"
import { PopupRoot, Subheader, Section, SectionTitle, Button } from "./Basics"
import usePopup from "../model/usePopup"

export default function SiteMenu(p) { return pug`
  PopupRoot.bg-tpBlack.rounded-2xl(...p className=p.className)
    Subheader.border-b.border-tpWhite.bg-accent.rounded-t-2xl
      span(class='text-xl xs:text-2xl sm:text-3xl') Bubbles Builds!

    div.w-full.grow.flex.flex-col.overflow-y-scroll.overflow-x-hidden.glass.rounded-b-2xl
      
      MenuButton(id='bio', rotate=3) Who is Bubbles?

      MenuButton(id='expressyouryes' rotate=-1) Express Your Yes

      MenuButton(id='rickyforhouse' rotate=2) Ricky for House
      
      MenuButton(id='acupuncture' rotate=-3) Acupuncture

      MenuButton(id='dqitwh' rotate=1) DQITWH

      MenuButton(id='flitandland' rotate=-2) Flit & Land

      MenuButton(id='psymail' rotate=3) Psymail

      MenuButton(id='glyphite' rotate=-1) Glyphite
      
      MenuButton(id='bjg' rotate=2) Blackjack Genius
`}

var MenuButton = p => {
  const {hidePopup} = usePopup()

  function onClick(id) { 
    hidePopup()
    setTimeout(() => {
      window.location = '#' + id
    }, 200)
  }

  return pug`
    button(
      class='basis-[81px] shrink-0 border-b border-tpWhite cursor-pointer w-full'
      onClick=() => onClick(p.id) 
    )
      div.font-button.text-3xl.text-shadow-duo.text-accent.select-none(style=${{
        transform: `rotate(${p.rotate}deg)`,
      }})
        | #{p.children}
  `
}
