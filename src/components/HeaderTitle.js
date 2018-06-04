import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'

import { colors } from '../theme'
import Logo from './Logo'

const HeaderTitle = props => {
  return (
    <Outer>
      <Logo
        css={{ width: 157, height: 85, display: 'block', color: colors.ink }}
      />
      <Line />
    </Outer>
  )
}

const Outer = g.div({
  width: 179,
  height: 92,
  position: 'relative',
  color: colors.marker,

  '&:hover': {
    color: colors.markerSecondary
  }
})

const Line = g.div({
  width: 150,
  height: 20,
  position: 'absolute',
  right: 0,
  bottom: 0,
  zIndex: -1,
  backgroundColor: 'currentColor'
})

export default HeaderTitle
