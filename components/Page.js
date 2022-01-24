import { VSnapItem } from './Stack'
import useNav from '../model/useNav'
import usePopup from '../model/usePopup'
import { useEffect, useState } from 'react'

export default function Page(p) {
  const [canLoad, setCanLoad] = useState(false)
  const {page, pageDidAppear} = useNav()
  
  function onAppear() {
    pageDidAppear({
      id: p.id,
      index: p.index,
      title: p.title,
      how: p.how,
      why: p.why,
    })
  }

  useEffect(() => {
    if (!canLoad) {
      setCanLoad(p.index === page.index || p.index === page.index + 1)
    }
  }, [page.index])

  useEffect(() => {
    // get a good time-to-first-byte, then load rest of frames
    setTimeout(() => setCanLoad(true), 1000)
  }, [])

  return (
    <VSnapItem {...p} id={p.id} onAppear={onAppear} 
    className={p.className + ' w-full h-full relative flex flex-col items-center pb-nav md:pb-navBig'}>

      <iframe 
        className='pointer-events-none absolute-full w-full h-full'
        src={canLoad? `/shader/shader.html?id=${p.shaderId}` : ''}
        ariaHidden
      />
      {p.children}

    </VSnapItem>
  )
}
