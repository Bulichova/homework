import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: black;
`
const Text = styled.p`
  color: white;
  font-size: 20px;
`
const Link = styled.a`
  :hover {
    color: blue;
  }
  color: white;
  font-size: 64px;
  display: block;
`

function Footer() {
  return (
    <StyledFooter>
      <Link href="mail:bulichova@gmail.com">bulichova@gmail.com</Link>
      <Link href="tel:+380672306575">+380672306575</Link>

      <Text>Studio LEANSPIN,GALCZYNSKIEGO 33</Text>
      <Text>52-214 Wroclaw,Polska</Text>
    </StyledFooter>
  )
}
export default Footer
