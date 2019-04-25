import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { rhythm, scale } from '../utils/typography'

const links = [
  { title: 'Feed', to: '/feed.xml' },
  { title: 'Twitter', to: 'https://twitter.com/timomeh' },
  { title: 'Instagram', to: 'https://instagram.com/timomeh' },
  { title: 'Impressum', to: '/impressum/', internal: true },
  { title: 'Datenschutzerklärung', to: '/datenschutz/', internal: true }
]

function Footer() {
  return (
    <FooterContainer>
      <LinkList>
        {links.map(link => (
          <LinkItem key={link.title}>
            {link.internal ? (
              <Link to={link.to}>{link.title}</Link>
            ) : (
              <a href={link.to}>{link.title}</a>
            )}
          </LinkItem>
        ))}
      </LinkList>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer(props => ({
  padding: rhythm(0.5),
  paddingBottom: rhythm(2.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: props.theme.pencil,
  ...scale(-0.5)
}))

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const LinkItem = styled.li`
  margin-left: ${rhythm(0.3)};
  margin-right: ${rhythm(0.3)};

  &::before {
    content: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
`

export default Footer
