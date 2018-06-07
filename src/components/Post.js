import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'

import Text from './Text'
import PostDate from './PostDate'
import PostTitle from './PostTitle'
import PostActionLink from './PostActionLink'
import PostNav from './PostNav'

const Post = props => {
  const showMoreLink = props.isOverview && props.hasMore
  return (
    <g.Div marginBottom={160} marginTop={40}>
      {props.date && <PostDate>{props.date}</PostDate>}
      <PostTitle url={props.url} title={props.title} />
      {props.html && <Text dangerouslySetInnerHTML={{ __html: props.html }} />}
      {props.children && <Text>{props.children}</Text>}
      {showMoreLink && (
        <Text>
          <PostActionLink to={props.url}>weiterlesen…</PostActionLink>
        </Text>
      )}
    </g.Div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
  isOverview: PropTypes.bool,
  html: PropTypes.string
}

export default Post
