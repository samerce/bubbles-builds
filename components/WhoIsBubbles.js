import React from "react"
import { PopupRoot, Subheader, Section, SectionTitle, Button } from "./Basics"
import Image from 'next/image'
import usePopup from '../model/usePopup'

export default function WhoIsBubbles(p) { 
  const {hidePopup} = usePopup()

  return pug`
    PopupRoot.max-h-full.overflow-visible(...p className=p.className)

      div(class='absolute right-0 w-[320px] h-[180px] -translate-y-full pointer-events-none')
        Image(src='https://s3.us-east-2.amazonaws.com/purplerepublic.us/commons/bubbles-hi.gif' width=320 height=180 quality=90)

      Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
        | Who is Bubbles?

      div.w-full.grow.flex.flex-col.overflow-y-scroll.glass-dark.p-7
        p Bubbles (they/them) is a former software engineer for corporate giants. After leaving the inhumane conditions of corporate life, they traveled the world and began developing new skills. Now, Bubbles produces music, writes, and is developing their skills in graphic design.

      Subheader.border-t.border-tpWhite.bg-accent.rounded-b-2xl.relative.p-0.h-54
        button.w-full.h-full.font-button.text-white.border-none(onClick=hidePopup) Close
  `
}