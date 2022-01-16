import React from 'react'
import Page from './Page'
import { Header, Image, PrimaryLink } from './Basics'
import dqitwh from '../public/images/dqitwh.jpg'

export default function Dqitwh(p) { return pug`
  Page(...p
    id='dqitwh' index=p.index title='Drag Queen in the White House' shaderId='fsfczH'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Drag Queen in the White House
    Image(src=dqitwh width=1280 height=828 framed)
    PrimaryLink(href='https://dragqueeninthewhitehouse.com' newTab)
      | See It
`}

var HowConfig = [
  'React', 'Javascript', 'Express', 'HTML / JSX / Pug', 'CSS', 'Styled Components', 'Coffeescript', 'SASS', 'Square Payments', 'AWS S3', 'Redux', 'Node.js', 'Git', 'Atom', 'Webpack', 'AWS Lambda', 'Express Your Yes Foundation', 'Iodine.com', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'BSE Computer Science, University of Michigan', 'AWS CloudFront',
]

var WhyConfig = {
  art: pug`
    | My partner’s first book, Drag Queen in the White House, was published in 2020. It is a call to abandon identity politics in America in favor of an art-centered and healing-first approach to political and social ills. #[br] #[br] In addition to helping edit and design the book, some of my art is featured in it and I built this website as a digital pop-up version of its ideas. The book is also for sale via a custom checkout experience made with the Square API.
  `,

  love: 'The book focuses on exploring ways to create a society based on love rather than profit. The site offers quick-flick cards prompting the viewer to imagine a world where no one is left behind because they don’t provide what’s typically considered valuable to society. The book asks, “What if we were to validate everyone’s existence, simply because they’re here?”',

  play: 'One of the book’s theories is that if a sense of playfulness and levity were brought into politics, then we might not build such punitive and divisive systems. The aesthetic of the site is inspired by this idea—bold colors, animated backdrops, and gratuitous art. Visitors can buy art on the site, and when buying the book, they can choose to barter or pick their own price!',
}