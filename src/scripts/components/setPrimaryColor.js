import ResizeObserver from 'resize-observer-polyfill';

import { getRed } from './getRed'
import { getGreen } from './getGreen'
import { getBlue } from './getBlue'

export const setPrimaryColor = () => {
  const info = document.querySelector('#info')
  const root = document.documentElement

  const observer = new ResizeObserver(env => {
    const windowWidth = window.innerWidth
    const width = env[0].contentRect.width

    const percent = windowWidth / 100
    const elementWidth = Math.ceil(width / percent)

    const red = getRed(width, elementWidth)
    const green = getGreen(width, elementWidth)
    const blue = getBlue(width, elementWidth)

    root.style.setProperty('--red-primary', red)
    root.style.setProperty('--green-primary', green)
    root.style.setProperty('--blue-primary', blue)
  })

  return observer.observe(info)
}
