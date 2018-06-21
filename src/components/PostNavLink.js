import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'

import PostActionLink from './PostActionLink'

const PostNavLink = props => {
  return (
    <g.Div textAlign={props.right ? 'right' : 'left'} flex={1} minWidth={200}>
      <PostActionLink
        to={`${props.to}/`}
        css={{ lineHeight: '0.5 !important' }}
      >
        {props.prependix && [
          <span key="word">{props.prependix}</span>,
          <br key="break" />
        ]}
        {props.title}
      </PostActionLink>
    </g.Div>
  )
}

PostNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  prependix: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool
}

export default PostNavLink
