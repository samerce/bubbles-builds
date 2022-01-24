import React, { useEffect, useState } from "react"
import { PopupRoot, Subheader } from "./Basics"
import usePopup, { Popups } from "../model/usePopup"

export default function Music(p) { 
  const {popupId} = usePopup()
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false)

  useEffect(() => {
    if (!hasOpenedOnce) {
      setHasOpenedOnce(popupId === Popups.Music)
    } 
  }, [popupId])
  
  return pug`
    PopupRoot(...p className='w-[383px] ' + p.className)
      Subheader.border-b.border-tpWhite.bg-accent.rounded-t-2xl
        | The Sound of Bubbles

      div(class='w-full flex-[432px] pointer-events-auto')
        iframe.rounded-b-2xl(
          width="100%" height="100%" scrolling="yes" frameBorder="no" 
          title='soundcloud widget'
          src=${hasOpenedOnce? SoundCloudUrl : ''}
        )
  `
}

var SoundCloudUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1376593063&color=%23ea8e22&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"