import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import ContentWrapper from '../components/ContentWrapper'
import Layout from '../components/Layout'
import Post from '../components/Post'

const NotFoundPage = ({ data, transition }) => (
  <Layout>
    <ContentWrapper style={transition && transition.style}>
      <Helmet>
        <title>Nichts gefunden – {data.site.siteMetadata.title}</title>
      </Helmet>
      <Post title="Inhalt nicht verfügbar" url="/">
        <p>
          Diese Seite gibt es nicht. 🤷‍ Versuche es doch mal{' '}
          <Link to="/">hier</Link>.
        </p>
      </Post>
    </ContentWrapper>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query FourOhFourQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
