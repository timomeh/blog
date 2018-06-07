import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'

import Text from './Text'
import PostNavLink from './PostNavLink'

const PostNav = props => {
  return (
    <Text>
      <Row>
        {props.hasNext ? (
          <PostNavLink
            left
            prependix={props.nextPrependix}
            title={props.nextTitle}
            to={props.nextTo}
          />
        ) : (
          <div />
        )}
        {props.hasPrev ? (
          <PostNavLink
            right
            prependix={props.prevPrependix}
            title={props.prevTitle}
            to={props.prevTo}
          />
        ) : (
          <div />
        )}
      </Row>
    </Text>
  )
}

PostNav.propTypes = {
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  nextTitle: PropTypes.string,
  prevTitle: PropTypes.string,
  nextTo: PropTypes.string,
  prevTo: PropTypes.string,
  nextPrependix: PropTypes.string,
  prevPrependix: PropTypes.string
}

const Row = g.div({
  display: 'flex',
  flexFlow: 'row wrap',
  marginTop: 80,
  justifyContent: 'space-between'
})

export default PostNav
