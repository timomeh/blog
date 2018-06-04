import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css } from 'glamor'
import WebFont from 'webfontloader'

import './index.css'
import Header from '../components/Header'

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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children()}</div>
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
      }
    }
  }
`
