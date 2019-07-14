import { RATIO, MAX_COLOR, MIN_BLUE, DEFAULT_ELEMENT_WIDTH } from './config'

export const getBlue = (width, elementWidth) => {
  if (!width) {
    return MIN_BLUE
  }

  const result = elementWidth / RATIO

  if (result === DEFAULT_ELEMENT_WIDTH) {
    return MIN_BLUE
  }

  if (result > MAX_COLOR) {
    return MIN_BLUE
  }

  if (result < MIN_BLUE) {
    return MAX_COLOR
  }
  return result
}
