import React from "react"
import { Box, Subheader, Section } from "./Basics"
import useNav from "../model/useNav"

export default p => pug`
  - const {nav} = useNav()
  Box.h-full.flex.flex-col.overflow-hidden(class='max-w-[777px]')
    Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
      | The Inspiration for #{nav.pageTitle}

    .w-full.grow.flex.flex-col.overflow-y-scroll
      Section
`