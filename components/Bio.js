import { Button, } from './Basics'
import Page from './Page'
import usePopup, { Popups } from '../model/usePopup'

export default function Bio(p) {
  const {showPopup} = usePopup()

  return pug`
    Page.flex.items-center(
      id='bio' index=p.index title='Bubbles Builds' shaderId='XdyXD3'
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
  'Javascript', 'HTML / JSX / Pug', 'CSS', 'Pug', 'TailwindCSS', 'Webpack',
  'React', 'Redux', 'Node.js', 'Next.js', 'Git', 'VSCode', 'AWS S3', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}