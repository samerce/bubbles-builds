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
  'React', 'Javascript', 'Express', 'HTML / JSX / Pug', 'CSS', 'Styled Components', 'Coffeescript', 'SASS', 'Square Payments', 'AWS S3', 'Redux', 'Git', 'Atom', 'Webpack', 'AWS Lambda', 'Express Your Yes Foundation', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}