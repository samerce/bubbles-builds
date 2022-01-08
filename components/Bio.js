import { PageTitle } from './Basics'
import { VSnapItem } from './Stack'
import useNav from '../model/useNav'

const id = 'bio'

export default p => {
  const {onAppearPage} = useNav()
  function onAppear() {
    onAppearPage(id, 'Bubbles Builds', HowConfig, WhyConfig)
  }

  return pug`
    VSnapItem(id=id onAppear=onAppear)
      iframe.pointer-events-none.absolute(width="100%" height="100%" frameBorder="0" 
        src="https://www.shadertoy.com/embed/XdyXD3?gui=false&t=10&paused=false&muted=true" 
        allowFullScreen
      )

      .flex-center.h-full.snap-start.snap-always.relative.pb-nav
        PageTitle.rotate-6.leading-none
          div Bubbles
          div Builds
  `
}

var HowConfig = [
  'Javascript', 'HTML', 'CSS', 'Pug', 'TailwindCSS', 'Webpack',
  'React', 'Redux', 'Node.js', 'Next.js', 'Git', 'VSCode', 'AWS S3', 'Iodine', 'Clover Labs', 'Third & Loom', 'Amazon.com', 'B.S.E. Computer Science, University of Michigan',
]

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}