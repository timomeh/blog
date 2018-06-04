const { GraphQLString, GraphQLBoolean } = require('graphql')
const MORE_SEP = '<!-- more -->'

module.exports = ({ type, store, pathPrefix, getNode, cache, reporter }) => {
  function hasMore(node) {
    return node.internal.content.includes(MORE_SEP)
  }

  async function getHTML(node) {
    return await cache.get(
      `transformer-remark-markdown-html-${node.internal.contentDigest}--`
    )
  }

  async function shortHtml(node) {
    const more = hasMore(node)
    const html = await getHTML(node)
    const [short] = html.split(MORE_SEP)
    return short
  }

  return Promise.resolve({
    shortHtml: {
      type: GraphQLString,
      resolve(node) {
        return shortHtml(node)
      }
    },
    hasMore: {
      type: GraphQLBoolean,
      resolve(node) {
        return hasMore(node)
      }
    }
  })
}
