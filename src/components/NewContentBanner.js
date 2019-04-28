import React from 'react'
import styled from '@emotion/styled'

function NewContentBanner() {
  function handleClick() {
    window.location.reload()
  }

  return (
    <Banner onClick={handleClick}>
      <InnerText>
        Neuer Inhalt verfügbar.{' '}
        <span className="has-line">Jetzt Aktualisieren</span>
      </InnerText>
    </Banner>
  )
}

const Banner = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;

  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 0.5rem 1rem;
  background-color: white;
  box-shadow: 0 0.11rem 0.33rem rgba(0, 0, 0, 0.3);
  border-radius: 0.167rem;
  border-top: 0.167rem solid ${props => props.theme.red};

  @media (min-width: 28rem) {
    width: auto;
    position: fixed;
    right: 1rem;
    left: auto;
    bottom: 1rem;
  }
`

const InnerText = styled.p`
  margin: 0;
`

export default NewContentBanner
