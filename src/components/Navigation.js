import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const List = styled.ul`
  display: flex;
  margin: 0 -10px;
  justify-content: flex-end;
`

const Item = styled.li`
  margin: 0 10px;
  display: flex;
  :hover {
    color: blue;
  }
  color: white;
`

const StyledLink = styled(Link)`
  padding: 10px;
  cursor: pointer;
`

function Navigation({ links }) {
  return (
    <nav>
      <List>
        {links &&
          links.map(({ id, label, path }) => (
            <Item key={id}>
              <StyledLink to={`/${path}`}>{label}</StyledLink>
            </Item>
          ))}
      </List>
    </nav>
  )
}

export default Navigation
