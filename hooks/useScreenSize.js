import {useState} from 'react'
import {throttle} from 'lodash'
import useBus from './useBus.js'

export default () => {
  const [screenWidth, setWidth] = useState(window.innerWidth)
  const [screenHeight, setHeight] = useState(window.innerHeight)
  
  let shape
  if (screenWidth > screenHeight) shape = 'landscape'
  else shape = 'portrait'

  useBus({
    resize: () => throttle(() => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }, 100)
  })
  return {screenWidth, screenHeight, shape}
}