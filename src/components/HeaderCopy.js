import React from 'react'
import Link from 'gatsby-link'

import Text from './Text'

const HeaderInfo = props => {
  return (
    <Text css={{ textAlign: 'center' }}>
      <p>
        Hi, ich bin <Link to="/iel">Timo Mämecke</Link>, Software-Entwickler aus
        Köln.
      </p>
    </Text>
  )
}

export default HeaderInfo
