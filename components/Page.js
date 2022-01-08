import { VSnapItem } from './Stack'
import useNav from '../model/useNav'

export default p => {
  const {pageDidAppear} = useNav()
  
  function onAppear() {
    pageDidAppear({
      id: p.id,
      index: p.index,
      title: p.title,
      how: p.how,
      why: p.why,
    })
  }

  return (
    <VSnapItem {...p} id={p.id} onAppear={onAppear}>
      <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0" 
        src={`https://www.shadertoy.com/embed/${p.shaderId}?gui=false&t=10&paused=false&muted=true`}
        allowFullScreen 
      />

      {p.children}
    </VSnapItem>
  )
}
