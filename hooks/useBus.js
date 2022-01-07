import {useEffect, useLayoutEffect} from 'react'

export default (listeners) => {
  useEffect(() => {
    window.broadcast = (eventName, props) => {
      let event = null
      if (props) {
        event = new CustomEvent(eventName, {detail: props})
      } else event = new Event(eventName)
      dispatchEvent(event)
    }
    window.on = (event, listener) => {
      return addEventListener(event, (e) => {
        if (e.detail) listener(e.detail, e)
        else listener(e)
      })
    }
    window.off = removeEventListener
  }, [])

  useLayoutEffect(() => {
    for (const event in listeners) {
      window.on?.(event, listeners[event])
    }
  }, () => {
    for (const event in listeners) {
      window.off?.(event, listeners[event])
    }
  })
}