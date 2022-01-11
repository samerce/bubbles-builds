import Page from './Page'
import { Image, Header, PrimaryLink } from './Basics'
import rickyforhouse from '../public/images/rickyforhouse.jpg'

export default function RickyForHouse(p) { return pug`
  Page(
    id='rickyforhouse' index=p.index title='Ricky for House' shaderId='7dXczN'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Ricky for House
    div.grow.w-full.overflow-hidden.relative.flex-center(class='p-[18px]')
      Image(src=rickyforhouse width=1280 height=742 framed fillHeight)
    PrimaryLink.mt-7(href='https://ricky301.wixsite.com/rickyforhouse' newTab)
      | Go There
`}

var HowConfig = []

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}