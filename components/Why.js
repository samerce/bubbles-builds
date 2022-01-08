import React from "react"
import { PopupRoot, Subheader, Section, SectionTitle } from "./Basics"
import useNav from "../model/useNav"

export default p => pug`
  - const {nav} = useNav()
  - const why = nav.why
  PopupRoot
    Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
      | The Inspiration for #{nav.pageTitle}

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