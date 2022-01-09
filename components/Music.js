import React from "react"
import { PopupRoot, Subheader } from "./Basics"

export default p => (
  <PopupRoot>
    <Subheader className='border-b border-b-tpWhite bg-accent rounded-t-2xl'>
      The Sound of Bubbles
    </Subheader>

    <div className='w-full h-432 flex-[432px]'>
      <iframe width="100%" height="432" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1376593063&color=%23ea8e22&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
  </PopupRoot>
)

