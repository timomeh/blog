import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css } from 'glamor'
import WebFont from 'webfontloader'

import './index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ogImage from '../static/og-image.png'

import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css'

class Layout extends React.Component {
  componentDidMount() {
    WebFont.load({
      google: {
        families: ['Fira Sans:400,400i,500,500i']
      }
    })
  }

  render() {
    const { children, data } = this.props

    return (
      <div>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="og:image" content={ogImage} />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children()}</div>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
