import { FramedImage, Header, PrimaryLink } from './Basics'
import { VSnapItem } from './Stack'
import dqitwh from '../public/images/dqitwh.jpg'
import useNav from '../model/useNav'

export default p => {
  const {onAppearPage} = useNav()
  const id = 'dqitwh'
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

      .flex-100.h-full.relative.snap-start.snap-always.flex.flex-col.items-center
        Header.text-white Drag Queen in the White House
        FramedImage(src=dqitwh class='w-[640px]')
        PrimaryLink(href='https://dragqueeninthewhitehouse.com' newTab)
          | See It
  `
}

var HowConfig = []

var WhyConfig = {

}