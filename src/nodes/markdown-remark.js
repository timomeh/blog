const { GraphQLString, GraphQLBoolean } = require('graphql')
const MORE_SEP = '<!-- more -->'

const remark = require('remark')
const remarkHtml = require('remark-html')
const remarkFrontmatter = require('remark-frontmatter')

module.exports = ({ type, store, pathPrefix, getNode, cache, reporter }) => {
  function hasMore(node) {
    return node.internal.content.includes(MORE_SEP)
  }

  function shortHtml(node) {
    return new Promise((resolve, reject) => {
      const [short] = node.internal.content.split(MORE_SEP)
      remark()
        .use(remarkHtml)
        .use(remarkFrontmatter, ['yaml'])
        .process(short, (err, file) => {
          if (err) return reject(err)
          resolve(String(file))
        })
    })
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
