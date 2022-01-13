import Page from './Page'
import { Image, Header, } from './Basics'
import { HSnapStack } from './Stack'
import useScreenSize from '../hooks/useScreenSize'
import psymailCommerce from '../public/images/psymail-commerce.jpg'
import psymailDrawer from '../public/images/psymail-drawer.jpg'

export default function Psymail(p) { 
  const {screenWidth} = useScreenSize()

  return pug`
  Page(...p
    id='psymail' index=p.index title='Psymail' shaderId='7dfyzN'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Prototype: Psymail

    if screenWidth < 1080
      HSnapStack(items=Items)
    else
      div.flex-center.w-full.h-full.overflow-hidden
        div.h-full.relative
          Commerce

        div.basis-16
        
        div.h-full.relative
          Drawer
`}

var Commerce = p => pug`
  Image(src=psymailCommerce width=591 height=1280 framed)
`
var Drawer = p => pug`
  Image(src=psymailDrawer width=591 height=1280 framed)
`

var Items = [
  {
    id: 'psymail-commerce',
    Content: Commerce
  },
  {
    id: 'psymail-drawer',
    Content: Drawer,
  }
]

var HowConfig = [
  'React', 'Javascript', 'Express', 'HTML / JSX / Pug', 'CSS', 'Styled Components', 'Coffeescript', 'SASS', 'Square Payments', 'AWS S3', 'Redux', 'Git', 'Atom', 'Webpack', 'AWS Lambda', 'Express Your Yes Foundation', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}