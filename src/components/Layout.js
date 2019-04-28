import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'
import theme from '../utils/theme'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewContentBanner from '../components/NewContentBanner'

function Layout({ children }) {
  const [hasUpdate, setHasUpdate] = React.useState(false)

  if (typeof window !== 'undefined') {
    window.__meh__showUpdateAvailableBanner = () => {
      setHasUpdate(true)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Head />
      <Wrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
      {hasUpdate && <NewContentBanner />}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

const Wrapper = styled.div({
  maxWidth: '76ch',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: rhythm(0.5),
  paddingRight: rhythm(0.5)
})

export default Layout
