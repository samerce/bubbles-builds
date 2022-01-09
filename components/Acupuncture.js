import Page from './Page'
import { Image, Header, PrimaryLink } from './Basics'
import { HSnapStack } from './Stack'
import { Fragment } from 'react'
import abby from '../public/images/abby.jpg'
import brodie from '../public/images/brodie.jpg'
import heather from '../public/images/heather.jpg'

export default p => pug`
  Page(
    id='acupuncture' index=p.index title='Acupuncture' shaderId='Ws3fR7'
    how=HowConfig why=WhyConfig
  )
    HSnapStack(items=Items)
`

var Items = [
  {
    id: 'abby',
    Content: p => pug`
      Fragment
        Header.text-white Elemental Healing with Abby
        Image(src=abby width=1280 height=800 framed fillHeight)
        PrimaryLink.mt-7(href='https://bubblepillow.wixsite.com/website-3' newTab)
          | Go There
    `,
  },
  {
    id: 'brodie',
    Content: p => pug`
      Fragment
        Header.text-white The Lotus Center
        Image(src=brodie width=1280 height=800 framed fillHeight)
        PrimaryLink.mt-7(href='https://www.annarboracupuncture.com' newTab)
          | Check It Out
    `,
  },
  {
    id: 'heather',
    Content: p => pug`
      Fragment
        Header.text-white Heather Sloan Acupuncture
        Image(src=heather width=1280 height=800 framed fillHeight)
        PrimaryLink.mt-7(href='https://www.heather-sloan.com' newTab)
          | Visit
    `,
  }
]

var HowConfig = []

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}