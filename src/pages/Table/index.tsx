import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { MotoboysContext } from '../../context/motoboysContext'
import { TableContainer, TableContent } from './styles'
import { PencilSimple, TrashSimple } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Table() {
  const { motoboys, changeSelectedMotoboy, deleteMotoboy, searchMotoboy } =
    useContext(MotoboysContext)
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  function handleSelectCustomer(event: MouseEvent) {
    changeSelectedMotoboy(
      (
        (event.target as HTMLButtonElement).parentElement?.parentElement
          ?.children[0] as HTMLElement
      ).innerText,
    )
    navigate('/')
  }
  function handleDeleteMotoboy(event: MouseEvent) {
    if (window.confirm('Gostaria de deletar o motoboy selecionado?')) {
      const selectedMotoboyStringCode = (
        (event.target as HTMLButtonElement).parentElement?.parentElement
          ?.children[0] as HTMLElement
      ).innerText

      deleteMotoboy(selectedMotoboyStringCode)
    }
  }
  function handleSearchMotoboy(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length >= 0) {
      searchMotoboy(event.target.value)
      setSearch(event.target.value)
    } else {
      setSearch('')
    }
  }
  return (
    <TableContainer>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Buscar por motoboys"
        value={search}
        onChange={handleSearchMotoboy}
      />
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
                    <PencilSimple
                      size={20}
                      onClick={handleSelectCustomer}
                      color="#7f7e41"
                    />
                  </td>
                  <td className="button">
                    <TrashSimple
                      size={20}
                      onClick={handleDeleteMotoboy}
                      color="#b04545"
                    />
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
