import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'
import Logo from './Logo'

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Shortbio>
        Hi, ich bin{' '}
        <Link to="/timo_iel" className="has-line">
          Timo Mämecke
        </Link>
        , Software-Entwickler aus Köln.
      </Shortbio>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${rhythm(2)};
  padding-bottom: ${rhythm(4)};
  padding-left: ${rhythm(1)};
  padding-right: ${rhythm(1)};
`

const Shortbio = styled.p`
  margin: 0;
  margin-top: ${rhythm(1)};
  text-align: center;
`

export default Header
