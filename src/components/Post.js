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
    <g.Div marginBottom={80} marginTop={40}>
      <PostDate>{props.date}</PostDate>
      <PostTitle url={props.url} title={props.title} />
      <Text dangerouslySetInnerHTML={{ __html: props.html }} />
      {showMoreLink && (
        <Text>
          <PostActionLink to={props.url}>weiterlesen...</PostActionLink>
        </Text>
      )}
      {!props.isOverview && (
        <PostNav next={props.nextPost} prev={props.prevPost} />
      )}
    </g.Div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isOverview: PropTypes.bool,
  html: PropTypes.string.isRequired,
  nextPost: PropTypes.object,
  prevPost: PropTypes.object
}

export default Post
