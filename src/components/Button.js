import styled from 'styled-components'
import { Icon } from './Icon'

const StyledButton = styled.button`
  background-color: black;
  color: white;
  font-size: 18px;
  line-height: 1.56;
  padding: 8px 32px;
  border-radius: 4px;
  :hover {
    background-color: white;
    color: black;
    transition: all 0.5s;
  }
`

export default function Button({ type, label, handleClick }) {
  return (
    <StyledButton type={type ?? 'button'} onClick={handleClick}>
      {label}
    </StyledButton>
  )
}

export function IconButton(iconId) {
  return (
    <StyledButton>
      <Icon iconId={iconId} />
    </StyledButton>
  )
}
