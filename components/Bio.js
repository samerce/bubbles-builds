import { PageTitle } from './Basics'
import { VSnapItem } from './Stack'
import useNav from '../model/useNav'

export default p => {
  const {onAppearPage} = useNav()
  const id = 'home'
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

var HowConfig = []

var WhyConfig = {

}