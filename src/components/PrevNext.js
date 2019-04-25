import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'

function PrevNext({ prevTo, nextTo, prevContent, nextContent }) {
  return (
    <Row>
      {nextTo && (
        <NextContainer>
          <RedLink to={nextTo} className="has-line">
            {nextContent()}
          </RedLink>
        </NextContainer>
      )}
      {prevTo && (
        <PrevContainer>
          <RedLink to={prevTo} className="has-line">
            {prevContent()}
          </RedLink>
        </PrevContainer>
      )}
    </Row>
  )
}

PrevNext.propTypes = {
  prevContent: PropTypes.func.isRequired,
  nextContent: PropTypes.func.isRequired,
  prevTo: PropTypes.string,
  nextTo: PropTypes.string
}

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 ${rhythm(-0.5)};
`

const LinkContainer = styled.div`
  min-width: 200px;
  flex: 1 1 0%;
  padding: ${rhythm(0.5)};
`

const RedLink = styled(Link)`
  background-image: linear-gradient(
    to top,
    ${props => props.theme.red} 0%,
    ${props => props.theme.red} 100%
  );
`

const NextContainer = styled(LinkContainer)`
  text-align: left;
`

const PrevContainer = styled(LinkContainer)`
  text-align: right;
`

export default PrevNext
