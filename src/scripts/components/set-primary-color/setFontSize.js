import ResizeObserver from 'resize-observer-polyfill';


export const setFontSize = () => {
  const text = document.querySelector('#text')
  const root = document.documentElement

  const observer = new ResizeObserver(env => {
    const windowWidth = window.innerWidth
    const width = env[0].contentRect.width

    const percent = windowWidth / 50

    const elementWidth = Math.ceil(width / percent)
    const fontSize = elementWidth < 18 ? `18px` : `${elementWidth}px`
    root.style.setProperty('--text-size', fontSize)
    root.style.setProperty('--label-font-size', fontSize * 0.2)
  })

  return observer.observe(text)
}
