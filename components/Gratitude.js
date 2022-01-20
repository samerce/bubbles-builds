import React from "react"
import { PopupRoot, Subheader, Section, SectionTitle, Button, Link, Text } from "./Basics"
import Image from 'next/image'
import usePopup, { Popups } from '../model/usePopup'
import usePopupScrollReset from "../hooks/usePopupScrollReset"

const ScrollerId = 'gratitude-scroller'

export default function Gratitude(p) { 
  const {hidePopup} = usePopup()

  function goToAnchor(id) {
    hidePopup()
    setTimeout(() => window.location = '#' + id, 200)
  }

  usePopupScrollReset(ScrollerId, Popups.Gratitude)

  return pug`
    PopupRoot(...p className=p.className + ' mt-[90px]')

      div(class='absolute right-0 w-[160px] h-[90px] -translate-y-full pointer-events-none')
        Image(src='https://s3.us-east-2.amazonaws.com/purplerepublic.us/commons/bubbles-hi.gif' width=160 height=90 quality=90)

      Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
        | A Trillion Thanks!

      div.w-full.grow.flex.flex-col.overflow-y-scroll.glass-dark(
        class='py-1 md:py-2 md:px-3'
        id=ScrollerId
      )
        GratitudeSection 
          div.flex.pb-2
            SectionTitle.rotate-2 friends & family
          Text My work and I are not possible without my loving family, including my partner Petals, my mom Priscilla, my brother Rameen, my sister Alyana, and some awesome friends who helped me brainstorm for and test this site: Koki, T, and Abby.

        GratitudeSection
          div.flex.pb-2
            SectionTitle.rotate-3 shaders
          Text The gorgeous backgrounds on this site are shaders from creators on Shadertoy.com. Huge thanks to their painstaking work developing the math equations that make these stunning pieces of art. It still blows my mind that they’re made with only equations and sometimes some images of just “noise”. So grateful the following humans have offered their work for free:

        GratitudeSection
          div.flex.pb-2
            SectionTitle.-rotate-1 fonts
          Text Anyone who knows me, knows I obsess over fonts. They can make or break a design and I spent several hours picking and re-picking fonts for this site. Many thanks to the following designers (and Google Fonts) who offer their work for free:

        GratitudeSection
          div.flex.pb-2
            SectionTitle.-rotate-1 icons
          Text The icons are generously provided by:
        
      Button.border-b-0.border-x-0.bg-accent.rounded-b-2xl.rounded-t-none.w-full.text-accentWhite.text-2xl(onClick=hidePopup class='basis-[42px] sm:basis-[54px] shrink-0 hover:bg-accentLite hover:text-accentDark') Close
  `
}

var GratitudeSection = p => pug`
  Section.flex-col.items-center(...p className=p.className)
`