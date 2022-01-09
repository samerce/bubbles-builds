import Page from './Page'
import { Image, Header, PrimaryLink } from './Basics'
import dqitwh from '../public/images/dqitwh.jpg'

export default p => pug`
  Page(...p
    id='dqitwh' index=p.index title='Drag Queen in the White House' shaderId='fsfczH'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Drag Queen in the White House
    Image(src=dqitwh width=1280 height=828 framed fillHeight)
    PrimaryLink.mt-7(href='https://dragqueeninthewhitehouse.com' newTab)
      | See It
`

var HowConfig = [
  'React', 'Javascript', 'Express', 'HTML', 'CSS', 'Styled Components', 'Coffeescript', 'SASS', 'Square Payments', 'AWS S3', 'Redux', 'Git', 'Atom', 'Webpack', 'AWS Lambda', 'Express Your Yes Foundation', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}