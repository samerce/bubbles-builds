import {useEffect, useLayoutEffect} from 'react'

export default function useEvents(listeners) {
  const broadcast = (eventName, props) => {
    let event = null
    
    if (props) {
      event = new CustomEvent(eventName, {detail: props})
    } else event = new Event(eventName)

    window.dispatchEvent(event)
  }

  useLayoutEffect(() => {
    for (const event in listeners) {
      const listener = listeners[event]
      window.addEventListener(event, (e) => {
        if (e.detail) listener(e.detail, e)
        else listener(e)
      })
    }
    return () => {
      for (const event in listeners) {
        window.removeEventListener(event, listeners[event])
      }
    }
  }, [])

  return broadcast
}