import React from 'react'
import logo from '../images/logo.png'
import Navigation from './Navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
background-color: black;
/* position: absolute; */
`

function Header({links}) {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <Navigation links={links} />
    </StyledHeader>
  )
}

export default Header