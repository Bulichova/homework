import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  margin: 0 auto;
`
const Link = styled.a`
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
