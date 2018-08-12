import React from 'react'
import Helmet from 'react-helmet'
import { css } from 'glamor'
import { StaticQuery, withPrefix } from 'gatsby'

import '../index.css'
import Transition from '../components/Transition'
import Header from '../components/Header'
import Footer from '../components/Footer'

import 'prism-themes/themes/prism-base16-ateliersulphurpool.light.css'

class Layout extends React.Component {
  render() {
    const { children, data } = this.props

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <Helmet>
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />
              <meta
                property="og:image"
                content={
                  data.site.siteMetadata.siteUrl + withPrefix('og-image.png')
                }
              />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Transition>{children}</Transition>
            <Footer />
          </React.Fragment>
        )}
      />
    )
  }
}

export default Layout
