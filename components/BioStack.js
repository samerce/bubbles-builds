import { HSnapStack, HSnapItem } from './Stack'
import { PageTitle, Header } from './Basics'

import { useDispatch } from 'react-redux'
import { setNavLeft, setNavRight } from '../redux/navSlice'
import { scrollTo } from '../utils/scroll'

export default () => {
  const dispatch = useDispatch()
  return (
  <HSnapStack className='h-full snap-start snap-always relative' id='bio-hstack'>
    <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0" src="https://www.shadertoy.com/embed/XdyXD3?gui=false&t=10&paused=false&muted=true" allowFullScreen></iframe>

    <HSnapItem id='home' className='flex-100 flex-col flex-wrap h-full justify-center items-center z-10 relative leading-none' onAppear={() => {
      dispatch(setNavLeft(null))
      dispatch(setNavRight({
        text: "Bio", 
        action: () => scrollTo('bubbles-bio')
      }))
    }}>
      <PageTitle className='rotate-6'>Bubbles<br/>Builds</PageTitle>
    </HSnapItem>
    
    <HSnapItem id='bubbles-bio' className='flex-100 h-full flex-col justify-center bg-pink-500 relative text-white' onAppear={() => {
      dispatch(setNavLeft({
        text: 'Home',
        action: () => scrollTo('home')
      }))
      dispatch(setNavRight({
        text: "Goals", 
        action: () => scrollTo('bubbles-goals')
      }))
    }}>
      <Header>Who is Bubbles?</Header>

      <p className='grow mx-auto flex items-center'>Bubbles is a meeting of art, philosophy, and technology.</p>
    </HSnapItem>

    <HSnapItem id='bubbles-goals' className='flex-100 h-full flex-col justify-center bg-purple-500 relative text-white' onAppear={() => {
        dispatch(setNavLeft({
          text: "Bio", 
          action: () => scrollTo('bubbles-bio')
        }))
        dispatch(setNavRight(null))
    }}>
      <Header>Goals & Philosophy</Header>

      <p className='grow mx-auto flex items-center'>aRt. Love. Community. Growth. Diversity.</p>
    </HSnapItem>
  </HSnapStack>  
  )
}
