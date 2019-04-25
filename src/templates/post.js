import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'
import Entry from '../components/Entry'

function PostTemplate({ data, pageContext }) {
  const preparedHtml = data.post.html.replace(
    '<!-- more -->',
    '<!-- more --><div id="more"></div>'
  )
  return (
    <Layout>
      <Head
        title={data.post.frontmatter.title}
        description={data.post.description}
      />
      <Entry
        title={data.post.frontmatter.title}
        html={preparedHtml}
        slug={data.post.fields.slug}
        date={data.post.frontmatter.date}
      />
      {/* <PostNav prev={pageContext.prev} next={pageContext.next} /> */}
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default PostTemplate

export const query = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      description: excerpt(pruneLength: 320)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
