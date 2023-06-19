import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
  border-bottom: 3px solid #551a8b;
  a {
    color: #fff;
    border-bottom: 3px solid transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      border-bottom: 3px solid #551a8b;
      color: #551a8b;
    }
    &.active {
      color: #551a8b;
    }
  }
`
