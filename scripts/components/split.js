import Split from 'split.js'

export const split = () => {
  return Split(['#info', '#text'], {
    sizes: [55, 45],
    minSize: [-24, 400],
    gutterStyle: function(dimension, gutterSize) {
      return {
        'z-index': '10',
        'background-color': 'var(--color-primary)',
        width: '10px',
      }
    }
  })
}
