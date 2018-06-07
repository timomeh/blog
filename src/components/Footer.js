import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'
import Link from 'gatsby-link'

import ContentWrapper from '../components/ContentWrapper'
import { colors } from '../theme'

const links = [
  { title: 'Feed', to: '/feed.xml', external: true },
  { title: 'Twitter', to: 'https://twitter.com/timomeh' },
  { title: 'Instagram', to: 'https://instagram.com/timomeh' },
  { title: 'Impressum', to: '/impressum' },
  { title: 'Datenschutzerklärung', to: '/datenschutz' }
]

const Footer = () => {
  return (
    <ContentWrapper css={{ marginTop: 80, marginBottom: 70 }}>
      <FooterLinkList>
        {links.map(link => (
          <FooterLink key={link.to}>
            {link.to.startsWith('https') || link.external ? (
              <a href={link.to}>{link.title}</a>
            ) : (
              <Link to={link.to}>{link.title}</Link>
            )}
          </FooterLink>
        ))}
      </FooterLinkList>
    </ContentWrapper>
  )
}

const FooterLinkList = g.ul({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  fontSize: '0.778em',
  color: colors.pencil
})

const FooterLink = g.li({
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 10,

  '& a': {
    color: 'inherit',
    textDecoration: 'none'
  }
})

export default Footer
