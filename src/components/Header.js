import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'
import Logo from './Logo'

const StyledHeader = styled.header`
  background-color: black;
  justify-content:space-between;
  align-items: center;
`

function Header({ links }) {
  return (
    <StyledHeader>
      <Logo />
      <Navigation links={links} />
    </StyledHeader>
  )
}

export default Header
