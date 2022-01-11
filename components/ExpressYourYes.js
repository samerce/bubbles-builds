import Page from './Page'
import { HSnapStack } from './Stack'
import { PrimaryLink, Header, Image } from './Basics'
import { Fragment } from 'react'

import eyy from '../public/images/eyy-site.jpg'
import eym from '../public/images/eym.jpg'
import eymBubbles from '../public/images/eym-bubbles.jpg'
import quark from '../public/images/quark.jpg'
import purpleRepublic from '../public/images/purple-republic.jpg'

export default function ExpressYourYes(p) { return pug`
  Page(
    id='expressyouryes' index=p.index title='Express Your Yes' shaderId='fdscR8'
    how=HowConfig why=WhyConfig
  )
    HSnapStack(items=Items)
`}

var Items = [
  {
    id: 'expressyouryes-now',
    Content: p => pug`
      Fragment
        Header.text-white express your yes
        Image(src=eyy width=1280 height=808 framed fillHeight)
        PrimaryLink(href='https://www.expressyouryes.com' newTab)
          | Check It Out
    `,
  },
  {
    id: 'expressyourmess',
    Content: p => pug`
      Fragment
        Header.text-white express your mess
        Image(src=eym width=1280 height=824 framed fillHeight)
        PrimaryLink(href='https://eym-parchment.herokuapp.com' newTab)
          | Go There
    `,
  },
  {
    id: 'expressyourmess-bubbles',
    Content: p => pug`
      Fragment
        Header.text-white express your mess — bubbles
        Image(src=eymBubbles width=1280 height=817 framed fillHeight)
        PrimaryLink(href='https://eym-bubbleverse.herokuapp.com' newTab)
          | Experience It
    `,
  },
  {
    id: 'expressyourmess-quark',
    Content: p => pug`
      Fragment
        Header.text-white express your mess — quark
        Image(src=quark width=1280 height=813 framed fillHeight)
        PrimaryLink(href='https://purplerepublic-quark.herokuapp.com' newTab)
          | Hop on the Ride
    `,
  },
  {
    id: 'purplerepublic',
    Content: p => pug`
      Fragment
        Header.text-white purple republic
        Image(src=purpleRepublic width=1280 height=800 framed fillHeight)
        PrimaryLink(href='https://purplerepublic-linear.herokuapp.com' newTab)
          | View It
    `,
  },
]

var HowConfig = [
  'Javascript', 'HTML', 'CSS', 'Webpack', 'Styled Components', 'React', 'Redux', 'Node.js', 'Coffeescript', 
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}
