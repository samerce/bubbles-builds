import { PageTitle } from './Basics'

export default () => {
  return (
    <div className='snap-start snap-always h-full w-full relative'>
      <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0"   src="https://www.shadertoy.com/embed/XdyXD3?gui=false&t=10&paused=false&muted=true" allowFullScreen>
      </iframe>

      <div className='flex-center h-full snap-start snap-always relative pb-nav'>
        <PageTitle className='rotate-6 leading-none'>Bubbles<br/>Builds</PageTitle> 
      </div>
    </div>
  )
}
