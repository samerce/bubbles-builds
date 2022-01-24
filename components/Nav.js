import { Button, Icon } from "./Basics"
import How from "./How"
import Why from "./Why"
import { useSpring, config } from 'react-spring'
import { scrollTo } from "../utils/scroll"
import { FaHeadphonesAlt } from 'react-icons/fa';

import useNav from '../model/useNav'
import usePopup, { Popups } from '../model/usePopup'

const BtnClasses = ' h-54 mx-1 md:mx-2 glass pointer-events-auto text-xl md:text-2xl transition '
const CenterClasses = ' flex-center grow-0 shrink-0 basis-[54px] rounded-full '
const SideBtnClasses = ' md:pl-2 md:pr-5 pl-2 pr-4 w-[96px] md:w-[108px] flex items-center justify-between '

export default function Nav(p) {
  const {page} = useNav()
  const {popupId, showPopup, hidePopup} = usePopup()

  function onClickBackdrop() {
    hidePopup()
  }

  return pug`
    nav.sticky.flex-center.bottom-0.left-0.px-2.h-nav.w-full.z-20.pointer-events-none(
      class='md:h-navBig origin-bottom scale-[.8] 2xs:scale-[.94] xs:scale-100'
      style=${{position: popupId? 'fixed' : 'sticky'}}
    )

      NavButton.origin-right(
        icon='bolt-circle' iconProps={className: 'mx-1'} popupId=Popups.How
        className=SideBtnClasses + (!page.how && 'scale-0 opacity-20 pointer-events-none')
        aria-label='read about how this portofolio item was made'
      ) How

      NavButton(
        icon='email-fill' popupId=Popups.Contact
        className=CenterClasses + 'md:basis-[54px]'
        aria-label='contact bubbles'
      )
      NavButton(
        icon='sam' popupId=Popups.SiteMenu iconProps={className: 'md:h-[48px] md:w-[48px]'}
        className=CenterClasses + 'md:basis-[69px] pb-[4px]'
        style={height: '69px'}
        aria-label='site menu'
      )
      NavButton(
        icon='music' popupId=Popups.Music 
        className=CenterClasses + 'md:basis-[54px]'
        aria-label='open the music player'
      )

      NavButton.origin-left(
        icon='compass' iconProps={className: 'mx-1'} popupId=Popups.Why
        className=SideBtnClasses + (!page.why && 'scale-0 opacity-20 pointer-events-none')
        aria-label='read about the inpsiration behind this portofolio item'
      ) Why
  `
}

var NavIcon = (p) => {
  const classes = 'inline drop-shadow-tpWhite w-[36px] h-[36px] md:w-[42px] md:h-[42px] ' + p.className
  if (p.name === 'music') return <FaHeadphonesAlt className={'w-[26px] h-[26px] md:w-[30px] md:h-[30px] -mt-1 ' + classes} />
  
  return pug`
    Icon(...p className=classes)
  `
}

var NavButton = p => {
  const {popupId: activePopupId, showPopup, hidePopup} = usePopup()
  const isPopupVisible = activePopupId === p.popupId
  const iconName = isPopupVisible? 'view-close' : p.icon
  const classes = p.className + BtnClasses + (isPopupVisible && 'bg-accentWhite')

  function onClick() {
    if (activePopupId === p.popupId) hidePopup()
    else showPopup(p.popupId)
  }

  return (
    <Button {...p} className={classes} onClick={onClick}>
      <NavIcon name={iconName} aria-hidden {...p.iconProps} />
      <span className='mt-[3px]'>{p.children}</span>
    </Button>
  )
}
