import React, { useLayoutEffect, useState } from "react"
import { PopupRoot, Subheader, Icon, Button, Link } from "./Basics"
import { animated, useSpring, config } from "react-spring"
import { makeEnum } from "../utils/lang"

const Anim = animated.div
const Mode = makeEnum('waiting', 'sending', 'sent', 'error')
const InputClasses = "border-sexy rounded-3xl w-full bg-accentBlack h-[42px] px-[18px] font-button text-lg leading-[42px] "

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
    }).then(response => {
      setTimeout(() => {
        if (response.status === 200) {
          setMode(Mode.sent)
        } else {
          response.text().then(text => console.error(text))
          setMode(Mode.error)
        }
      }, 2000)
    })
  }

  useLayoutEffect(() => {
    setMode(Mode.waiting)
  }, [from, message])
  
  return pug`
  PopupRoot.glass-dark(...p className=p.className)
    Subheader.border-b.border-b-tpWhite.bg-accent.rounded-t-2xl
      | Let's Talk

    div.grow.flex.flex-col.overflow-y-scroll.relative.p-4.w-full
      Link.text-xl.mx-auto.mt-2(
        href='mailto:bubbles@expressyouryes.org' class='h-54 px-6 pt-[1px]'
        type='secondary'
      ) Use your mail app

      div.mt-6.mb-5.flex-center
        hr.border-tpWhite.w-full
        span.absolute.text-md.flex-center.text-accentWhite.font-button(class='w-[27px] h-[27px]')
          | OR

      div.text-xl.font-button.flex-center.text-accentWhite.mb-3 use this little widget

      input.text-xl(
        type='email' placeholder='email / phone number / astral signature' 
        value=from onChange=e => setFrom(e.target.value)
        className=InputClasses
        autoComplete='email'
        aria-label='email or phone number or astral signature'
      )

      div.h-4

      div.flex.items-center.relative
        textarea.text-xl(
          id='contact-message' placeholder='what can we build together?' 
          value=message onChange=e => setMessage(e.target.value)
          className=InputClasses + ' pr-[42px] leading-[1.5] pt-[6px] h-[108px] relative'
          aria-label='what can we build together?'
        )
        SendButton(onClick=sendMessage mode=mode)
`}

const SendIcons = {
  [Mode.waiting]: 'enter',
  [Mode.sending]: 'send',
  [Mode.sent]: 'checkmark',
  [Mode.error]: 'important-fill',
}
const SendIconTransform = {
  [Mode.waiting]: 'rotate(-90deg)',
  [Mode.sending]: 'rotate(-90deg)',
  [Mode.sent]: 'none',
  [Mode.error]: 'none',
}

var SendButton = p => {
  const backdropStyle = (p.mode === Mode.sending)? useSpring({
    loop: {reverse: true},
    from: { scale: .18 },
    to: { scale: 1.2 },
    config: {
      ...config.stiff,
      mass: .9,
    }
  }) : (p.mode ===  Mode.sent)? {transform: 'none'} : {transform: 'scale(0)'}

  const iconStyle = (p.mode === Mode.sending)? useSpring({
    loop: {reverse: true},
    from: { scale: 1.2 },
    to: { scale: .6 },
    config: {
      ...config.stiff,
      mass: 1,
    }
  }) : {}

  return pug`
    Button.rounded-full.absolute.z-10.overflow-hidden(
      onClick=p.onClick
      type='secondary'
      class='w-[32px] h-[32px] right-[5px] bottom-[5px] -mt-[1px]'
      style={
        pointerEvents: (p.mode === Mode.waiting || p.mode === Mode.error)? 'auto' : 'none',
      }
    )
      Anim(style=iconStyle)
        Icon(
          name=${SendIcons[p.mode]} 
          size='24' style={transform: SendIconTransform[p.mode]}
        )
    
    Anim.absolute.h-full.w-full.rounded-full.bg-accent.z-0(
      class='w-[36px] h-[36px] right-[3px] bottom-[3px]'
      style=backdropStyle
    )
  `
}
