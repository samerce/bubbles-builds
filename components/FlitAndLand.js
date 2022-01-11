import Page from './Page'
import { Image, Header, PrimaryLink } from './Basics'
import flitandland from '../public/images/flitandland.jpg'

export default function FlitAndLand(p) { return pug`
  Page(...p
    id='flitandland' index=p.index title='Flit & Land' shaderId='7sfyzN'
    how=HowConfig why=WhyConfig
  )
    Header.text-white Prototype: Flit & Land
    
    div.grow.w-full.overflow-hidden.relative.flex-center(class='p-[18px]')
      Image(src=flitandland width=1280 height=799 framed fillHeight)
    
    PrimaryLink.mt-7(href='https://flitandland-beta.herokuapp.com' newTab)
      | See It
`}

var HowConfig = [
  'React', 'Javascript', 'Express', 'HTML', 'CSS', 'Styled Components', 'Coffeescript', 'SASS', 'Square Payments', 'AWS S3', 'Redux', 'Git', 'Atom', 'Webpack', 'AWS Lambda', 'Express Your Yes Foundation', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}