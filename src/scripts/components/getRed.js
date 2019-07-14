import { MAX_COLOR, RATIO, MIN_RED, DEFAULT_ELEMENT_WIDTH } from './config'

export const getRed = (width, elementWidth) => {
  if (!width) {
    return MAX_COLOR
  }

  const result =  elementWidth / RATIO

  if (result === DEFAULT_ELEMENT_WIDTH) {
    return MAX_COLOR
  }

  if (result > MAX_COLOR) {
    return MAX_COLOR
  }

  if (result < MIN_RED) {
    return MIN_RED
  }
  return result
}
