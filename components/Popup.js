import usePopup from '../model/usePopup'
import { animated, useSpring, config } from 'react-spring'
import How from './How'
import Why from './Why'

const Anim = animated.div

export default () => {
  const {Content, hidePopup} = usePopup()
  const anim = useSpring({
    scale: Content? 1 : 0,
    config: {
      ...config.stiff,
      mass: .69,
    }
  })
  const opacity = useSpring({
    opacity: Content? 1 : 0,
    config: {
      ...config.stiff,
      mass: .12,
    }
  })

  const rootStyle = {
    pointerEvents: Content? 'auto' : 'none',
  }
  const bgStyle = {
    opacity: opacity.opacity.to(o => o),
    pointerEvents: Content? 'all' : 'none',
  }
  const contentStyle = {
    ...anim, ...opacity
  }

  return pug`
    .fixed.top-0.left-0.h-full.w-full.z-10.flex.items-end.justify-center.pb-nav(
      class='pt-[36px]'
      style=rootStyle
    )
      Anim.absolute.top-0.left-0.w-full.h-full.bg-black.bg-opacity-50.glass.opacity-0(
        onClick=hidePopup
        style=bgStyle
      )
      Anim.origin-bottom-left.h-full(style=contentStyle)
        How
        // Why
  `
}