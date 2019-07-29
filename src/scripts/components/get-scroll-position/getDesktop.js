import { throttle } from '../throttle'

export const getDesktop = () => {
  const text = document.querySelector('#text');

  text.onscroll = throttle(function () {
    localStorage.setItem('scrollPosition', text.scrollTop);
  }, 100)


  window.onload = () => {
    text.scrollTop = +(localStorage.getItem('scrollPosition')) || 0;
  }
}