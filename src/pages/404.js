import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import ContentWrapper from '../components/ContentWrapper'
import Post from '../components/Post'

const NotFoundPage = ({ data, transition }) => (
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
