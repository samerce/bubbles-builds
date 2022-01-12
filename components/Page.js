import { VSnapItem } from './Stack'
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
    if (p.index > page.index + 1 || p.index < page.index - 1 ||
      (p.index !== page.index && popupId)) {
      return 'hidden'
    } else return 'visible'
  }

  return (
    <VSnapItem {...p} id={p.id} onAppear={onAppear} style={{visibility: visibility()}} 
    className={'w-full h-full relative flex flex-col items-center pb-nav md:pb-navBig ' + p.className}>
      <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0" 
        src={`https://www.shadertoy.com/embed/${p.shaderId}?gui=false&t=10&paused=false&muted=true`}
        allowFullScreen 
      />

      {p.children}
    </VSnapItem>
  )
}
