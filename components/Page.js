import { VSnapItem } from './Stack'
import Shader from './Shader'
import useNav from '../model/useNav'
import usePopup from '../model/usePopup'

export default function Page(p) {
  const {page, pageDidAppear} = useNav()
  const {popupId} = usePopup()
  
  function onAppear() {
    pageDidAppear({
      id: p.id,
      index: p.index,
      title: p.title,
      how: p.how,
      why: p.why,
    })
  }

  function visibility() {
    // if (p.index > page.index + 1 || p.index < page.index - 1 ||
    //   (p.index !== page.index && popupId)) {
    //   return 'hidden'
    // } else 
    return 'visible'
  }

  return (
    <VSnapItem {...p} id={p.id} onAppear={onAppear} style={{visibility: visibility()}} 
    className={p.className + ' w-full h-full relative flex flex-col items-center pb-nav md:pb-navBig'}>

      <Shader className='pointer-events-none absolute-full' shaderId={p.shaderId} />
      {p.children}

    </VSnapItem>
  )
}
