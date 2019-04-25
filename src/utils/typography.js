import Typography from 'typography'
import theme from './theme'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.8,
  headerFontFamily: ['Fira Sans', 'Lucida Grande', 'sans-serif'],
  bodyFontFamily: ['Fira Sans', 'Lucida Grande', 'sans-serif'],
  scaleRatio: 1.56,
  headerWeight: '500',
  bodyWeight: '400',
  boldWeight: '500',
  bodyColor: theme.ink,
  overrideThemeStyles: ({ rhythm, scale }) => ({
    'article a:not(.gatsby-resp-image-link), .has-line': {
      color: 'inherit',
      textDecoration: 'none',
      backgroundImage: `linear-gradient(to top, ${theme.green} 0%, ${
        theme.green
      } 100%)`,
      backgroundPosition: '0 calc(1em - 0.2em)',
      backgroundSize: '1rem 0.35em',
      backgroundRepeat: 'repeat-x',
      paddingLeft: '0.11em',
      paddingRight: '0.11em',
      marginLeft: '-0.11em',
      marginRight: '-0.11em'
    },

    'article a:not(.gatsby-resp-image-link):hover, .has-line:hover': {
      backgroundImage: `linear-gradient(to top, ${theme.blue} 0%, ${
        theme.blue
      } 100%)`
    },

    hr: {
      border: 0,
      height: '0.3rem',
      width: '5.5rem',
      backgroundColor: theme.red,
      opacity: 0.3,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: rhythm(1.5),
      marginBottom: rhythm(1.5)
    },

    blockquote: {
      borderLeft: `${rhythm(0.2)} solid ${theme.blue}`,
      color: theme.pencil,
      marginLeft: 0,
      paddingLeft: rhythm(1),
      paddingTop: rhythm(0.3),
      paddingBottom: rhythm(0.3)
    },

    ul: {
      listStyle: 'none'
    },

    'li::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      backgroundColor: theme.blue,
      height: '0.33rem',
      width: '0.66rem',
      marginLeft: rhythm(-1),
      marginTop: 'calc(1ex + 0.18rem)'
    },

    // make image overlap container. urgh, much important
    '.gatsby-resp-image-wrapper, .gatsby-resp-iframe-wrapper': {
      marginLeft: rhythm(-0.5) + ' !important',
      marginRight: rhythm(-0.5) + ' !important',
      maxWidth: 'none !important'
    },

    figcaption: {
      color: theme.pencil,
      textAlign: 'center',
      marginTop: rhythm(0.3),
      ...scale(-0.5),
      lineHeight: 'inherit'
    },

    '@media(max-width: 42rem)': {
      html: {
        fontSize: '100%'
      }
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
