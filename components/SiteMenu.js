import React from "react"
import { PopupRoot, Subheader, Section, SectionTitle } from "./Basics"
import usePopup from "../model/usePopup"

export default function SiteMenu(p) {
  const {hidePopup} = usePopup()

  function onClick(id) { 
    hidePopup()
    setTimeout(() => {
      window.location = '#' + id
    }, 200)
  }

  return pug`
    PopupRoot
      Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
        | Bubbles Builds!

      .w-full.grow.flex.flex-col.overflow-y-scroll
        Section
          SectionTitle.rotate-3(onClick=() => onClick('bio')) Who is Bubbles?

        Section
          SectionTitle.-rotate-2(onClick=() => onClick('expressyouryes')) Express Your Yes

        Section
          SectionTitle.rotate-2(onClick=() => onClick('rickyforhouse')) Ricky for House
        
        Section
          SectionTitle.rotate-2(onClick=() => onClick('acupuncture')) Acupuncture

        Section
          SectionTitle.rotate-2(onClick=() => onClick('dqitwh')) DQITWH

        Section
          SectionTitle.-rotate-1(onClick=() => onClick('flitandland')) Flit & Land

        Section
          SectionTitle.-rotate-1(onClick=() => onClick('psymail')) Psymail

        Section
          SectionTitle.-rotate-1(onClick=() => onClick('glyphite')) Glyphite

  `
}