import {useState, useLayoutEffect} from 'react'
import {throttle} from 'lodash'
import useEvents from './useEvents.js'

export default function useScreenSize() {
  const [screenWidth, setWidth] = useState()
  const [screenHeight, setHeight] = useState()
  
  let shape = null
  if (screenWidth > screenHeight) shape = 'landscape'
  else shape = 'portrait'

  useLayoutEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])

  useEvents({
    resize: () => throttle(() => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }, 100)
  })
  
  return {screenWidth, screenHeight, shape}
}