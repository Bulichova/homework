import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  margin: 0 -10px;
  justify-content: flex-end;
`

const Item = styled.li`
  margin: 0 10px;
  display: flex;
`
const Link = styled.a`
  :hover {
    color: blue;
  }
  color: white;
`

function Navigation({ links }) {
  return (
    <nav>
      <List>
        {links &&
          links.map(({ id, label }) => (
            <Item key={id}>
              <Link href="/">{label}</Link>
            </Item>
          ))}
      </List>
    </nav>
  )
}

export default Navigation
