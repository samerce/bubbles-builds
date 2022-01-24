export function openInNewTab(url) {
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.target = '_blank'
  a.click()
  document.body.removeChild(a)
}