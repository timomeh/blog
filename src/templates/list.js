import React from 'react'
import Link from 'gatsby-link'

import Post from '../components/Post'
import ContentWrapper from '../components/ContentWrapper'

const IndexPage = ({ data, pathContext }) => (
  <div>
    {data.posts.edges.map(({ node }) => (
      <ContentWrapper key={node.id}>
        <Post
          title={node.frontmatter.title}
          html={node.shortHtml}
          url={node.frontmatter.path}
          date={node.frontmatter.date}
          hasMore={node.hasMore}
          isOverview
        />
      </ContentWrapper>
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPagedQuery($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "YYYY-MM-DD")
          }
          hasMore
          shortHtml
        }
      }
    }
  }
`
