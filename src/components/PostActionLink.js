import g from 'glamorous'
import Link from 'gatsby-link'
import { colors } from '../theme'

export default g(Link)({
  backgroundImage: `linear-gradient(to top, ${colors.markerHighlight} 0%, ${
    colors.markerHighlight
  } 100%) !important`,

  '&:hover': {
    backgroundImage: `linear-gradient(to top, ${colors.markerSecondary} 0%, ${
      colors.markerSecondary
    } 100%) !important`
  }
})
