import React from 'react'
import Page from './Page'
import { Header, Image, PrimaryLink } from './Basics'
import rickyforhouse from '../public/images/rickyforhouse.jpg'

export default function RickyForHouse(p) { return pug`
  Page(
    id='rickyforhouse' index=p.index title='Ricky for House' shaderId='7dXczN'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Ricky for House
    Image(src=rickyforhouse width=1280 height=742 framed)
    PrimaryLink(href='https://ricky301.wixsite.com/rickyforhouse' newTab)
      | Go There
`}

var HowConfig = [
  'Wix', 'Express Your Yes Foundation', 'Iodine.com', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'BSE Computer Science, University of Michigan', 'Javascript',
]

var WhyConfig = {
  art: pug`
    | My partner Ricky’s last-minute political campaign was a call to bring art into politics. With only months left before the election, we filled out the paperwork and I whipped up the site on Wix.com in under a week. #[br] #[br] The theory: labeling art as “nice-to-have,” and only in times of prosperity is a major root of cultural injustice and disunity. The solution: bring art into institution. By ritually building an atmosphere of creation and chaos exploration, novel solutions and broad empathy could be fostered from the top down.
  `,

  love: 'We can only love what we understand. Our divisive politics make it clear that our citizens do not understand each other much these days. Threading together art and institution, Ricky’s campaign suggested that the inherent uncertainty and explorative nature of art would help politicians design more creative solutions and be more open to new ideas, exploring unusual concepts, and experimentation. These values would then trickle down into the population, making us more curious about each other, about the sondering nature of each person’s life and the essential interconnectivity of us all.',

  play: pug`
    | The website aimed to encourage people to dip into these ideas by asking them to participate in Twitter threads on each of the issues. Social media is a powerful tool for divisiveness #[em and] unity. If used more effectively and deliberately by government, the public could playfully engage with policy and we could come up with creative, representative, and heart-forward solutions together!
  `,
}