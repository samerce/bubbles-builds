import {useLayoutEffect} from 'react'

export default (listeners) => {
  useLayoutEffect(() => {
    for (const event in listeners) {
      on(event, listeners[event])
    }
  }, () => {
    for (const event in listeners) {
      off(event, listeners[event])
    }
  })
}