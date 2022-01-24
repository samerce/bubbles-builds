import React, { Fragment } from "react"
import { PopupRoot, Subheader, PopupCloseButton, Text, } from "./Basics"
import usePopup from "../model/usePopup"
import { makeEnum } from "../utils/lang"

export const Alerts = makeEnum('DesktopOnly', 'ImpairedSite')

export default function Alert(p) { 
  const {popupProps = {}} = usePopup()
  const {title= null, contentId = '', button = {}} = popupProps
  const Content = AlertContent[contentId] || (p => <div />)

  return pug`
    PopupRoot(...p className=p.className + ' lg:max-w-[540px]')
      Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
        | #{title || 'Take Note'}

      div.w-full.grow.flex.flex-col.overflow-y-scroll.py-2.bg-accentBlack.text-center.text-accentWhite
        Content

      PopupCloseButton(onClick=button.onClick) #{button.text}
  `
}

var AlertContent = {
  DesktopOnly: p => pug`
    Fragment
      Text Time has not been kind to the mobile friendliness of this site, but I'm working to fix it!
      Text For now, please use a desktop computer.
  `,
  ImpairedSite: p => pug`
    Fragment
      Text Please note that this site isn’t working as intended right now—the content doesn’t load, but you can still get a feel for the design.
      Text I’m working on a fix!
  `,
}