import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Post from '../components/Post'
import PostNav from '../components/PostNav'
import ContentWrapper from '../components/ContentWrapper'

const MORE_SEP = '<!-- more -->'

const IndexPage = ({ data, pathContext, transition }) => (
  <div style={transition && transition.style}>
    {pathContext.page > 0 && (
      <Helmet>
        <title>{`Seite ${pathContext.page} – ${
          data.site.siteMetadata.title
        }`}</title>
      </Helmet>
    )}
    {data.posts.edges.map(({ node }) => (
      <ContentWrapper key={node.id}>
        <Post
          title={node.frontmatter.title}
          html={node.html.split(MORE_SEP)[0]}
          url={`/${node.frontmatter.path}`}
          date={node.frontmatter.date}
          hasMore={node.html.includes(MORE_SEP)}
          isOverview
        />
      </ContentWrapper>
    ))}
    <ContentWrapper css={{ marginTop: -80 }}>
      <PostNav
        hasNext={!!pathContext.prevPage}
        hasPrev={!!pathContext.nextPage}
        nextTitle="Neuere Posts"
        nextTo={pathContext.prevPage}
        prevTitle="Ältere Posts"
        prevTo={pathContext.nextPage}
      />
    </ContentWrapper>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPagedQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
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
          id
          frontmatter {
            title
            path
            date(formatString: "YYYY-MM-DD")
          }
          # Excerpt is not working properly, waiting for:
          # https://github.com/gatsbyjs/gatsby/issues/4459
          # excerpt
          html
        }
      }
    }
  }
`
