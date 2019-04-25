import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'
import Entry from '../components/Entry'
import PrevNext from '../components/PrevNext'

function PostTemplate({ data, pageContext }) {
  const preparedHtml = data.post.html.replace(
    '<!-- more -->',
    '<!-- more --><div id="more"></div>'
  )
  const { prev, next } = pageContext

  return (
    <Layout>
      <Head
        title={data.post.frontmatter.title}
        description={data.post.description}
      />
      <Entry
        frontmatter={data.post.frontmatter}
        fields={data.post.fields}
        html={preparedHtml}
      />
      <PrevNext
        prevTo={prev && '/' + prev.fields.slug}
        nextTo={next && '/' + next.fields.slug}
        prevContent={() => (
          <>
            Voriger Post:
            <br />
            {prev.frontmatter.title}
          </>
        )}
        nextContent={() => (
          <>
            Nächster Post:
            <br />
            {next.frontmatter.title}
          </>
        )}
      />
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
        type
      }
    }
  }
`
