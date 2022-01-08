import { Image, Header, PrimaryLink } from './Basics'
import { VSnapItem } from './Stack'
import rickyforhouse from '../public/images/rickyforhouse.jpg'
import useNav from '../model/useNav'

const id = 'rickyforhouse'

export default p => {
  const {onAppearPage} = useNav()
  function onAppear() {
    onAppearPage(id, 'Ricky for House', HowConfig, WhyConfig)
  }

  return pug`
    VSnapItem(id=id onAppear=onAppear)
      iframe.pointer-events-none.absolute.brightness-90(
        width="100%" height="100%" frameBorder="0" 
        src="https://www.shadertoy.com/embed/MdfBzl?gui=false&paused=false&muted=true" 
        allowFullScreen
      )

      .flex-100.h-full.relative.flex.flex-col.items-center.pb-nav
        Header.text-white Ricky for House
        Image(src=rickyforhouse width=1280 height=742 framed fillHeight)
        PrimaryLink.mt-7(href='https://ricky301.wixsite.com/rickyforhouse' newTab)
          | Go There
  `
}

var HowConfig = []

var WhyConfig = {
  art: 'Art',
  love: 'Love',
  play: 'Play',
}