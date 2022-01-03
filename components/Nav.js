import { Button, Icon } from "./Basics"
import useNav, { NavMenu } from '../model/useNav'
import { useSpring, config } from 'react-spring'
import { scrollTo } from "../utils/scroll"

export default (p) => {
  const {nav, setActiveMenu} = useNav()

  return (
  <div className='fixed flex bottom-0 left-0 px-7 px- h-nav justify-between items-center w-full z-20'>
    <div className='flex-1 flex justify-end mx-2'>
      <Button onClick={() => scrollTo(nav.left.target)} className='h-54 pl-2 pr-6 origin-right text-2xl' 
      style={styleFor(nav.left)}>
        <NavIcon name={nav.left.icon || 'view-back'} />
        {nav.left.text || ''}
      </Button>
    </div>

    <div className='flex-center'>
      <NavButton className='px-3' onClick={() => {
        setActiveMenu(NavMenu.Email)
      }}>
        <NavIcon name='email' />
      </NavButton>

      <NavButton className='px-6' onClick={() => {
        setActiveMenu(NavMenu.SiteMap)
      }}>
        <NavIcon name='sam' />
      </NavButton>

      <NavButton className='px-3' onClick={() => {
        setActiveMenu(NavMenu.Music)
      }}>
        <NavIcon name='youtube' />
      </NavButton>
    </div>

    <div className='flex-1 flex mx-2'>
      <Button onClick={() => scrollTo(nav.right.target)} className='h-54 pr-2 pl-6 origin-left text-2xl' 
      style={styleFor(nav.right)}>
        {nav.right.text || ''}
        <NavIcon name={nav.right.icon || 'view-forward'} />
      </Button>
    </div>
  </div>
)}

var NavIcon = (p) => (
  <Icon size='42' {...p} 
  className={'inline text-accent drop-shadow-tpWhite ' + p.className} />
)

var NavButton = (p) => (
  <Button {...p} className={'mx-2 px-6 h-54 flex-center ' + p.className} />
)

function styleFor(navBtn) {
  const anim = useSpring({
    to: {
      scale: navBtn.target? 1 : 0,
      opacity: navBtn.target? 1 : 0
    },
    config: {
      ...config.wobbly,
      mass: .36,
    }
  })
  return anim
}