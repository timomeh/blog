import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'
import Entry from '../components/Entry'

function PageTemplate({ data }) {
  return (
    <Layout>
      <Head
        title={data.page.frontmatter.title}
        description={data.page.description}
      />
      <Entry
        title={data.page.frontmatter.title}
        html={data.page.html}
        slug={data.page.fields.slug}
      />
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export default PageTemplate

export const query = graphql`
  query PageBySlug($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      description: excerpt(pruneLength: 320)
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
