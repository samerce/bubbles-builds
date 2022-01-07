import {useState, useLayoutEffect} from 'react'
import {throttle} from 'lodash'
import useBus from './useBus.js'

export default () => {
  const [screenWidth, setWidth] = useState()
  const [screenHeight, setHeight] = useState()
  
  let shape = null
  if (screenWidth > screenHeight) shape = 'landscape'
  else shape = 'portrait'

  useLayoutEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])
  useBus({
    resize: () => throttle(() => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }, 100)
  })
  return {screenWidth, screenHeight, shape}
}