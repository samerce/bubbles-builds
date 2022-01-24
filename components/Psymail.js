import Page from './Page'
import { Image, Header, } from './Basics'
import { HSnapStack } from './Stack'
import useScreenSize from '../hooks/useScreenSize'
import psymailCommerce from '../public/images/psymail-commerce.jpg'
import psymailDrawer from '../public/images/psymail-drawer.jpg'
import psymailMessageDrawer from '../public/images/psymail-message-drawer.jpg'

export default function Psymail(p) { 
  const {screenWidth} = useScreenSize()

  return pug`
  Page(...p
    id='psymail' index=p.index title='Psymail' shaderId='7slyRS'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Prototype: Psymail

    if screenWidth < 1080
      HSnapStack(items=Items itemProps=p)
    else
      div.flex-center.w-full.h-full.overflow-hidden
        div.h-full.relative
          Commerce(...p)

        div.basis-16
        
        div.h-full.relative
          Drawer(...p)
          
        div.basis-16
        
        div.h-full.relative
          MessageDrawer(...p)
`}

var Commerce = p => pug`
  Image(
    src=psymailCommerce width=591 height=1280 framed
    alt='portfolio screenshot of the inbox view of Psymail, an iOS email app prototype'
  )
`
var Drawer = p => pug`
  Image(
    src=psymailDrawer width=591 height=1280 framed
    alt='portfolio screenshot of the drawer view of Psymail, an iOS email app prototype'
  )
`

var MessageDrawer = p => pug`
  Image(
    src=psymailMessageDrawer width=591 height=1280 framed
    alt='portfolio screenshot of the message view of Psymail, an iOS email app prototype'
  )
`

var Items = [
  {
    id: 'psymail-commerce',
    Content: Commerce
  },
  {
    id: 'psymail-drawer',
    Content: Drawer,
  },
  {
    id: 'psymail-message-drawer',
    Content: MessageDrawer,
  }
]

var HowConfig = [
   'Objective-C', 'Swift', 'SwiftUI', 'Apple Core Data', 'Apple Core ML', 'Xcode', 'iOS', 'Git', 'Express Your Yes Foundation', 'Iodine.com', 'Crendo Creations', 'Third & Loom', 'Amazon.com', 'BSE Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'I built Psymail to experiment with fun and effortless email management. Magically sorting email is not new but it hasn’t been done well yet—the right filters, workflows, and customizations, I figured, would make all the difference. ',

  love: 'The plan is to release Psymail on a donation model, to share the joy of better email with everyone. Since email is hosted by the provider and Core Data stores everything in Apple’s cloud, it costs nothing to run, so why not pay it forward?',

  play: 'Psymail is designed with fluid swipes at the fore. The drawer design that has recently grown in popularity is used throughout. So with one little swipe you can switch inbox perspectives, take action on emails, and use advanced composition tools—fabulous, fun and fast!',
}