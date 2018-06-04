import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'

import Text from './Text'
import PostNavLink from './PostNavLink'

const PostNav = props => {
  return (
    <Text>
      <Row>
        {props.next ? (
          <PostNavLink
            next
            title={props.next.frontmatter.title}
            to={props.next.frontmatter.path}
          />
        ) : (
          <div />
        )}
        {props.prev ? (
          <PostNavLink
            prev
            title={props.prev.frontmatter.title}
            to={props.prev.frontmatter.path}
          />
        ) : (
          <div />
        )}
      </Row>
    </Text>
  )
}

PostNav.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object
}

const Row = g.div({
  display: 'flex',
  flexFlow: 'row wrap',
  marginTop: 80,
  justifyContent: 'space-between'
})

export default PostNav
