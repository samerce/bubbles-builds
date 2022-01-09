import { PageTitle, Button, } from './Basics'
import Page from './Page'

export default p => pug`
  Page.flex.items-center(
    id='bio' index=p.index title='Bubbles Builds' shaderId='XdyXD3'
    how=HowConfig why=WhyConfig
  )
    .absolute.pointer-events-none.flex-center.h-full.w-full
      PageTitle.rotate-6.leading-none.grow.flex-center.flex-col
        div Bubbles
        div Builds
      
    Button.text-3xl.h-54.px-8.pt-1.mt-auto Who is Bubbles?
`

var HowConfig = [
  'Javascript', 'HTML', 'CSS', 'Pug', 'TailwindCSS', 'Webpack',
  'React', 'Redux', 'Node.js', 'Next.js', 'Git', 'VSCode', 'AWS S3', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}