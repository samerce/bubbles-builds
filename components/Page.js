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

  function visibility() {
    if (p.index < page.index - 1 || p.index > page.index + 1)
      return 'hidden'
    else 
      return 'visible'
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
    className={p.className + ' w-full h-full relative flex flex-col items-center pb-nav md:pb-navBig content-auto'}>

      <iframe 
        className='pointer-events-none absolute-full w-full h-full'
        style={{visibility: visibility()}}
        src={canLoad? `/shader/shader.html?id=${p.shaderId}` : ''}
        title='animated background'
        aria-hidden
      />
      {p.children}

    </VSnapItem>
  )
}
