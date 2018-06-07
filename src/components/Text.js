import g from 'glamorous'
import { colors } from '../theme'

// Maybe this was a bad idea.

export default g.div({
  color: colors.ink,
  lineHeight: 2.167,

  '.wf-active &': {
    lineHeight: 1.8
  },

  '& p': {
    marginTop: 30,
    marginBottom: 30
  },

  '& p.narrow': {
    margin: 0
  },

  '& a:not(.gatsby-resp-image-link)': {
    color: 'inherit',
    textDecoration: 'none',
    backgroundImage: `linear-gradient(to top, ${colors.marker} 0%, ${
      colors.marker
    } 100%)`,
    backgroundPosition: '0 calc(1em - 3px)',
    backgroundSize: '10px 6px',
    backgroundRepeat: 'repeat-x',
    paddingLeft: 2,
    paddingRight: 2,
    marginLeft: -2,
    marginRight: -2,

    '&:hover': {
      backgroundImage: `linear-gradient(to top, ${colors.markerSecondary} 0%, ${
        colors.markerSecondary
      } 100%)`
    }
  },

  '& .gatsby-resp-image-figure': {
    margin: 0
  },

  '& .gatsby-resp-image-link': {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: -20,
    marginRight: -20
  },

  '& .gatsby-resp-image-figcaption': {
    marginTop: -35,
    textAlign: 'center',
    fontSize: '0.778em',
    color: colors.pencil
  },

  '& .gatsby-resp-iframe-wrapper': {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: -20,
    marginRight: -20
  },

  '& strong, & b': {
    fontWeight: 500
  },

  '& blockquote': {
    margin: 0,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    color: colors.pencil,
    borderLeft: `6px solid ${colors.markerSecondary}`,

    '& p': {
      marginTop: 15,
      marginBottom: 15
    },

    '& p:first-of-type': {
      marginTop: 0
    },

    '& p:last-of-type': {
      marginBottom: 0
    }
  },

  '& h3, & h4, & h5': {
    marginTop: 30,
    marginBottom: 30,
    lineHeight: 1.4,
    fontWeight: 500
  },

  '& h3': {
    fontSize: '1.3em'
  },

  '& h4': {
    fontSize: '1.2em'
  },

  '& h5': {
    fontSize: '1.1em'
  },

  '& ul': {
    margin: 0,
    padding: 0,
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 30,
    listStyleType: 'none'
  },

  '& ul li': {
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',

    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 6,
      width: 12,
      backgroundColor: colors.markerSecondary,
      top: 12,
      left: -22
    }
  },

  '& :not(pre) > code': {
    whiteSpace: 'normal',
    padding: '.3em'
  }
})
