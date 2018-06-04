import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import g from 'glamorous'

import { colors } from '../theme'

const PostTitle = props => {
  return (
    <Title>
      <Link to={props.url}>{props.title}</Link>
    </Title>
  )
}

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

const Title = g.h2({
  fontSize: '1.556em',
  color: colors.ink,
  fontWeight: 700,
  lineHeight: 1.4,
  marginTop: 0,
  marginBottom: 40,

  '.wf-active &': {
    fontWeight: 500
  },

  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    backgroundImage: `linear-gradient(
      to top,
      ${colors.marker} 0%,
      ${colors.marker} 100%)`,
    backgroundPosition: '0 calc(1em - 6px)',
    backgroundSize: '10px 10px',
    backgroundRepeat: 'repeat-x',
    paddingLeft: 4,
    paddingRight: 4,
    marginLeft: -4,
    marginRight: -4,

    '&:hover': {
      backgroundImage: `linear-gradient(
        to top,
        ${colors.markerSecondary} 0%,
        ${colors.markerSecondary} 100%)`
    }
  }
})

export default PostTitle
