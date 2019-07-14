export const replaceUrlOnDrug = (x) => {
  if (x < 1) {
    history.pushState({ read: 'read' }, '/read', '/read')
  } else {
    history.replaceState({}, '', '/')
  }
}