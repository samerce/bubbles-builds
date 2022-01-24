import Page from './Page'
import { HSnapStack } from './Stack'
import { Header, Image, PortfolioLink, } from './Basics'
import { Fragment, useEffect } from 'react'
import useNav from "../model/useNav"
import usePopup, { Popups } from "../model/usePopup"

import eyy from '../public/images/eyy-site-new.jpg'
import eym from '../public/images/eym.jpg'
import eymBubbles from '../public/images/eym-bubbles.jpg'
import quark from '../public/images/quark.jpg'
import purpleRepublic from '../public/images/purple-republic.jpg'

const PageId = 'expressyouryes'
const HasSeenIntroKey = 'bubblesBuilds.hasSeenIntro'

export default function ExpressYourYes(p) { 
  const {page} = useNav()
  const {showPopup} = usePopup()

  useEffect(() => {
    const hasSeenIntro = localStorage[HasSeenIntroKey]
    if (page.id === PageId && !hasSeenIntro) {
      showPopup(Popups.NavIntro)
      localStorage[HasSeenIntroKey] = 'true'
    }
  }, [page.id])

  return pug`
    Page(
      id=PageId index=p.index title='Express Your Yes' shaderId='fdscR8'
      how=HowConfig why=WhyConfig
    )
      HSnapStack(items=Items)
  `
}

var Items = [
  {
    id: 'expressyouryes-now',
    Content: p => pug`
      Fragment
        Header.text-white express your yes
        Image(
          src=eyy width=1280 height=808 framed 
          alt='portfolio screenshot of expressyouryes.com'
        )
        PortfolioLink(href='https://www.expressyouryes.com' newTab)
          | Check It Out
    `,
  },
  {
    id: 'expressyourmess',
    Content: p => pug`
      Fragment
        Header.text-white express your mess
        Image(
          src=eym width=1280 height=824 framed 
          alt='portfolio screenshot of the immersive version of expressyourmess.com'
        )
        PortfolioLink(href='https://eym-parchment.herokuapp.com' newTab)
          | Go There
    `,
  },
  {
    id: 'expressyourmess-bubbles',
    Content: p => pug`
      Fragment
        Header.text-white express your mess — bubbles
        Image(
          src=eymBubbles width=1280 height=817 framed
          alt='portfolio screenshot of an early version of expressyourmess.com with bubbles'
        )
        PortfolioLink(href='https://eym-bubbleverse.herokuapp.com' newTab)
          | Experience It
    `,
  },
  {
    id: 'expressyourmess-quark',
    Content: p => pug`
      Fragment
        Header.text-white express your mess — quark
        Image(
          src=quark width=1280 height=813 framed
          alt='portfolio screenshot of the immersive storytelling version of expressyourmess.com'
        )
        PortfolioLink(href='https://purplerepublic-quark.herokuapp.com' newTab)
          | Hop on the Ride
    `,
  },
  {
    id: 'purplerepublic',
    Content: p => pug`
      Fragment
        Header.text-white purple republic
        Image(
          src=purpleRepublic width=1280 height=800 framed
          alt='portfolio screenshot of purplerepublic.com, the first iteration of our nonprofit'
        )
        PortfolioLink(href='https://purplerepublic-linear.herokuapp.com' newTab)
          | View It
    `,
  },
]

var HowConfig = [
  'Javascript', 'HTML / JSX / Pug', 'CSS', 'Webpack', 'Styled Components', 'React', 'Redux', 'Node.js', 'Coffeescript', 'Express Your Yes Foundation', 'Iodine.com', 'Crendo Creations', 'Third & Loom', 'Amazon.com', 'AWS Lambda', 'AWS S3', 'VSCode', 'Atom', 'Webpack', 'Git', 'Square Payments', 'Express', 'SASS', 'AWS CloudFront', 'BSE Computer Science, University of Michigan'
]

var WhyConfig = {
  art: 'These were the first projects I built after leaving the corporate world. They’re experiments at the edges of the norm; artistic explorations outside the confines of typical standards like usability and conversions.',

  love: 'One of the main goals with these projects was to shake the viewer out of their comfort zone. They often intentionally use obscurity and non-linearity as well as color-overload to overwhelm—an implicit invitation to be curious.',

  play: 'Above all, they are playful experiments designed to contrast the sea of grids and boxes. Highly animated and whimsical, they often take you on journeys rather than facilitate quick navigation, borne from a desire to create the unexpected awe you might feel on a hike or exploring a new city.',
}
