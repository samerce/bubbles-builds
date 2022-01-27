import { VSnapItem } from './Stack'
import useNav from '../model/useNav'
import usePopup from '../model/usePopup'
import { useEffect, useRef, useState } from 'react'

export default function Page(p) {
  const shaderFrame = useRef()
  const playShaderTimer = useRef()
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

  function pauseShader() {
    shaderFrame.current.contentWindow.postMessage('pause', '*')
  }
  function playShader() {
    shaderFrame.current.contentWindow.postMessage('play', '*')
  }

  useEffect(() => {
    if (!canLoad) { // only set to true, never back to false
      setCanLoad(p.index === page.index || p.index === page.index + 1)
    }

    if (p.index === page.index) playShader()
    else pauseShader()
  }, [page.index])

  useEffect(() => {
    // get a good time-to-first-byte, then load rest of frames
    setTimeout(() => setCanLoad(true), 1000)
  }, [])

  useEffect(() => {
    if (p.scrolling) {
      clearTimeout(playShaderTimer.current)
      playShaderTimer.current = null
      pauseShader()
    } else {
      playShaderTimer.current = setTimeout(playShader, 100)
    }
  }, [p.scrolling])

  return (
    <VSnapItem {...p} id={p.id} onAppear={onAppear}
    className={p.className + ' w-full h-full relative flex flex-col items-center pb-nav md:pb-navBig content-auto'}>

      <iframe 
        className='pointer-events-none absolute-full w-full h-full content-auto'
        src={canLoad? `/shader/shader.html?id=${p.shaderId}` : ''}
        title='animated background'
        ref={shaderFrame}
        aria-hidden
      />
      {p.children}

    </VSnapItem>
  )
}
