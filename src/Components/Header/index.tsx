import { NavLink } from 'react-router-dom'
import { DeviceTabletSpeaker, Pen } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { useContext } from 'react'
import { MotoboysContext } from '../../context/motoboysContext'
export function Header() {
  const { changeSelectedMotoboy } = useContext(MotoboysContext)
  function handleClearForm() {
    changeSelectedMotoboy('')
  }
  return (
    <HeaderContainer>
      <h1>Header</h1>
      <NavLink to="/" title="Registrar">
        <Pen size={32} />
      </NavLink>
      <NavLink to="/table" title="Tabela">
        <DeviceTabletSpeaker onClick={handleClearForm} size={32} />
      </NavLink>
    </HeaderContainer>
  )
}
