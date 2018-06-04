import g from 'glamorous'
import { colors } from '../theme'

export default g.div({
  color: colors.ink,
  lineHeight: 2.167,

  '.wf-active &': {
    lineHeight: 1.667
  },

  '& p': {
    marginTop: 20,
    marginBottom: 20
  },

  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    backgroundImage: `linear-gradient(
      to top,
      ${colors.marker} 0%,
      ${colors.marker} 100%)`,
    backgroundPosition: '0 calc(1em - 3px)',
    backgroundSize: '10px 6px',
    backgroundRepeat: 'repeat-x',
    paddingLeft: 2,
    paddingRight: 2,
    marginLeft: -2,
    marginRight: -2,

    '&:hover': {
      backgroundImage: `linear-gradient(
        to top,
        ${colors.markerSecondary} 0%,
        ${colors.markerSecondary} 100%)`
    }
  }
})
