import { NavLink } from 'react-router-dom'
import { DeviceTabletSpeaker, Pen } from 'phosphor-react'
import { HeaderContainer } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <h1>Header</h1>
      <NavLink to="/" title="Registrar">
        <Pen size={32} />
      </NavLink>
      <NavLink to="/table" title="Tabela">
        <DeviceTabletSpeaker size={32} />
      </NavLink>
    </HeaderContainer>
  )
}
