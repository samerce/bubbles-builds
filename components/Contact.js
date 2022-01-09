import React from "react"
import { PopupRoot, Subheader, Section, SectionTitle } from "./Basics"
import useNav from "../model/useNav"

export default p => pug`
  - const {page} = useNav()
  - const why = page.why
  
  PopupRoot
    Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
      | Let's Talk

    .w-full.grow.flex.flex-col.overflow-y-scroll
      | Email
`