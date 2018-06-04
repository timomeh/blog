import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'

import PostActionLink from './PostActionLink'

const PostNavLink = props => {
  return (
    <g.Div textAlign={props.prev ? 'right' : 'left'} flex={1} minWidth={200}>
      <PostActionLink to={props.to} css={{ lineHeight: '0.5 !important' }}>
        {props.next ? 'Next' : 'Prev'}:
        <br />
        {props.title}
      </PostActionLink>
    </g.Div>
  )
}

PostNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  prev: PropTypes.bool,
  next: PropTypes.bool
}

export default PostNavLink
