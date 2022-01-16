import React from "react"
import { PopupRoot, Subheader, Section, SectionTitle, Text, } from "./Basics"
import useNav from "../model/useNav"
import { Popups } from "../model/usePopup"
import usePopupScrollReset from "../hooks/usePopupScrollReset"

const ScrollerId = 'why-scroller'

export default function Why(p) { 
  const {page} = useNav()
  const why = page.why

  usePopupScrollReset(ScrollerId, Popups.Why)
  
  return pug`
    PopupRoot.glass-dark(...p className=p.className)
      Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
        | The Inspiration for #{page.title}

      div.w-full.grow.flex.flex-col.overflow-y-scroll.pt-2.pb-4(
        class='md:px-3'
        id=ScrollerId
      )
        WhySection
          div.flex.pb-2
            SectionTitle.rotate-2 make art magic
          Text #{why? why.art : ''}

        WhySection
          div.flex.pb-2
            SectionTitle.-rotate-2 share love
          Text #{why? why.love : ''}

        WhySection
          div.flex.pb-2
            SectionTitle.rotate-1 explore, grow, and play!
          Text #{why? why.play : ''}
  `
}

var WhySection = p => pug`
  Section.flex-col.items-center(...p className=p.className)
`