/* globals window CustomEvent */
import FontFaceObserver from 'fontfaceobserver'

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
