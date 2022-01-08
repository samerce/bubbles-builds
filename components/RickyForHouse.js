import Page from './Page'
import { Image, Header, PrimaryLink } from './Basics'
import rickyforhouse from '../public/images/rickyforhouse.jpg'

export default p => pug`
  Page(
    id='rickyforhouse' index=p.index title='Ricky for House' shaderId='ll2GD3'
    how=HowConfig why=WhyConfig
  )
    .flex-100.h-full.relative.flex.flex-col.items-center.pb-nav
      Header.text-white Ricky for House
      Image(src=rickyforhouse width=1280 height=742 framed fillHeight)
      PrimaryLink.mt-7(href='https://ricky301.wixsite.com/rickyforhouse' newTab)
        | Go There
`

var HowConfig = []

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}