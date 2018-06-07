// Checks if there's an image in the htmlAst and returns the first image src.
// Otherwise returns false.
// This is as more dirty than the bottom of my socks.

module.exports = function findImage(htmlAst, cb) {
  const firstMdImage = htmlAst.children.findIndex(el => {
    if (el.type === 'element' && el.tagName === 'p') {
      return (
        el.children.findIndex(subEl => {
          return (
            subEl.tagName === 'a' &&
            subEl.properties &&
            subEl.properties.className &&
            subEl.properties.className.includes('gatsby-resp-image-link')
          )
        }) >= 0
      )
    } else {
      return false
    }
  })

  const firstImg = htmlAst.children.findIndex(el => {
    return el.type === 'element' && el.tagName === 'figure'
  })

  if (firstMdImage < 0 && firstImg < 0) {
    return false
  }

  const firstOccur = Math.min(firstMdImage, firstImg)

  let imgSrc

  if (firstOccur === firstMdImage) {
    imgSrc = htmlAst.children[firstOccur].children.find(
      el =>
        el.properties &&
        el.properties.className &&
        el.properties.className.includes('gatsby-resp-image-link')
    ).properties.href
  }

  if (firstOccur === firstImg) {
    imgSrc = htmlAst.children[firstOccur].children.find(
      el =>
        el.properties &&
        el.properties.className &&
        el.properties.className.includes('gatsby-resp-image-link')
    ).properties.href
  }

  return cb(imgSrc)
}
