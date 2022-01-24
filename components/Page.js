import { VSnapItem } from './Stack'
import useNav from '../model/useNav'
import usePopup from '../model/usePopup'
import { useEffect, useState } from 'react'

export default function Page(p) {
  const [hasLoaded, setHasLoaded] = useState(false)
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

  function canLoad() {
    return hasLoaded || p.index === page.index + 1 || p.index === 0
  }

  useEffect(() => {
    if (canLoad() && !hasLoaded) {
      setHasLoaded(true)
    }
  }, [page.index])

  return (
    <VSnapItem {...p} id={p.id} onAppear={onAppear} 
    className={p.className + ' w-full h-full relative flex flex-col items-center pb-nav md:pb-navBig'}>

      <iframe 
        className='pointer-events-none absolute-full w-full h-full'
        src={canLoad()? `/shader/shader.html?id=${p.shaderId}` : ''}
        ariaHidden
      />
      {p.children}

    </VSnapItem>
  )
}
