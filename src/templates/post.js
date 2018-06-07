import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import findImage from '../utils/findImage'
import ContentWrapper from '../components/ContentWrapper'
import PostNav from '../components/PostNav'
import Post from '../components/Post'

const BlogPost = ({ data, pathContext, transition }) => (
  <ContentWrapper style={transition && transition.style}>
    <Helmet>
      <title>
        {data.post.frontmatter.title} – {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={data.post.excerpt} />
      {findImage(data.post.htmlAst, imgSrc => (
        <meta name="og:image" content={imgSrc} />
      ))}
    </Helmet>
    <Post
      title={data.post.frontmatter.title}
      html={data.post.html}
      url={`/${data.post.frontmatter.path}`}
      date={data.post.frontmatter.date}
      nextPost={pathContext.next}
      prevPost={pathContext.prev}
    />
    <PostNav
      hasNext={!!pathContext.next}
      hasPrev={!!pathContext.prev}
      nextTitle={!!pathContext.next ? pathContext.next.frontmatter.title : null}
      nextTo={
        !!pathContext.next ? `/${pathContext.next.frontmatter.path}` : null
      }
      prevTitle={!!pathContext.prev ? pathContext.prev.frontmatter.title : null}
      prevTo={
        !!pathContext.prev ? `/${pathContext.prev.frontmatter.path}` : null
      }
      prevPrependix="Voriger Posts:"
      nextPrependix="Nächster Posts:"
    />
  </ContentWrapper>
)

export default BlogPost

export const query = graphql`
  query BlogPostQuery($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
        date(formatString: "YYYY-MM-DD")
      }
      excerpt(pruneLength: 320)
      html
      htmlAst
    }
  }
`
