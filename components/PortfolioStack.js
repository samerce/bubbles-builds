import Icon from 'supercons'
import { HSnapStack, VSnapStack, HSnapItem, VSnapItem } from './Stack'
import { PageTitle, Link, Button, Header } from './Basics'
import ScrollButton from './ScrollButton'

export default () => {
  return (
  <VSnapItem className="w-full h-full relative flex flex-col">
    <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0" src="https://www.shadertoy.com/embed/7lKSWW?gui=false&paused=false&muted=true" allowFullScreen></iframe>

    <PageTitle className='flex-100 z-10 mt-24 relative -rotate-3'>Portfolio</PageTitle>

    <Button className='absolute bottom-10 left-10 px-3 h-54 pr-6' onClick={() => {
      document.getElementById('root-stack').scrollTo({top: 0, behavior: 'smooth'})
    }}>
      <Icon glyph='up-caret' size='42' className='inline text-black' style={{marginTop: -2}} />
      Top
    </Button>
  </VSnapItem>
  )
}