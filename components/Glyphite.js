import Page from './Page'
import { Image, Header, PrimaryLink } from './Basics'
import glyphite from '../public/images/glyphite.jpg'
import NImage from 'next/image'

export default function Glyphite(p) { return pug`
  Page(...p class='px-[18px]'
    id='glyphite' index=p.index title='Glyphite' shaderId='ssXczN'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Glyphite
    Image(src=glyphite width=1280 height=767 framed)
`}

var HowConfig = [
  'React', 'Javascript', 'Express', 'HTML', 'CSS', 'Styled Components', 'Coffeescript', 'SASS', 'Square Payments', 'AWS S3', 'Redux', 'Git', 'Atom', 'Webpack', 'AWS Lambda', 'Express Your Yes Foundation', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}