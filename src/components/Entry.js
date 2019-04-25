import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

// import Text from './Text'
// import PostActionLink from './PostActionLink'
// import PostNav from './PostNav'
import { rhythm, scale } from '../utils/typography'

function Entry({ title, html, slug, date, hasMore }) {
  return (
    <EntryContainer>
      {date && <Date>{date}</Date>}
      <Title>
        <Link to={slug}>{title}</Link>
      </Title>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {hasMore && (
        <p>
          <ReadMoreLink to={slug + '#more'}>weiterlesen…</ReadMoreLink>
        </p>
      )}
    </EntryContainer>
  )
}

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  slug: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  hasMore: PropTypes.bool
}

const EntryContainer = styled.article({
  maxWidth: '76ch',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: rhythm(0.5),
  paddingRight: rhythm(0.5),
  marginBottom: rhythm(5)
})

const Date = styled.time(props => ({
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
