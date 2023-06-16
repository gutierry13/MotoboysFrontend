import { MouseEvent, useContext } from 'react'
import { MotoboysContext } from '../../context/motoboysContext'
import { TableContainer, TableContent } from './styles'
import { PencilSimple, TrashSimple } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Table() {
  const { motoboys, changeSelectedMotoboy } = useContext(MotoboysContext)
  const navigate = useNavigate()
  function handleSelectCustomer(event: MouseEvent) {
    changeSelectedMotoboy(
      (
        (event.target as HTMLButtonElement).parentElement?.parentElement
          ?.children[0] as HTMLElement
      ).innerText,
    )
    navigate('/')
  }
  return (
    <TableContainer>
      <TableContent>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Data de Nascimento</th>
              <th>Cpf</th>
              <th>Cnh</th>
              <th>Disponibilidade</th>
            </tr>
          </thead>
          <tbody>
            {motoboys.map((motoboys) => {
              return (
                <tr key={motoboys.codigo}>
                  <td>{motoboys.codigo}</td>
                  <td>{motoboys.nome}</td>
                  <td>{motoboys.email}</td>
                  <td>{motoboys.telefone}</td>
                  <td>
                    {
                      // Format date
                      new Date(motoboys.dataNascimento).toLocaleDateString(
                        'pt-BR',
                        {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        },
                      )
                    }
                  </td>
                  <td>{motoboys.cpf}</td>
                  <td>{motoboys.cnh}</td>
                  <td>{motoboys.disponibilidade}</td>
                  <td className="button">
                    <PencilSimple size={20} onClick={handleSelectCustomer} />
                  </td>
                  <td className="button">
                    <TrashSimple size={20} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </TableContent>
    </TableContainer>
  )
}
