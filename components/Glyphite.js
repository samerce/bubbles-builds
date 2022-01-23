import Page from './Page'
import { Image, Header, PortfolioLink } from './Basics'
import glyphite from '../public/images/glyphite.jpg'
import NImage from 'next/image'

export default function Glyphite(p) { return pug`
  Page(...p class='px-[18px]'
    id='glyphite' index=p.index title='Glyphite' shaderId='MdlXRS'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Glyphite
    Image(
      src=glyphite width=1280 height=767 framed priority=p.willAppear
      alt='portfolio screenshot of the Glyphite font-building web-app'
    )
`}

var HowConfig = [
  'AngularJS', 'Javascript', 'Express', 'HTML / JSX / Pug', 'CSS', 'Coffeescript', 'SASS', 'AWS S3', 'Git', 'Webpack', 'Crendo Creations', 'Third & Loom', 'Amazon.com', 'BSE Computer Science, University of Michigan', 'Node.js', 'Atom', 
]

var WhyConfig = {
  art: 'Glyphite.com was born out of a desire to easily create beautiful text for games. There were no tools to build rich, gorgeous, effect-laden fonts for games and we decided to fill that gap. Using this web-app, you could layer shadows, strokes, and fills to create stunning font sprites.',

  love: 'We offered this advanced tool on a donation model because we believed games should just have better fonts!',

  play: 'My then-partner and I had a blast building this and told the world about it at the Game Developer’s Conference in San Francisco in 2014. We dove in and created marketing materials, blog posts, booth displays, and a green-screen experience where people could pose for a picture, pick a backdrop, and add Glyphite-stylized text. It was well-received but our day jobs pulled us away from the project, and it fizzled shortly after.',
}