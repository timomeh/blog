import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

function Logo() {
  return (
    <LogoContainer>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 323"
        aria-labelledby="site-logo-title"
        css={svgCss}
      >
        <title id="site-logo-title">timomeh</title>
        <path d="M197.5 115.5c70-23 166-48 207-59s101-24 111-25S531 29 531 29s4-1 6.5-4.5c2.1-2.9 1-13-3-17s-11-8-17-8-122 29-164 39-184 55-215 66-107 45-112 47-11 5-18 6-9 6-8 10 4 13 7 16 5 7 10 7 79-37 99-45 81-30 81-30zM202 192c0 5 1 47 2 58s2 28 0 35-3 13-2 17 5 12 9 15 7 6 11 6 9-5 10-9 2-14 2-21-2-30-3-39-2-31-2-43v-30c0-6 0-10-4-14s-10-8-14-8-7 3-8 7 0 11 0 14-1 7-1 12zM267 253c2 17 5 32 5 39s5 18 11 21 8 3 12 2 11-11 9-20-6-16-7-26-1-24 0-28 1-9-4-14-13-11-19-10-9 10-9 14 2 22 2 22zM277 194c7.5 5.7 17 1 20-8s-6-17-10-19-15-5-19-2-4 14 0 20 5 6 9 9zM326 200c0 13-1 22 0 29s2 24 2 34-1 17-1 20 2 14 5 18 11 11 14 12 13 3 17-2 4-14 2-19-6-17-7-24-2-17-2-22-2-13-2-17 0-8 1-8 8 6 11 13 12 17 16 19 12 8 19 6 10-8 12-13 7-15 8-17 2-6 3-8 2-4 3-4 3 2 3 8 1 17 2 22 2 12 2 16 .1 8.2 1 11c1 3 2 7 3 9s4 9 6 11 8 8 16 7 10-3 12-8 0-11-2-16-6-13-7-18-3-21-4-26-5-33-5-39 0-19-1-23-6-14-13-17-20-2-22 1-1 5-1 7-7 19-13 29-13 23-15 24-6 1-8-2-9-20-10-25-2-13-4-16-11-9-16-11-10-2-12-1-5 3-6 5-4.4 5.4-6 7c-1 1-2 4-2 7s1 6 1 8v13zM597 212c-2-8-11-28-20-38s-25-19-35-21-20-1-24 1-8 8-10 9-7 1-9 1-7 1-9 3-9 14-11 22c-3 12-3 22-3 26 0 6 3 25 6 32 2.6 6.2 10 22 18 29 7.5 6.6 18 14 37 14s33-7 38-11 22-17 24-33c1.9-14.9 0-26-2-34zm-26 19c-2 10-9 19-16 24s-26 9-34 6-10-11-13-19-4-26.2-2-34c1-4 4-9 6-11s4-3 6-2 7 2 9 1 3-5 3-7 0-4 2-6 8-4 14-3 14 7 20 17 7 24 5 34z" />
      </svg>
      <LogoUnderline />
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  width: 9.95rem;
  height: 5.11rem;
  position: relative;
  color: ${props => props.theme.green};

  &:hover {
    color: ${props => props.theme.blue};
  }
`

const LogoUnderline = styled.div`
  width: 8.33rem;
  height: 1.11rem;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: currentColor;
`

const svgCss = theme => css`
  display: block;
  fill: ${theme.ink};
  width: 8.722rem;
  height: 4.722rem;
`

export default Logo
