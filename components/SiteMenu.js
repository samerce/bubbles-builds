import React from "react"
import { PopupRoot, Subheader, Section, SectionTitle } from "./Basics"
import usePopup from "../model/usePopup"

export default p => {
  const {hidePopup} = usePopup()

  function onClick(id) { 
    hidePopup()
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({behavior: "smooth"})
    }, 100)
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

  `
}