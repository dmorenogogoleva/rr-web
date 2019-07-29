import { getDesktop } from './getDesktop'
import { getMobile } from './getMobile'

export const getScrollPosition = () => {
  const width = window.innerWidth;

  width >= 1024 ? getDesktop() : getMobile()

}