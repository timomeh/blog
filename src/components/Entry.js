import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

function Entry({ html, frontmatter, fields, hasMore }) {
  const showTitle = frontmatter.type !== 'short'

  return (
    <article>
      {frontmatter.date && (
        <PostDate>
          <DateLink to={'/' + fields.slug}>{frontmatter.date}</DateLink>
        </PostDate>
      )}
      {showTitle && (
        <Title>
          <Link to={'/' + fields.slug}>{frontmatter.title}</Link>
        </Title>
      )}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {hasMore && (
        <p>
          <ReadMoreLink to={'/' + fields.slug + '#more'}>
            weiterlesen…
          </ReadMoreLink>
        </p>
      )}
    </article>
  )
}

Entry.propTypes = {
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired
  }).isRequired,
  frontmatter: PropTypes.shape({
    date: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  html: PropTypes.string.isRequired,
  hasMore: PropTypes.bool
}

const DateLink = styled(Link)({
  backgroundImage: 'none !important'
})

const PostDate = styled.time(props => ({
  display: 'block',
  textAlign: 'center',
  marginBottom: rhythm(0.5),
  color: props.theme.pencil,
  ...scale(-0.5)
}))

const Title = styled.h1({
  ...scale(1)
})

const ReadMoreLink = styled(Link)(props => ({
  backgroundImage: `linear-gradient(to top, ${props.theme.red} 0%, ${
    props.theme.red
  } 100%) !important`,

  '&:hover': {
    backgroundImage: `linear-gradient(to top, ${props.theme.blue} 0%, ${
      props.theme.blue
    } 100%) !important`
  }
}))

export default Entry
