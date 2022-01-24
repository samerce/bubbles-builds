import React from 'react'
import { Button, Icon } from './Basics'
import Page from './Page'
import usePopup, { Popups } from '../model/usePopup'

export default function LetsBuild(p) {
  const {showPopup} = usePopup()

  return pug`
    Page.flex.items-center(
      id='letsbuild' index=p.index title='Let’s Build Together!' shaderId='Nslyz8'
    )
      div.absolute.pointer-events-none.flex-center.h-full.w-full
        h1.rotate-6.leading-none.text-accentWhite.text-6xl.uppercase.font-head.text-shadow-6.drop-shadow-2xl.text-center(
          class='md:text-10xl'
        ) Let’s Build #[br] Together!
        
      Button.glass.text-3xl.h-54.px-8.pt-1.mt-auto(
        onClick=() => showPopup(Popups.Thanks)
        aria-label='open the gratitude page'
      )
        Icon(name='like-fill' size=36 aria-hidden)
  `
}