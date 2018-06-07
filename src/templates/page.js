import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import findImage from '../utils/findImage'
import ContentWrapper from '../components/ContentWrapper'
import Post from '../components/Post'

const Page = ({ data, transition }) => {
  const firstImage = findImage(data.page.html)

  return (
    <ContentWrapper style={transition && transition.style}>
      <Helmet>
        <title>
          {data.page.frontmatter.title} – {data.site.siteMetadata.title}
        </title>
        <meta name="description" content={data.page.excerpt} />
        {firstImage && <meta name="og:image" content={firstImage} />}
      </Helmet>
      <Post
        title={data.page.frontmatter.title}
        html={data.page.html}
        url={`/${data.page.frontmatter.path}`}
      />
    </ContentWrapper>
  )
}

export default Page

export const query = graphql`
  query PageQuery($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      excerpt(pruneLength: 320)
      html
    }
  }
`
