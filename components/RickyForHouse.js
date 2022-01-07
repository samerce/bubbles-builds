import { FramedImage, Header, PrimaryLink } from './Basics'
import { VSnapItem } from './Stack'
import rickyforhouse from '../public/images/rickyforhouse.jpg'
import useNav from '../model/useNav'

export default p => {
  const {onAppearPage} = useNav()
  const id = 'rickyforhouse'
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

      .flex-100.h-full.relative.snap-start.snap-always.flex.flex-col.items-center
        Header.text-white Ricky for House
        FramedImage(src=rickyforhouse class='w-[640px]')
        PrimaryLink.mt-7(href='https://ricky301.wixsite.com/rickyforhouse' newTab)
          | Go There
  `
}

var HowConfig = []

var WhyConfig = {

}