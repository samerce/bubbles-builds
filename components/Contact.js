import React, { useLayoutEffect, useRef, useState } from "react"
import { PopupRoot, Subheader, SectionTitle, Icon, Button, Link } from "./Basics"
import useNav from "../model/useNav"
import { animated, useSpring, config, useSpringRef, useChain } from "react-spring"
import { makeEnum } from "../utils/lang"

const Anim = animated.div
const Mode = makeEnum('waiting', 'sending', 'sent', 'error')
const InputClasses = "border-sexy glass rounded-3xl w-full bg-accentDark h-[42px] px-[18px] font-button text-lg leading-[42px] "

export default function Contact(p) {
  const [mode, setMode] = useState(Mode.waiting)
  const [from, setFrom] = useState("")
  const [message, setMessage] = useState("")

  function sendMessage() {
    setMode(Mode.sending)
    
    fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        text: `from: ${from}\n${message}`,
        channel: '@bubbles',
      })
    }).then(() => {
      setTimeout(() => setMode(Mode.sent), 4000)
    })
  }

  useLayoutEffect(() => {
    setMode(Mode.waiting)
  }, [from, message])
  
  return pug`
  PopupRoot
    Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
      | Let's Talk

    div.grow.flex.flex-col.overflow-y-scroll.relative.p-4(class='w-[432px]')
      Link.flex-center.text-xl.mx-auto.mt-2(
        href='mailto:bubbles@expressyouryes.com' class='h-54 px-6 pt-[1px]'
      )
        | Use your mail app

      div.mt-6.mb-5.flex-center
        hr.border-tpWhite.w-full
        span.absolute.text-md.flex-center.text-accentLite.font-button(class='w-[27px] h-[27px]')
          | OR

      div.text-xl.font-button.flex-center.text-accentLite.mb-3 Text Me

      input(
        type='email' placeholder='email / phone number / astral signature' 
        value=from onChange=e => setFrom(e.target.value)
        className=InputClasses
      )

      div.h-4

      div.flex.items-center.relative
        textarea(
          id='contact-message' placeholder='what can we build together?' 
          value=message onChange=e => setMessage(e.target.value)
          className=InputClasses + ' pr-[42px] leading-[1.5] pt-[6px] h-[108px] relative'
        )
        SendButton(onClick=sendMessage mode=mode)
`}

var SendButton = p => {
  const sending = useSpring({
    loop: {reverse: true},
    from: { scale: 0 },
    to: { scale: 1.2 },
    config: {
      ...config.wobbly,
    }
  })

  return pug`
    Button.rounded-full.flex-center.absolute.z-10(
      class='w-[32px] h-[32px] right-[5px] bottom-[5px] -mt-[1px]'
      onClick=p.onClick
    )
      Icon.text-accent(
        name=${p.mode === Mode.sent? 'checkmark' : 'enter'} 
        size='24' style={transform: p.mode === Mode.sent? 'none' : 'rotate(-90deg)'}
      )
    
    Anim.absolute.h-full.w-full.rounded-full.bg-accent.z-0(
      class='w-[36px] h-[36px] right-[3px] bottom-[3px]'
      style=${
        p.mode === Mode.sending? 
          sending : p.mode === Mode.sent? 
            {transform: 'none'} : {transform: 'scale(0)'}
      }
    )
  `
}
