import { HSnapStack, VSnapItem } from './Stack'
import { PageTitle, PrimaryLink, Button, Header, Box, FramedImage, Image } from './Basics'
import { Fragment } from 'react'
import useNav from '../model/useNav'

import eyy from '../public/images/eyy-site.jpg'
import eym from '../public/images/eym.jpg'
import eymBubbles from '../public/images/eym-bubbles.jpg'
import quark from '../public/images/quark.jpg'

export default p => {
  const {onAppearPage} = useNav()
  const id = 'expressyouryes'
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

      HSnapStack.flex-100.h-full.relative.snap-start.snap-always(
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
        FramedImage(src=eyy class='w-[800px]')
        PrimaryLink.mt-6(href='https://www.expressyouryes.com' newTab)
          | Check It Out
    `,
  },
  {
    id: 'expressyourmess',
    Content: p => pug`
      Fragment
        Header.text-white express your mess
        FramedImage(src=eym class='w-[800px]')
        PrimaryLink.mt-6(href='https://eym-parchment.herokuapp.com' newTab)
          | Go There
    `,
  },
  {
    id: 'expressyourmess-bubbles',
    Content: p => pug`
      Fragment
        Header.text-white express your mess — bubbles
        FramedImage(src=eymBubbles class='w-[800px]')
        PrimaryLink.mt-6(href='https://eym-bubbleverse.herokuapp.com' newTab)
          | Experience It
    `,
  },
  {
    id: 'expressyourmess-quark',
    Content: p => pug`
      Fragment
        Header.text-white express your mess — quark
        FramedImage(src=quark class='w-[800px]')
        PrimaryLink.mt-6(href='https://purplerepublic-quark.herokuapp.com' newTab)
          | Hop on the Ride
    `,
  },
]

var HowConfig = []

var WhyConfig = {

}