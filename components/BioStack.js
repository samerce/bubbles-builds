import Icon from 'supercons'
import { HSnapStack, VSnapStack, HSnapItem, VSnapItem } from './Stack'
import { PageTitle, Link, Button, Header } from './Basics'
import ScrollButton from './ScrollButton'

export default () => {
  return (
  <HSnapStack className='h-full snap-start snap-always relative' id='bio-hstack'>
    <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0" src="https://www.shadertoy.com/embed/XdGcWK?gui=false&t=10&paused=false&muted=true" allowFullScreen></iframe>
    
    <HSnapItem className='flex-100 flex-col flex-wrap h-full justify-center items-center z-10 relative leading-none'>
      <PageTitle className='rotate-6'>Bubbles<br/>Builds</PageTitle>

      <Link className='mt-24' href='mailto:bubbles@expressyouryes.com'>
        <Icon glyph='email' size='81' />
      </Link>

      {/* <Button className='h-54 px-4 pl-6 text-2xl' onClick={() => {
        document.getElementById('bio-hstack').scroll({left: window.innerWidth, behavior: 'smooth'})
      }}>
        Who is Bubbles? 
        <Icon glyph='enter' size='42' className='inline text-black' style={{marginTop: -2}} />
      </Button> */}
    </HSnapItem>

    <HSnapItem className='flex-100 h-full flex-col justify-center bg-pink-500 relative text-white'>
      <Header>Who is Bubbles?</Header>

      <p className='grow mx-auto flex items-center'>Bubbles is a meeting of art, philosophy, and technology.</p>
    </HSnapItem>

    <HSnapItem className='flex-100 h-full flex-col justify-center bg-purple-500 relative text-white'>
      <Header>Goals & Philosophy</Header>

      <p className='grow mx-auto flex items-center'>aRt. Love. Community. Growth. Diversity.</p>
    </HSnapItem>
  </HSnapStack>  
  )
}
