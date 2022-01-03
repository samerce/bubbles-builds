export function after(timeout, fn) {
  const id = setTimeout(fn, timeout)
  return {
    id,
    clear: () => clearTimeout(id),
  }
}

export function every(timeout, fn) {
  const id = setInterval(fn, timeout)
  return {
    id,
    clear: () => clearInterval(id)
  }
}

export function makeEnum(...valueArray) {
  return valueArray.reduce((modeMap, mode) => (modeMap[mode] = mode) && modeMap, {})
}
