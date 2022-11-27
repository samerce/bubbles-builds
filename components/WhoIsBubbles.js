import React from "react"
import { PopupRoot, Subheader, Button, Link, Text, PopupCloseButton } from "./Basics"
import Image from 'next/image'
import usePopup, { Popups } from '../model/usePopup'
import usePopupScrollReset from "../hooks/usePopupScrollReset"
import bubblesHi from '../public/images/bubbles-hi.gif'

const ScrollerId = 'who-is-bubbles-scroller'

export default function WhoIsBubbles(p) { 
  const {hidePopup, popupId} = usePopup()
  const visible = popupId === Popups.WhoIsBubbles

  usePopupScrollReset(ScrollerId, Popups.WhoIsBubbles)

  return pug`
    PopupRoot(...p className=p.className + ' mt-[90px]')

      div(class='absolute right-0 w-[160px] h-[90px] -translate-y-full pointer-events-none')
        if visible 
          Image(
            src=bubblesHi width=160 height=90 quality=90
            alt='a video of bubbles waving'
          )

      Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
        | Who is Bubbles? 

      div.w-full.grow.flex.flex-col.overflow-y-scroll.bg-accentBlack(
        class='py-1 md:py-2 md:px-3'
        id=ScrollerId
      )
        Text Bubbles Sandcastle has a BSE in Computer Science from the University of Michigan. They formerly worked in Big Tech and left that world due to its poor work-life balance and general lack of social consciousness.
        Text After leaving Amazon.com, Bubbles explored the startup scene and eventually founded one of their own, Crendo Creations. There, they built a web-based game-making platform and used it to launch #[a(href='#bjg') Blackjack Genius], an Android game that held a top-20 spot in the Play Store for over a year. 
        Text Bubbles ended their time in Silicon Valley working for #[a(href='https://iodine.com' target='_blank' rel='noopener') Iodine.com], a health-tech startup focused on crowdsourcing medication information and helping people with depression find the right medication faster. This was a step in the right direction, yet something still felt off. 
        Text Having hip-hop danced their way out of depression, Bubbles decided to take a break from tech and explore the arts. They joined #[a(href='https://www.expressyouryes.com/products' rel='noopener' target='_blank') Petals Sandcastle] at the tail-end of #[a(href='https://www.youtube.com/watch?v=ljrsFO7VZro' target='_blank' rel='noopener') Lampshade Cafe] and years later co-founded #[a(href='https://www.expressyouryes.com' target='_blank' rel='noopener') Express Your Yes Foundation] to amplify marginalized voices and advocate for art as healing.
        Text Now, Bubbles co-runs Express Your Yes Foundation, #[a(href='https://soundcloud.com/expressyouryes' target='_blank' rel='noopener') produces music], soaks in the sun, #[a(href='https://ripplewiggle.medium.com' target='_blank' rel='noopener') writes], experiments with sustainable living practices, dabbles in graphic design, and builds websites & apps for creatives, healers, nonprofits, and other arts-centered, socially responsible and environmentally conscious agents.
        
      PopupCloseButton
  `
}