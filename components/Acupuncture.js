import React from 'react'
import Page from './Page'
import { Header, Image, PrimaryLink } from './Basics'
import { HSnapStack } from './Stack'
import { Fragment } from 'react'
import abby from '../public/images/abby.jpg'
import brodie from '../public/images/brodie.jpg'
import heather from '../public/images/heather.jpg'

export default function Acupuncture(p) { return pug`
  Page(
    id='acupuncture' index=p.index title='Acupuncture' shaderId='Ws3fR7'
    how=HowConfig why=WhyConfig
  )
    HSnapStack(items=Items)
`}

var Items = [
  {
    id: 'abby',
    Content: p => pug`
      Fragment
        Header.text-white Elemental Healing with Abby
        Image(src=abby width=1280 height=800 framed)
        PrimaryLink(href='https://bubblepillow.wixsite.com/website-3' newTab)
          | Go There
    `,
  },
  {
    id: 'brodie',
    Content: p => pug`
      Fragment
        Header.text-white The Lotus Center
        Image(src=brodie width=1280 height=800 framed)
        PrimaryLink(href='https://www.annarboracupuncture.com' newTab)
          | Check It Out
    `,
  },
  {
    id: 'heather',
    Content: p => pug`
      Fragment
        Header.text-white Heather Sloan Acupuncture
        Image(src=heather width=1280 height=800 framed)
        PrimaryLink(href='https://www.heather-sloan.com' newTab)
          | Visit
    `,
  }
]

var HowConfig = [
  'Wix', 'Iodine.com', 'Express Your Yes Foundation', 'Amazon.com', 'Clover Labs', 'Third & Loom', 'BSE Computer Science, University of Michigan', 'Javascript'
]

var WhyConfig = {
  art: 'In desigining these three websites for Acupuncturists in Ann Arbor, Michigan, I aimed to fuse the avant-garde explorations of Express Your Yes with business practicality. This produced some elegant patterns: full-spread imagery to immerse, flowing visual elements to take you on a journey, and playful flourishes to bring a bit of whimsy.',

  love: pug`
    | All three of these clients are committed to diversity, equity, and inclusion. So, we took care to avoid appropriating Chinese symbology, instead opting for natural scenery. When choosing photos of people, we balanced representation of their current clientele with inviting new ones. #[br] #[br] Most of them offer special pricing to those with economic difficulty and some even accept hour-for-hour trades, bypassing money completely. As a queer person, I help clients prioritize these details so that our work contributes to unifying our species through love rather than dollar bills.
  `,

  play: 'I was compensated for my work with cash and acupuncture sessions. Part of building a piece of art that stands alone to represent an experience is to immerse yourself in it. I received acupuncture from all three of them and built those experiences into the personality of each site.',
}