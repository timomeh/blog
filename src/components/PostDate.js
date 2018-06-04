import g from 'glamorous'
import { colors } from '../theme'

export default g.time({
  display: 'block',
  textAlign: 'center',
  marginBottom: 10,
  color: colors.shy,
  fontSize: '0.778em',
  fontWeight: 700,

  '.wf-active &': {
    fontWeight: 500
  }
})
