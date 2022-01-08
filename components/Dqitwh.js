import { Image, Header, PrimaryLink } from './Basics'
import { VSnapItem } from './Stack'
import dqitwh from '../public/images/dqitwh.jpg'
import useNav from '../model/useNav'

const id = 'dqitwh'

export default p => {
  const {onAppearPage} = useNav()
  function onAppear() {
    onAppearPage(id, 'Drag Queen in the White House', HowConfig, WhyConfig)
  }

  return pug`
    VSnapItem(id=id onAppear=onAppear)
      iframe.pointer-events-none.absolute.brightness-90(
        width="100%" height="100%" frameBorder="0" 
        src="https://www.shadertoy.com/embed/NlKSzc?gui=false&paused=false&muted=true" 
        allowFullScreen
      )

      .flex-100.h-full.relative.flex.flex-col.items-center.pb-nav
        Header.text-white Drag Queen in the White House
        Image(src=dqitwh width=1280 height=828 framed fillHeight)
        PrimaryLink(href='https://dragqueeninthewhitehouse.com' newTab)
          | See It
  `
}

var HowConfig = [
  'React', 'Javascript', 'Express', 'HTML', 'CSS', 'Styled Components', 'Coffeescript', 'SASS', 'Square Payments', 'AWS S3', 'Redux', 'Git', 'Atom', 'Webpack', 'AWS Lambda', 'Express Your Yes Foundation', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}