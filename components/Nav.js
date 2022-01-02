import { Button, Link, Icon } from "./Basics"
import { useSelector, useDispatch } from 'react-redux'
import { setActiveMenu, NavMenu } from '../redux/navSlice'
import { useSpring, animated, config } from 'react-spring'
import { scrollTo } from "../utils/scroll"

export default (p) => {
  const dispatch = useDispatch()
  const nav = useSelector(state => state.nav)

  return (
  <div className='fixed flex bottom-0 left-0 px-7 px- h-nav justify-between items-center w-full z-20'>
    <div className='flex-1'>
      <Button onClick={() => scrollTo(nav.left.target)} className='h-54 pl-2 pr-6 origin-left' 
      style={styleFor(nav.left)}>
        <NavIcon name='view-back' />
        {nav.left.text || ''}
      </Button>
    </div>

    <div className='flex-1 flex-center'>
      <Button className='mx-2 h-54 px-3 flex-center' onClick={() => {
        dispatch(setActiveMenu(NavMenu.Email))
      }}>
        <NavIcon name='email' />
      </Button>

      <Button className='mx-2 px-6 h-54 flex-center' onClick={() => {
        dispatch(setActiveMenu(NavMenu.SiteMap))
      }}>
        <NavIcon name='sam' />
      </Button>

      <Button className='mx-2 px-3 h-54 flex-center' onClick={() => {
        dispatch(setActiveMenu(NavMenu.Music))
      }}>
        <NavIcon name='youtube' />
      </Button>
    </div>

    <div className='flex-1 flex justify-end'>
      <Button onClick={() => scrollTo(nav.right.target)} className='h-54 pr-2 pl-6 origin-right' 
      style={styleFor(nav.right)}>
        {nav.right.text || ''}
        <NavIcon name='view-forward' />
      </Button>
    </div>
  </div>
)}

var NavIcon = (p) => (
  <Icon size='42' {...p} 
  className={'inline text-accent drop-shadow-tpWhite mt-[-2px] ' + p.className} />
)

function styleFor(navBtn) {
  const anim = useSpring({
    to: {
      scale: navBtn.target? 1 : 0,
      opacity: navBtn.target? 1 : 0
    },
    config: {
      ...config.wobbly,
      mass: .54,
    }
  })
  return anim
}