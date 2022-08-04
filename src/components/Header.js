import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'
import Logo from './Logo'
import { Container } from './styledComponents'

const StyledHeader = styled.header`
  background-color: black;
  flex: 0 1 auto;
`
const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header({ links }) {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Navigation links={links} />
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
