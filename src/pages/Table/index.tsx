import { useContext } from 'react'
import { MotoboysContext } from '../../context/motoboysContext'
import { TableContainer, TableContent } from './styles'

export function Table() {
  const { motoboys } = useContext(MotoboysContext)
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
                  <td>{motoboys.dataNascimento}</td>
                  <td>{motoboys.cpf}</td>
                  <td>{motoboys.cnh}</td>
                  <td>{motoboys.disponibilidade}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </TableContent>
    </TableContainer>
  )
}
