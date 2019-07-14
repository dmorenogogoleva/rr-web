import { RATIO, MAX_GREEN, MIN_GREEN, DEFAULT_ELEMENT_WIDTH } from './config'

export const getGreen = (width, elementWidth) => {
  if (!width) {
    return MAX_GREEN
  }

  const result =  elementWidth / RATIO

  if (result === DEFAULT_ELEMENT_WIDTH) {
    return MAX_GREEN
  }

  if (result > MAX_GREEN) {
    return MAX_GREEN
  }

  if (result < MIN_GREEN) {
    return MIN_GREEN
  }
  return result
}
