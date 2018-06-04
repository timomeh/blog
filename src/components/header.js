import React from 'react'
import Link from 'gatsby-link'
import g from 'glamorous'

import HeaderTitle from './HeaderTitle'
import HeaderCopy from './HeaderCopy'
import Hidden from './Hidden'

const Header = () => (
  <Wrapper>
    <Link to="/">
      <Hidden>
        <h1>timomeh</h1>
      </Hidden>
      <HeaderTitle />
    </Link>
    <g.Div marginTop={20}>
      <HeaderCopy />
    </g.Div>
  </Wrapper>
)

const Wrapper = g.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 550,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 60,
  paddingBottom: 40
})

export default Header
