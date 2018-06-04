import React from 'react'
import Link from 'gatsby-link'

import ContentWrapper from '../components/ContentWrapper'
import Post from '../components/Post'

const BlogPost = ({ data, pathContext }) => (
  <ContentWrapper>
    <Post
      title={data.post.frontmatter.title}
      html={data.post.html}
      url={data.post.frontmatter.path}
      date={data.post.frontmatter.date}
      nextPost={pathContext.next}
      prevPost={pathContext.prev}
    />
  </ContentWrapper>
)

export default BlogPost

export const query = graphql`
  query BlogPostQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
        date(formatString: "YYYY-MM-DD")
      }
      html
    }
  }
`
