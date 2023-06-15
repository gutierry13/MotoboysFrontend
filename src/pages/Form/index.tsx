import { useContext } from 'react'
import InputTemplate from '../../Components/input'
import { FormContainer, FormContent } from './styles'
import { MotoboysContext } from '../../context/motoboysContext'
import { useForm } from 'react-hook-form'
interface MotoboysProps {
  nome: string
  email: string
  telefone: string
  dataNascimento: string
  cpf: string
  cnh: string
  dia: boolean
  tarde: boolean
  noite: boolean
  disponibilidade: string
}
export function Form() {
  const { registerNewMotoboy } = useContext(MotoboysContext)
  const { register, handleSubmit, reset } = useForm()
  async function handleCreateNewMotoboy(data: MotoboysProps) {
    const newMotoboy = {
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      dataNascimento: data.dataNascimento,
      cpf: data.cpf,
      cnh: data.cnh,
      disponibilidade: `${data.dia ? 'Dia' : ''} / ${
        data.tarde ? 'Tarde' : ''
      } / ${data.noite ? 'Noite' : ''}`,
    }
    await registerNewMotoboy(newMotoboy)
    reset()
  }
  return (
    <FormContainer>
      <FormContent id="form" onSubmit={handleSubmit(handleCreateNewMotoboy)}>
        <InputTemplate
          id="nome"
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
          id="dataNascimento"
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
