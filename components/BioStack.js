import { HSnapStack, HSnapItem } from './Stack'
import { PageTitle, Header } from './Basics'

import { useDispatch } from 'react-redux'
import { setNavLeft, setNavRight } from '../redux/navSlice'
import { scrollTo } from '../utils/scroll'

export default () => {
  const dispatch = useDispatch()
  function onAppearHome() {
    dispatch(setNavLeft(null))
    dispatch(setNavRight({
      text: "Bio", 
      action: () => scrollTo('bubbles-bio')
    }))
  }
  function onAppearBio() {
    dispatch(setNavLeft({
      text: 'Home',
      action: () => scrollTo('home')
    }))
    dispatch(setNavRight({
      text: "Goals", 
      action: () => scrollTo('bubbles-goals')
    }))
  }
  function onAppearGoals() {
    dispatch(setNavLeft({
      text: "Bio", 
      action: () => scrollTo('bubbles-bio')
    }))
    dispatch(setNavRight(null))
  }

  return (
    <HSnapStack className='h-full snap-start snap-always relative'>
      <HSnapItemBio id='home' onAppear={onAppearHome}>
        <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0" src="https://www.shadertoy.com/embed/XdyXD3?gui=false&t=10&paused=false&muted=true" allowFullScreen>
        </iframe>
        <PageTitle className='rotate-6'>Bubbles<br/>Builds</PageTitle>
      </HSnapItemBio>
      
      <HSnapItemBio id='bubbles-bio' className='pb-nav bg-pink-500' onAppear={onAppearBio}>
        <HeaderBio>Who is Bubbles?</HeaderBio>

        <div className='grow mx-auto flex items-center'>
          <BodyBio>
            Bubbles is a meeting of art, philosophy, and technology.
          </BodyBio>
        </div>
      </HSnapItemBio>

      <HSnapItemBio id='bubbles-goals' className='pb-nav bg-purple-600' onAppear={onAppearGoals}>
        <HeaderBio>Goals & Philosophy</HeaderBio>

        <div className='grow mx-auto flex items-center'>
          <BodyBio>
            aRt. Love. Community. Growth. Diversity.
          </BodyBio>
        </div>
        
      </HSnapItemBio>
    </HSnapStack>  
  )
}

var HSnapItemBio = (p) => (
  <HSnapItem {...p} 
  className={'flex-100 h-full flex-col justify-center relative ' + p.className} />
)

var HeaderBio = (p) => (
  <Header {...p} className={'text-white mb-0 ' + p.className} />
)

var BodyBio = (p) => (
  <p {...p} className={'glass-thick p-5 text-accentDark rounded-lg ' + p.className}></p>
)