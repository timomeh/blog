import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import ogImage from '../static/og-image.png'

function Head({ title, description }) {
  const data = useStaticQuery(graphql`
    query SiteMeta {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const metaDescription = description || data.site.siteMetadata.description
  const metaTitle = title ? title + ' - timomeh' : 'timomeh'

  return (
    <Helmet
      htmlAttributes={{ lang: 'de' }}
      title={metaTitle}
      meta={[
        { name: 'description', content: metaDescription },
        { name: 'og:title', content: metaTitle },
        { name: 'og:description', content: metaDescription },
        { name: 'og:image', content: ogImage },
        { name: 'og:type', content: 'website' }
      ]}
    />
  )
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Head
