import React from "react"
import { PopupRoot, Subheader, PopupCloseButton, Icon, Button, Text } from "./Basics"
import usePopup from "../model/usePopup"

export default function NavIntro(p) { 
  const {hidePopup} = usePopup()

  return pug`
    PopupRoot.bg-accentDark(
      ...p className=p.className
      style={maxWidth: '432px'}
    )
      Subheader.bg-accent Hey friend!
      Text.text-center.text-shadow-duo(style={
        fontFamily: 'bayon',
        fontSize: '27px',
      }) These buttons reveal different content on each page!

      div.flex.items-center.justify-between.w-full.px-3.pb-3
        Icon.text-shadow-duo(
          name='enter' class='rotate-[90deg]' size=54
          aria-label='arrow pointing to how button'
        )
        Button.px-6.py-3.text-xl(
          secondary onClick=hidePopup aria-label='close popup'
        ) Got It
        Icon.text-shadow-duo(
          name='enter' class='rotate-[90deg]' size=54 
          aria-label='arrow pointing to why button'
        )
  `
}
