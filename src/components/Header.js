import React from 'react'
import { Link } from 'gatsby'
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
    <g.Div marginTop={40}>
      <HeaderCopy />
    </g.Div>
  </Wrapper>
)

const Wrapper = g.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 560,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 60,
  paddingBottom: 80
})

export default Header
