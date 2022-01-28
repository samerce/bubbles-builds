import React from "react"
import { 
  PopupRoot, Subheader, Section, SectionTitle, Text, PopupCloseButton, Link
} from "./Basics"
import Image from 'next/image'
import usePopup, { Popups } from '../model/usePopup'
import usePopupScrollReset from "../hooks/usePopupScrollReset"

const ScrollerId = 'thanks-scroller'

export default function Thanks(p) { 
  const {hidePopup} = usePopup()

  function goToAnchor(id) {
    hidePopup()
    setTimeout(() => window.location = '#' + id, 200)
  }

  usePopupScrollReset(ScrollerId, Popups.Thanks)

  return pug`
    PopupRoot(...p)

      Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
        | A Trillion Thanks!

      div.w-full.grow.flex.flex-col.overflow-y-scroll.glass-dark(
        class='md:pb-9 md:px-3'
        id=ScrollerId
      )
        ThanksSection 
          SectionTitle.rotate-2.mb-2 friends & family
          Text My work and I are not possible without my loving family, including my partner Petals, my mom Priscilla, my brother Rameen, my sister Alyana, and some awesome friends who helped me brainstorm and test: Koki, T, and Abby.

        ThanksSection.mt-0
          SectionTitle.-rotate-3.mb-2 shaders
          Text The gorgeous backgrounds on this site are shaders from creators on Shadertoy.com. Huge thanks to their painstaking work developing the equations that make these stunning pieces of art. It still blows my mind that they’re made with only math and sometimes some images of just “noise”. So grateful the following talented humans have offered their work for free:
          ItemGroup
            Item(href='https://www.shadertoy.com/user/FabriceNeyret2') Fabrice Neyret 2 (Landing)
            Item(href='https://www.shadertoy.com/user/CyanSprite') CyanSprite (Express Your Yes)
            Item(href='https://www.shadertoy.com/user/LucaHofmann') Luca  Hoffman (Ricky for House)
            Item(href='https://www.shadertoy.com/user/glkt') GLKT (Acupuncture)
            Item(href='https://www.shadertoy.com/user/Logos') Logos (DQITWH)
            Item(href='https://www.shadertoy.com/user/firanolfind') Firanolfind (Flit & Land)
            Item(href='https://www.shadertoy.com/user/ZhaoGD') ZhaoGD (Psymail)
            Item(href='https://www.shadertoy.com/user/nimitz') Nimitz (Glyphite)
            Item(href='https://www.shadertoy.com/user/Roninkoi') Roninkoi (BJG)
            Item(href='https://www.shadertoy.com/user/Nicolas2') Nicolas 2 (Let's Build)

        ThanksSection
          SectionTitle.rotate-1.mb-2 fonts
          Text Anyone who knows me, knows I obsess over fonts. They can make or break a design and I spent several hours picking and re-picking fonts for this site. Many thanks to the following designers (and Google Fonts) who offer their impeccable fonts for free:
          ItemGroup
            Item(href='https://github.com/Fonthausen/CrimsonPro') Jacques Le Bailly (Crimson Pro)
            Item(href='http://sorkintype.com') Sorkin Type (Denk One)
            Item(href='https://fonts.google.com/specimen/Bayon?query=Bayon#about') Danh Hong (Bayon)

        ThanksSection
          SectionTitle.-rotate-2.mb-2 icons
          Text The icons are generously provided by:
          ItemGroup
            Item(href='https://github.com/react-icons/react-icons') Font Awesome via React Icons
            Item(href='https://supercons.vercel.app') Supercons
          
        
      PopupCloseButton
  `
}

var ThanksSection = p => pug`
  Section.flex-col.items-center.my-4(...p className=p.className)
`

var ItemGroup = p => pug`
  div.w-full.flex-center.flex-wrap(...p)
`

var Item = p => pug`
  Link.px-4.m-2.text-lg(...p newTab type='secondary' className='pt-[9px] pb-[6px]')
`