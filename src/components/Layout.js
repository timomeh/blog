import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'

import theme from '../utils/theme'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
