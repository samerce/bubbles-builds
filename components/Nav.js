import { Button, Link, Icon } from "./Basics"
import { useSelector, useDispatch } from 'react-redux'
import { setActiveMenu, NavMenu } from '../redux/navSlice'

export default (p) => {
  const dispatch = useDispatch()
  const nav = useSelector(state => state.nav)

  return (
  <div {...p} className={'fixed flex bottom-0 left-0 px-4 py-4 justify-between items-center w-full z-20 ' + p.className}>
    <div className='flex-1'>
      <Button className='h-54 pl-2 pr-6 transition' style={{
          transform: nav.left.action? 'none' : 'scale(0)'
        }}
       onClick={nav.left.action}>
        <Icon name='view-back' size='42' className='inline text-accent bg-opacity-100 drop-shadow-faded-white mt-[-2px]' />
        {nav.left.text || ''}
      </Button>
    </div>

    <div className='flex-1 flex justify-center'>
      <Button className='h-54 px-3 flex items-center justify-center' onClick={() => {
        dispatch(setActiveMenu(NavMenu.Email))
      }}>
        <Icon name='email' size='36' className='drop-shadow-faded-white' />
      </Button>

      <Button className='px-6 h-54 flex items-center justify-center' onClick={() => {
        dispatch(setActiveMenu(NavMenu.SiteMap))
      }}>
        <Icon name='sam' size='36' className='drop-shadow-faded-white' />
      </Button>

      <Button className='px-3 h-54 flex items-center justify-center' onClick={() => {
        dispatch(setActiveMenu(NavMenu.Music))
      }}>
        <Icon name='announcement' size='36' className='drop-shadow-faded-white' />
      </Button>
    </div>

    <div className='flex-1 flex justify-end'>
      <Button className='h-54 pr-2 pl-6 transition' style={{
        transform: nav.right.action? 'none' : 'scale(0)'
      }}
      onClick={nav.right.action}>
        {nav.right.text || ''}
        <Icon name='view-forward' size='42' className='inline text-accent drop-shadow-faded-white mt-[-2px]' />
      </Button>
    </div>
  </div>
)}

var Directions = {
  left: -1,
  right: 1,
}
var scrollStack = (direction) => {
  document.getElementById('bio-hstack').scroll({
    left: Directions[direction] * window.innerWidth, 
    behavior: 'smooth'
  })
}