import { Button, Icon } from "./Basics"
import How from "./How"
import Why from "./Why"
import { useSpring, config } from 'react-spring'
import { scrollTo } from "../utils/scroll"

import useNav, { NavMenu } from '../model/useNav'
import usePopup from '../model/usePopup'

export default (p) => {
  const {nav, setActiveMenu} = useNav()
  const {Content, showAsPopup, hidePopup} = usePopup()
  const isHowVisible = Content === How
  const isWhyVisible = Content === Why
  
  function onClickHow() {
    isHowVisible? hidePopup() : showAsPopup(How)
  }
  function onClickWhy() {
    isWhyVisible? hidePopup() : showAsPopup(Why)
  }

  return (
  <div className='fixed flex bottom-0 left-0 px-7 px- h-nav justify-between items-center w-full z-20'>
    <div className='flex-1 flex justify-end mx-2'>
      <Button onClick={onClickHow} className='h-54 pl-2 pr-6 origin-right text-2xl'>
        <NavIcon name={isHowVisible? 'view-close' : 'bolt-circle'} className='mx-1' />
        How
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
      <Button onClick={onClickWhy} className='h-54 pl-2 pr-6 origin-left text-2xl'>
        <NavIcon name={'compass'} className='mx-1' />
        Why
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