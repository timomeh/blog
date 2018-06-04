const remarkNode = require('./nodes/markdown-remark')

module.exports = (data, pluginOptions) => {
  if (data.type.name === 'MarkdownRemark') {
    return remarkNode(data)
  }

  return {}
}
