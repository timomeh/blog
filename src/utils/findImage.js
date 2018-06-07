// Parse html with regex is always a great idea.

export default function findFirstImage(html) {
  const imageRegex = /<a class="gatsby-resp-image-link" href="([A-Za-z0-9=._/-]+)/gm
  const result = imageRegex.exec(html)
  return result ? result[1] : false
}
