import React from "react"
import { PopupRoot, Subheader, Section, SectionTitle } from "./Basics"
import useNav from "../model/useNav"

export default function Why(p) { return pug`
  - const {page} = useNav()
  - const why = page.why
  
  PopupRoot.glass-dark(...p className=p.className)
    Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
      | The Inspiration for #{page.title}

    div.w-full.grow.flex.flex-col.overflow-y-scroll.pt-6.pb-2.px-4
      WhySection
        div.flex
          SectionTitle.rotate-2 make art magic
        p.p-7 #{why? why.art : ''}

      WhySection
        div.flex
          SectionTitle.-rotate-2 share love
        p.p-7 #{why? why.love : ''}

      WhySection
        div.flex
          SectionTitle.rotate-1 explore, grow, and play!
        p.p-7 #{why? why.play : ''}
`}

var WhySection = p => pug`
  Section.flex-col.items-center(...p className=p.className)
`