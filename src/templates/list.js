import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'
import Head from '../components/Head'
import Entry from '../components/Entry'
import PrevNext from '../components/PrevNext'

function ListTemplate({ data, pageContext }) {
  const { currentPage, numPages } = pageContext

  return (
    <Layout>
      <Head title={currentPage > 1 ? 'Seite ' + currentPage : null} />
      {data.posts.edges.map(({ node: post }) => (
        <EntryContainer key={post.fields.slug}>
          <Entry
            frontmatter={post.frontmatter}
            fields={post.fields}
            html={post.excerpt}
            hasMore={post.html.includes('<!-- more -->')}
          />
        </EntryContainer>
      ))}
      <PrevNext
        prevTo={currentPage < numPages ? `/page/${currentPage + 1}` : null}
        nextTo={
          currentPage > 1
            ? currentPage === 2
              ? '/'
              : `/page/${currentPage - 1}`
            : null
        }
        prevContent={() => 'Ältere Posts →'}
        nextContent={() => '← Neuere Posts'}
      />
    </Layout>
  )
}

ListTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

const EntryContainer = styled.div`
  margin-bottom: ${rhythm(5)};
`

export default ListTemplate

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/posts/**" } }
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
            type
          }
          excerpt(format: HTML)
          html
        }
      }
    }
  }
`
