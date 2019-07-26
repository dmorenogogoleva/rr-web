export const getScrollPosition = () => {
  const text = document.querySelector('#text');
  let scroll = localStorage.getItem('scrollPosition');

  text.onscroll = function () {
    scroll = text.scrollTop;
    localStorage.setItem('scrollPosition', scroll);
  }

  text.scrollTop = scroll;
}