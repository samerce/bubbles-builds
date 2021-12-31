import { HSnapStack, VSnapStack, HSnapItem, VSnapItem } from './Stack'
import { PageTitle, Link, Button, Header } from './Basics'

import { useDispatch } from 'react-redux'
import { setNavLeft, setNavRight } from '../redux/navSlice'
import { scrollTo } from '../utils/scroll'

export default () => {
  const dispatch = useDispatch()

  return (
  <VSnapItem className='w-full h-full relative flex flex-col' onAppear={() => {
    dispatch(setNavLeft(null))
    dispatch(setNavRight({
      text: 'Bubbles builds websites',
      action: () => scrollTo('')
    }))
  }}>
    <iframe className='pointer-events-none absolute' width="100%" height="100%" frameBorder="0" src="https://www.shadertoy.com/embed/7lKSWW?gui=false&paused=false&muted=true" allowFullScreen></iframe>

    <PageTitle className='flex-100 z-10 mt-24 relative -rotate-3'>Portfolio</PageTitle>

  </VSnapItem>
  )
}