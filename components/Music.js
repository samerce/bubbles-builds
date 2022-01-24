import React, { useEffect, useState } from "react"
import { PopupRoot, Subheader } from "./Basics"

export default function Music(p) { 
  const [canLoad, setCanLoad] = useState(false)

  useEffect(() => setTimeout(() => setCanLoad(true), 1000), [])
  
  return pug`
    PopupRoot(...p)
      Subheader.border-b.border-tpWhite.bg-accent.rounded-t-2xl
        | The Sound of Bubbles

      div(class='w-full flex-[432px]')
        iframe.rounded-b-2xl(
          width="100%" height="432px" scrolling="no" frameBorder="no" 
          src=${canLoad? SoundCloudUrl : ''}
        )
  `
}

var SoundCloudUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1376593063&color=%23ea8e22&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"