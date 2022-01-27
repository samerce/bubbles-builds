import { VSnapItem } from './Stack'
import useNav from '../model/useNav'
import usePopup from '../model/usePopup'
import { useEffect, useRef, useState } from 'react'
import { useLayoutEffect } from '@react-spring/shared'

export default function Page(p) {
  const [shaderFrameRef, setShaderFrame] = useRef()
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
    if (!canLoad) { // only set to true, never back to false
      setCanLoad(p.index === page.index || p.index === page.index + 1)
    }

    if (p.index === page.index) {
      shaderFrameRef?.current.contentWindow.postMessage('play', '*')
    } else {
      shaderFrameRef?.current.contentWindow.postMessage('pause', '*')
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
        className='pointer-events-none absolute-full w-full h-full content-auto'
        src={canLoad? `/shader/shader.html?id=${p.shaderId}` : ''}
        title='animated background'
        ref={shaderFrameRef}
        aria-hidden
      />
      {p.children}

    </VSnapItem>
  )
}
