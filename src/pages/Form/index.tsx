import { useContext } from 'react'
import InputTemplate from '../../Components/input'
import { FormContainer, FormContent } from './styles'
import { MotoboysContext } from '../../context/motoboysContext'
import { useForm } from 'react-hook-form'
interface MotoboysProps {
  codigo: number
  nome: string
  email: string
  telefone: string
  dataNascimento: string
  cpf: string
  cnh: string
  disponibilidade: string
}
export function Form() {
  // const { registerNewMotoboy } = useContext(MotoboysContext)
  const { register, handleSubmit, reset } = useForm()
  async function handleCreateNewMotoboy(data: MotoboysProps) {
    console.log(data)
    // registerNewMotoboy(data)
    // reset()
  }
  return (
    <FormContainer>
      <FormContent id="form" onSubmit={handleSubmit(handleCreateNewMotoboy)}>
        <InputTemplate
          id="name"
          type="text"
          content="Nome"
          register={register}
        />
        <InputTemplate
          id="email"
          type="email"
          content="Email"
          register={register}
        />
        <InputTemplate
          id="telefone"
          type="tel"
          content="Telefone"
          register={register}
        />
        <InputTemplate
          id="dtNascimento"
          type="date"
          content="Data de nascimento"
          register={register}
        />
        <InputTemplate id="cpf" type="text" content="CPF" register={register} />
        <InputTemplate id="cnh" type="text" content="CNH" register={register} />
        <div className="checkbox">
          <label htmlFor="disp">Disponibilidade</label>
          <InputTemplate
            id="dia"
            type="checkbox"
            content="Dia"
            value="dia"
            register={register}
          />
          <InputTemplate
            id="tarde"
            type="checkbox"
            content="Tarde"
            value="tarde"
            register={register}
          />
          <InputTemplate
            id="noite"
            type="checkbox"
            content="Noite"
            value="noite"
            register={register}
          />
        </div>
      </FormContent>
      <button type="submit" form="form">
        Cadastrar
      </button>
    </FormContainer>
  )
}
