import Page from './Page'
import { Image, Header, PrimaryLink } from './Basics'
import { HSnapStack } from './Stack'
import useScreenSize from '../hooks/useScreenSize'
import psymailCommerce from '../public/images/psymail-commerce.jpg'
import psymailDrawer from '../public/images/psymail-drawer.jpg'
import { Fragment } from 'react'

export default function Psymail(p) { 
  const {screenWidth} = useScreenSize()

  return pug`
  Page(...p
    id='psymail' index=p.index title='Psymail' shaderId='7dfyzN'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Prototype: Psymail

    if screenWidth < 1080
      div.w-full.h-full
        HSnapStack(items=Items)
    else
      div.flex-center.w-full.h-full.grow
        Commerce
        div.basis-20
        Drawer
`}

var Commerce = p => pug`
  Image(src=psymailCommerce width=591 height=1280 framed fillHeight)
`
var Drawer = p => pug`
  Image(src=psymailDrawer width=591 height=1280 framed fillHeight)
`

const ItemClasses = 'py-[18px]'
var Items = [
  {
    id: 'psymail-commerce',
    className: ItemClasses,
    Content: Commerce
  },
  {
    id: 'psymail-drawer',
    className: ItemClasses,
    Content: Drawer,
  }
]

var HowConfig = [
  'React', 'Javascript', 'Express', 'HTML', 'CSS', 'Styled Components', 'Coffeescript', 'SASS', 'Square Payments', 'AWS S3', 'Redux', 'Git', 'Atom', 'Webpack', 'AWS Lambda', 'Express Your Yes Foundation', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}