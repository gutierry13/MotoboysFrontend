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
      <NavLink to="/" title="Registrar motoboys">
        <Pen size={32} />
      </NavLink>
      <h1>Motoboys</h1>
      <NavLink to="/table" title="Tabela de motoboys cadastrados">
        <DeviceTabletSpeaker onClick={handleClearForm} size={32} />
      </NavLink>
    </HeaderContainer>
  )
}
