import { HSnapStack, VSnapItem } from './Stack'
import { PageTitle, PrimaryLink, Button, Header, Box, Image } from './Basics'
import { Fragment } from 'react'
import useNav from '../model/useNav'

import eyy from '../public/images/eyy-site.jpg'
import eym from '../public/images/eym.jpg'
import eymBubbles from '../public/images/eym-bubbles.jpg'
import quark from '../public/images/quark.jpg'

const id = 'expressyouryes'

export default p => {
  const {onAppearPage} = useNav()

  function onAppear() {
    onAppearPage(id, 'Express Your Yes', HowConfig, WhyConfig)
  }

  return pug`
    VSnapItem(id=id onAppear=onAppear)
      iframe.pointer-events-none.absolute.brightness-90(
        width="100%" height="100%" frameBorder="0" 
        src="https://www.shadertoy.com/embed/NlKSzc?gui=false&paused=false&muted=true" 
        allowFullScreen
      )

      HSnapStack.flex-100.h-full.relative(
        items=Items
      )
  `
}

var Items = [
  {
    id: 'expressyouryes-now',
    Content: p => pug`
      Fragment
        Header.text-white express your yes
        Image(src=eyy width=1280 height=808 framed fillHeight)
        PrimaryLink.mt-6(href='https://www.expressyouryes.com' newTab)
          | Check It Out
    `,
  },
  {
    id: 'expressyourmess',
    Content: p => pug`
      Fragment
        Header.text-white express your mess
        Image(src=eym width=1280 height=824 framed fillHeight)
        PrimaryLink.mt-6(href='https://eym-parchment.herokuapp.com' newTab)
          | Go There
    `,
  },
  {
    id: 'expressyourmess-bubbles',
    Content: p => pug`
      Fragment
        Header.text-white express your mess — bubbles
        Image(src=eymBubbles width=1280 height=817 framed fillHeight)
        PrimaryLink.mt-6(href='https://eym-bubbleverse.herokuapp.com' newTab)
          | Experience It
    `,
  },
  {
    id: 'expressyourmess-quark',
    Content: p => pug`
      Fragment
        Header.text-white express your mess — quark
        Image(src=quark width=1280 height=813 framed fillHeight)
        PrimaryLink.mt-6(href='https://purplerepublic-quark.herokuapp.com' newTab)
          | Hop on the Ride
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
