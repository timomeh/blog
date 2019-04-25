const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(
    `
      {
        posts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { glob: "**/posts/**" } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }

        pages: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { glob: "**/pages/**" } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create posts
  const posts = result.data.posts.edges
  posts.forEach((post, index) => {
    const prev = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    actions.createPage({
      path: post.node.fields.slug,
      component: path.resolve('./src/templates/post.js'),
      context: {
        slug: post.node.fields.slug,
        prev,
        next
      }
    })
  })

  // Create pages
  const pages = result.data.pages.edges
  pages.forEach(page => {
    actions.createPage({
      path: page.node.fields.slug,
      component: path.resolve('./src/templates/page.js'),
      context: {
        slug: page.node.fields.slug
      }
    })
  })

  // Create lists
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? '/' : `/page/${index + 1}`,
      component: path.resolve('./src/templates/list.js'),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage: index + 1,
        numPages
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
      .split('/') // split dir parts
      .filter(s => !!s) // remove empty parts
      .pop() // use last as slug (filename without extension)

    actions.createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}
