import { HSnapStack, VSnapStack, HSnapItem, VSnapItem } from './Stack'
import { PageTitle, Link, Button, Header } from './Basics'

import { useDispatch } from 'react-redux'
import { setNavLeft, setNavRight } from '../redux/navSlice'

export default () => {
  const dispatch = useDispatch()
  function onAppearPortfolio() {
    dispatch(setNavLeft(null))
    dispatch(setNavRight({
      text: 'Websites',
      target: 'portfolio-web'
    }))
  }
  function onAppearWebPortfolio() {
    dispatch(setNavLeft({
      text: 'Portfolio',
      target: 'portfolio-home'
    }))
    dispatch(setNavRight({
      text: 'Apps',
      target: 'portfolio-apps'
    }))
  }

  return (
    <HSnapStack className='flex-100 h-full relative snap-start snap-always'>
      <HSnapItemPortfolio onAppear={onAppearPortfolio} id='portfolio-home'>
        <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0" src="https://www.shadertoy.com/embed/7lKSWW?gui=false&paused=false&muted=true" allowFullScreen>
        </iframe>
        <PageTitle className='z-10 relative -rotate-3'>Portfolio</PageTitle>  
      </HSnapItemPortfolio>

      <HSnapItemPortfolio onAppear={onAppearWebPortfolio} id='portfolio-web' className='pb-nav'>
        <Header>Elemental Healing with Abby</Header>
        <iframe className='mx-auto' width='80%' height='100%' frameBorder='0' src='https://dragqueeninthewhitehouse.com'></iframe>
      </HSnapItemPortfolio>

      <HSnapItemPortfolio onAppear={onAppearWebPortfolio} id='portfolio-web'>
        <Header>Heather Sloan Acupuncture</Header>
        <iframe className='mx-auto' width='80%' height='80%' frameBorder='0' src='https://www.heather-sloan.com'></iframe>
      </HSnapItemPortfolio>
    </HSnapStack>
  )
}

var HSnapItemPortfolio = (p) => (
  <HSnapItem {...p} 
  className={'flex-100 h-full flex-col justify-center relative ' + p.className} />
)