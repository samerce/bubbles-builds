import { after, every } from './lang'

window.after = after
window.every = every

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
