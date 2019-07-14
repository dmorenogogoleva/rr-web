import Split from 'split.js'
import { replaceUrlOnDrug } from './replaceUrlOnDrug'

export const split = () => {
  let sizes = [55, 45]

  if (window.location.pathname.includes('read')) {
    sizes = [0, 100]
  }

  return Split(['#info', '#text'], {
    sizes,
    minSize: [0, 400],
    gutterStyle: function() {
      return {
        'z-index': '10',
        'background-color': 'var(--color-primary)',
        width: '10px'
      }
    },
    onDragEnd: function(dimension) {
      replaceUrlOnDrug(dimension[0])
    }
  })
}
