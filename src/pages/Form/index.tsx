import { useContext, useEffect } from 'react'
import InputTemplate from '../../Components/input'
import { FormContainer, FormContent } from './styles'
import { MotoboysContext } from '../../context/motoboysContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

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
  const {
    registerNewMotoboy,
    selectedMotoboy,
    changeSelectedMotoboy,
    motoboys,
    updateMotoboy,
  } = useContext(MotoboysContext)
  const navigate = useNavigate()
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
      }  ${data.noite ? 'Noite' : ''}`,
    }
    await registerNewMotoboy(newMotoboy)
    reset()
  }
  function replaceMotoboyForEdit() {
    motoboys.forEach((motoboy) => {
      if (String(motoboy.codigo) === String(selectedMotoboy)) {
        reset({
          ...motoboy,
          dia: motoboy.disponibilidade.includes('Dia'),
          tarde: motoboy.disponibilidade.includes('Tarde'),
          noite: motoboy.disponibilidade.includes('Noite'),
        })
      }
      // updateMotoboy(returnedMotoboyUsedForEdit)
    })
    changeSelectedMotoboy('')
  }
  async function handleUpdateMotoboy(data: MotoboysProps) {
    const newMotoboy = {
      codigo: selectedMotoboy,
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      dataNascimento: data.dataNascimento,
      cpf: data.cpf,
      cnh: data.cnh,
      disponibilidade: `${data.dia ? 'Dia' : ''} / ${
        data.tarde ? 'Tarde' : ''
      }  ${data.noite ? 'Noite' : ''}`,
    }
    await updateMotoboy(newMotoboy)
    navigate('/table')
    reset()
  }
  useEffect(() => {
    replaceMotoboyForEdit()
  }, [selectedMotoboy])
  return (
    <FormContainer>
      <FormContent
        id="form"
        onSubmit={
          selectedMotoboy
            ? handleSubmit(handleUpdateMotoboy as any)
            : handleSubmit(handleCreateNewMotoboy as any)
        }
      >
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
        {selectedMotoboy ? 'Editar' : 'Cadastrar'}
      </button>
    </FormContainer>
  )
}
