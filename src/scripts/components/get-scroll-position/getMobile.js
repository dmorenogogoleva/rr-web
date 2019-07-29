import { throttle } from "../throttle";

export const getMobile = () => {
  window.onscroll = throttle(function () {
    localStorage.setItem('scrollPosition', document.scrollingElement.scrollTop);
  }, 100)

  window.onload = () => {
    document.scrollingElement.scrollTop = +(localStorage.getItem('scrollPosition')) || 0;
  }
}