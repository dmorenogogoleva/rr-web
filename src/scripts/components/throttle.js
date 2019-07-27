export const throttle = (func, timeout) => {
  let inThrottle = false;
  return () => {
    if (!inThrottle) {
      func()
      inThrottle = true
      setTimeout(() => {
        inThrottle = false;
      }, timeout)
    }

  }
}