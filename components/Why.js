import React from "react"
import { PopupRoot, Subheader, Section, SectionTitle } from "./Basics"
import useNav from "../model/useNav"

export default p => pug`
  - const {page} = useNav()
  - const why = page.why
  PopupRoot
    Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
      | The Inspiration for #{page.title}

    .w-full.grow.flex.flex-col.overflow-y-scroll
      Section
        SectionTitle.rotate-3 make art magic
        | #{why? why.art : ''}

      Section
        SectionTitle.-rotate-6 share love
        | #{why? why.love : ''}

      Section
        SectionTitle.rotate-2 explore, grow, and play!
        | #{why? why.play : ''}
`