import { Button, Link, Icon } from "./Basics"
import { useSelector, useDispatch } from 'react-redux'
import { setActiveMenu, NavMenu } from '../redux/navSlice'

export default (p) => {
  const dispatch = useDispatch()
  const nav = useSelector(state => state.nav)

  return (
  <div {...p} className={'fixed flex bottom-0 left-0 px-4 h-nav justify-between items-center w-full z-20 ' + p.className}>
    <div className='flex-1'>
      <Button className='h-54 pl-2 pr-6 transition origin-left' style={{
          transform: nav.left.action? 'none' : 'scale(0)',
          opacity: nav.left.action? 1 : 0
        }}
       onClick={nav.left.action}>
        <NavIcon name='view-back' />
        {nav.left.text || ''}
      </Button>
    </div>

    <div className='flex-1 flex justify-center'>
      <Button className='h-54 px-3 flex items-center justify-center' onClick={() => {
        dispatch(setActiveMenu(NavMenu.Email))
      }}>
        <NavIcon name='email' />
      </Button>

      <Button className='px-6 h-54 flex items-center justify-center' onClick={() => {
        dispatch(setActiveMenu(NavMenu.SiteMap))
      }}>
        <NavIcon name='sam' />
      </Button>

      <Button className='px-3 h-54 flex items-center justify-center' onClick={() => {
        dispatch(setActiveMenu(NavMenu.Music))
      }}>
        <NavIcon name='youtube' />
      </Button>
    </div>

    <div className='flex-1 flex justify-end'>
      <Button className='h-54 pr-2 pl-6 transition origin-right' style={{
        transform: nav.right.action? 'none' : 'scale(0)',
        opacity: nav.right.action? 1 : 0
      }}
      onClick={nav.right.action}>
        {nav.right.text || ''}
        <NavIcon name='view-forward' />
      </Button>
    </div>
  </div>
)}

var NavIcon = (p) => (
  <Icon size='42' {...p} 
  className={'inline text-accent bg-opacity-100 drop-shadow-tpWhite mt-[-2px] ' + p.className} />
)