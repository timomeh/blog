/* globals window CustomEvent */
import createHistory from 'history/createBrowserHistory'
import FontFaceObserver from 'fontfaceobserver'

const timeout = 250
const historyExitingEventType = `history::exiting`

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, {
    detail: { pathname }
  })
  window.dispatchEvent(event)
  setTimeout(() => {
    callback(true)
  }, timeout)
}

let history
if (typeof document !== 'undefined') {
  history = createHistory({ getUserConfirmation })
  // block must return a string to conform
  history.block((location, action) => location.pathname)
}

export let replaceHistory = () => history

export const onClientEntry = () => {
  const fontName = 'Fira Sans'
  const fonts = [
    new FontFaceObserver(fontName, { weight: 400 }),
    new FontFaceObserver(fontName, { weight: 400, style: 'italic' }),
    new FontFaceObserver(fontName, { weight: 500 }),
    new FontFaceObserver(fontName, { weight: 500, style: 'italic' })
  ]

  Promise.all(fonts.map(font => font.load())).then(() => {
    document.documentElement.className += ' font--yep'
  })
}

export { historyExitingEventType, timeout }
