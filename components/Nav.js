import { Button, Icon } from "./Basics"
import How from "./How"
import Why from "./Why"
import { useSpring, config } from 'react-spring'
import { scrollTo } from "../utils/scroll"
import { FaHeadphonesAlt } from 'react-icons/fa';

import useNav, { NavMenu } from '../model/useNav'
import usePopup, { Popups } from '../model/usePopup'

const NavClasses = ' mx-2 h-54 flex-center '
const SideClasses = ' h-54 pl-2 pr-6 text-2xl mx-2 '

export default (p) => {
  const {nav, setActiveMenu} = useNav()
  const {popupId, showPopup, hidePopup} = usePopup()

  function isVisible(id) {
    return popupId === id
  }

  function onClickPopupButton(id) {
    if (id === Popups[id]) hidePopup()
    else showPopup(id)
  }
  
  function onClickBackdrop() {
    setActiveMenu(null)
    hidePopup()
  }

  return (
  <div className='fixed flex-center bottom-0 left-0 px-7 h-nav w-full z-20'>

    <div className='absolute-full' onClick={onClickBackdrop} />

    <NavButton className={SideClasses} 
      icon='bolt-circle' iconClass='mx-1' popupId={Popups.How}>
      How
    </NavButton>

    <div className='flex-center'>
      <NavButton className={NavClasses + 'w-[69px]'} icon='email' popupId={Popups.Contact} />
      <NavButton className={NavClasses + 'w-[81px]'} icon='sam' popupId={Popups.SiteMenu} />
      <NavButton className={NavClasses + 'w-[69px]'} icon='music' popupId={Popups.Music} />
    </div>

    <NavButton className={SideClasses} icon='compass' iconClass='mx-1' popupId={Popups.Why}>
      Why
    </NavButton>

  </div>
)}

var NavIcon = (p) => {
  const classes = 'inline text-accent drop-shadow-tpWhite ' + p.className
  if (p.name === 'music') return <FaHeadphonesAlt className={'w-[30px] h-[30px] -mt-1 ' + classes} />
  return pug`
    Icon(size='42' ...p className=classes)
  `
}

var NavButton = (p) => {
  const {popupId: activePopupId, showPopup, hidePopup} = usePopup()
  const isPopupVisible = activePopupId === p.popupId
  const style = {filter: isPopupVisible? 'invert()' : 'none'}
  const iconName = isPopupVisible? 'view-close' : p.icon

  function onClick() {
    if (activePopupId === p.popupId) hidePopup()
    else showPopup(p.popupId)
  }

  return (
    <Button {...p} className={p.className} onClick={onClick} style={style}>
      <NavIcon name={iconName} className={p.iconClass} />
      {p.children}
    </Button>
  )
}

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