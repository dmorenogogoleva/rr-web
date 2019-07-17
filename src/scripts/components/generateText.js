import { markdown } from 'markdown'
import text from './../../../text/text.md'

export const generateText = () => {
  const textBlock = document.querySelector('.text')
  const inner = markdown.toHTML(text)
  textBlock.insertAdjacentHTML('afterbegin', text)
}
