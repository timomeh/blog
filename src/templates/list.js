import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'
import Entry from '../components/Entry'

function ListTemplate({ data, pageContext }) {
  const { currentPage, numPages } = pageContext

  return (
    <Layout>
      <Head title={currentPage > 1 ? 'Seite ' + currentPage : null} />
      {data.posts.edges.map(({ node: post }) => (
        <Entry
          key={post.frontmatter.slug}
          title={post.frontmatter.title}
          html={post.excerpt}
          slug={post.fields.slug}
          date={post.frontmatter.date}
          hasMore={post.html.includes('<!-- more -->')}
        />
      ))}
      {/* <ListNav currentPage={currentPage} numPages={numPages} /> */}
    </Layout>
  )
}

ListTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default ListTemplate

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { glob: "**/posts/**" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          excerpt(format: HTML)
          html
        }
      }
    }
  }
`
