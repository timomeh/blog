import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'
import theme from '../utils/theme'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Head />
      <Wrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
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
