/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const chunk = require('lodash/chunk')

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /webfontloader/,
      loader: 'null-loader'
    })
  }
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const indexTemplate = path.resolve('./src/templates/list.js')
  const postTemplate = path.resolve('./src/templates/post.js')
  const pageTemplate = path.resolve('./src/templates/page.js')
  const POSTS_ON_PAGE = 10

  // Using async await. Query will likely be very similar to your pageQuery in index.js
  const result = await graphql(`
    query {
      posts: allMarkdownRemark(
        limit: 9999
        filter: { fileAbsolutePath: { glob: "**/posts/**" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
      pages: allMarkdownRemark(
        limit: 9999
        filter: { fileAbsolutePath: { glob: "**/pages/**" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    throw new Error('whoops')
  }

  const posts = result.data.posts.edges
  const pages = result.data.pages.edges
  const listPages = chunk(posts, POSTS_ON_PAGE)

  function getPageUrl(i) {
    if (i < 0 || i > listPages.length - 1) return null
    return i > 0 ? `page/${i}` : '/'
  }

  // Create post list pages.
  listPages.forEach(({ node }, i) => {
    const pageUrl = i > 0 ? `page/${i}` : '/'
    createPage({
      path: getPageUrl(i),
      component: indexTemplate,
      context: {
        skip: i * POSTS_ON_PAGE,
        limit: POSTS_ON_PAGE,
        page: i,
        prevPage: getPageUrl(i - 1),
        nextPage: getPageUrl(i + 1)
      }
    })
  })

  // Create single post pages.
  posts.forEach(({ node }, i) => {
    const prev = i === posts.length - 1 ? null : posts[i + 1].node
    const next = i === 0 ? null : posts[i - 1].node

    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
        id: node.id,
        prev,
        next
      }
    })
  })

  // Create "static" pages.
  pages.forEach(({ node }, i) => {
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {
        id: node.id
      }
    })
  })
}
