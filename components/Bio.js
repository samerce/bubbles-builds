import React from 'react'
import { Button, } from './Basics'
import Page from './Page'
import usePopup, { Popups } from '../model/usePopup'

export default function Bio(p) {
  const {showPopup} = usePopup()

  return pug`
    Page.flex.items-center(
      id='bio' index=p.index title='Bubbles Builds' shaderId='sdscWS'
      how=HowConfig why=WhyConfig
    )
      div.absolute.pointer-events-none.flex-center.h-full.w-full
        div.rotate-6.leading-none.flex-center.flex-col.text-white.text-6xl.uppercase.font-head.text-shadow-6.drop-shadow-2xl(
          class='md:text-10xl'
        )
          div Bubbles
          div Builds
        
      Button.glass.text-3xl.h-54.px-8.pt-1.mt-auto(
        onClick=() => showPopup(Popups.WhoIsBubbles)
      )
        | Who is Bubbles?
  `
}

var HowConfig = [
  'Javascript', 'HTML / JSX / Pug', 'CSS', 'Pug', 'TailwindCSS', 'Webpack', 'Vercel',
  'React', 'Redux', 'Node.js', 'Next.js', 'Git', 'VSCode', 'Iodine.com', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'BSE Computer Science, University of Michigan', 'Express Your Yes Foundation'
]

var WhyConfig = {
  art: pug`
    | My portfolio spans two lives: pre-2016 as Samer Chahine, a Software Engineer looking for wealth with a popular app or a Big Tech job, and post-2016 as bubbles sandcastle, Samer reborn with a dedication to love and free expression. #[br] #[br] While I’m not artistically talented in a traditional sense, I am artisanal by nature and so I tend towards designing novel combinations of artistic elements. The shader backgrounds on this site are the perfect example: beautiful pieces of mathemetical art generously offered freely on the internet, perfect as atmospheric mood.
  `,

  love: 'The universe has shown me that my life and all its privileges are only possible because of the bravery and effort of others. On all my sites, I create a gratitude page thanking those who helped bring beauty and ease to my work. My wish is that this portfolio makes you smile—maybe even stand in awe 🤩—and if, like me, you are inspired towards heart-centered work, I hope that you hire me to help!',

  play: 'I designed this portfolio to mimic the supremely popular “TikTok” feed format. Even though I don’t use social media, the design is irresistably fun! My creations always feature playful elements—fun animations, bold colors, easter eggs and surprises—in hopes of bringing a bit of vibrancy and enchantment to technology. We can build so much more than productivity apps and mindless games with these incredible gadgets, and I strive to prove that in everything I create.',
}