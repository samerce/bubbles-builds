import { HSnapStack, HSnapItem } from './Stack'
import { PageTitle, Header } from './Basics'

import { useDispatch } from 'react-redux'
import { setNavLeft, setNavRight } from '../redux/navSlice'

export default () => {
  const dispatch = useDispatch()
  function onAppearHome() {
    dispatch(setNavLeft(null))
    dispatch(setNavRight({
      text: 'Bio', 
      target: 'bubbles-bio'
    }))
  }
  function onAppearBio() {
    dispatch(setNavLeft({
      text: 'Home',
      target: 'home'
    }))
    dispatch(setNavRight({
      text: 'Goals', 
      target: 'bubbles-goals'
    }))
  }
  function onAppearGoals() {
    dispatch(setNavLeft({
      text: 'Bio',
      target: 'bubbles-bio'
    }))
    dispatch(setNavRight(null))
  }

  return (
    <div className='snap-start snap-always h-full w-full relative'>
      <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0"   src="https://www.shadertoy.com/embed/XdyXD3?gui=false&t=10&paused=false&muted=true" allowFullScreen>
      </iframe>

      <HSnapStack className='h-full snap-start snap-always relative'>
        <HSnapItemBio id='home' onAppear={onAppearHome}>
          <PageTitle className='rotate-6 leading-none'>Bubbles<br/>Builds</PageTitle>
        </HSnapItemBio>
        
        <HSnapItemBio id='bubbles-bio' className='pb-nav' onAppear={onAppearBio}>
          <HeaderBio>Who is Bubbles?</HeaderBio>

          <div className='grow mx-auto flex items-center'>
            <BodyBio>
              Bubbles (they/them) is a former software engineer for corporate giants. After leaving the inhumane conditions of corporate life, they traveled the world and began developing new skills. Now, Bubbles produces music, writes, and is developing their skills in graphic design.
            </BodyBio>
          </div>
        </HSnapItemBio>

        <HSnapItemBio id='bubbles-goals' className='pb-nav' onAppear={onAppearGoals}>
          <HeaderBio>Goals & Philosophy</HeaderBio>

          <div className='grow mx-auto flex items-center'>
            <BodyBio>
              aRt. Love. Community. Growth. Diversity.
            </BodyBio>
          </div>
          
        </HSnapItemBio>
      </HSnapStack>  
    </div>
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
  <p {...p} className={'glass-dark p-5 text-accentLite text-shadow-tpBlack rounded-2xl shadow-asBorder border-width-1 border-tpWhite ' + p.className}></p>
)