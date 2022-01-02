import { HSnapStack, VSnapStack, HSnapItem, VSnapItem } from './Stack'
import { PageTitle, Link, Button, Header } from './Basics'

import { useDispatch } from 'react-redux'
import { setNavLeft, setNavRight } from '../redux/navSlice'
import { scrollTo } from '../utils/scroll'

export default () => {
  const dispatch = useDispatch()
  const onAppearPortfolio = () => {
    dispatch(setNavLeft(null))
    dispatch(setNavRight({
      text: 'Websites',
      action: () => scrollTo('')
    }))
  }

  return (
    <HSnapStack className='flex-100 h-full relative snap-start snap-always' onAppear={onAppearPortfolio}>
      <HSnapItemPortfolio>
        <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0" src="https://www.shadertoy.com/embed/7lKSWW?gui=false&paused=false&muted=true" allowFullScreen>
        </iframe>
        <PageTitle className='z-10 relative -rotate-3'>Portfolio</PageTitle>  
      </HSnapItemPortfolio>
    </HSnapStack>
  )
}

var HSnapItemPortfolio = (p) => (
  <HSnapItem {...p} 
  className={'flex-100 h-full flex-col justify-center relative ' + p.className} />
)