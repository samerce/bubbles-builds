import { Button, Icon } from "./Basics"
import How from "./How"
import Why from "./Why"
import { useSpring, config } from 'react-spring'
import { scrollTo } from "../utils/scroll"
import { FaHeadphonesAlt } from 'react-icons/fa';

import useNav, { NavMenu } from '../model/useNav'
import usePopup, { Popups } from '../model/usePopup'

const BtnClasses = ' h-54 mx-1 md:mx-2 glass pointer-events-auto text-xl md:text-2xl transition '
const CenterClasses = ' flex-center grow-0 shrink-0 basis-[54px] rounded-full '
const SideBtnClasses = ' md:pl-2 md:pr-5 pl-2 pr-4 w-[96px] md:w-[108px] flex items-center justify-between '

export default function Nav(p) {
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

  return pug`
    div.sticky.flex-center.bottom-0.left-0.px-2.h-nav.w-full.z-20.pointer-events-none(
      class='md:h-navBig origin-bottom scale-[.8] 2xs:scale-[.94] xs:scale-100'
    )

      NavButton(
        icon='bolt-circle' iconClass='mx-1' popupId=Popups.How
        className=SideBtnClasses
      ) How

      NavButton(
        icon='email-fill' popupId=Popups.Contact
        className=CenterClasses + 'md:basis-[69px]'
      )
      NavButton(
        icon='sam' popupId=Popups.SiteMenu 
        className=CenterClasses + 'md:basis-[81px]'
      )
      NavButton(
        icon='music' popupId=Popups.Music 
        className=CenterClasses + 'md:basis-[69px]'
      )

      NavButton(
        icon='compass' iconClass='mx-1' popupId=Popups.Why
        className=SideBtnClasses
      ) Why
  `
}

var NavIcon = (p) => {
  const classes = 'inline text-accent drop-shadow-tpWhite w-[36px] h-[36px] md:w-[42px] md:h-[42px]' + p.className
  if (p.name === 'music') return <FaHeadphonesAlt className={'w-[26px] h-[26px] md:w-[30px] md:h-[30px] -mt-1 ' + classes} />
  
  return pug`
    Icon(...p className=classes)
  `
}

var NavButton = p => {
  const {popupId: activePopupId, showPopup, hidePopup} = usePopup()
  const isPopupVisible = activePopupId === p.popupId
  const iconName = isPopupVisible? 'view-close' : p.icon
  const classes = BtnClasses + p.className
  const style = {
    filter: isPopupVisible? 'invert()' : 'none',
  }

  function onClick() {
    if (activePopupId === p.popupId) hidePopup()
    else showPopup(p.popupId)
  }

  return (
    <Button {...p} className={classes} style={style} onClick={onClick}>

      <NavIcon name={iconName} className={p.iconClass} />
      <span className='mt-[3px]'>{p.children}</span>

    </Button>
  )
}
