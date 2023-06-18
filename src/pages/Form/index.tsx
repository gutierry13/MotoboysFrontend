import { useContext, useEffect } from 'react'
import InputTemplate from '../../Components/input'
import { FormContainer, FormContent } from './styles'
import { MotoboysContext } from '../../context/motoboysContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
interface MotoboysProps {
  nome: string
  email: string
  telefone: string
  dataNascimento: string
  cpf: string
  cnh: string
  dia?: boolean
  tarde?: boolean
  noite?: boolean
  disponibilidade: string
}
const formSchema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
  telefone: z.string().regex(/(\(\d{2}\)|\d{2}\s?)?(\d{5,9})-?(\d{4})?/g),
  dataNascimento: z.string(),
  cpf: z.string().regex(/[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{2}/g),
  cnh: z.string(),
  dia: z.boolean().optional(),
  tarde: z.boolean().optional(),
  noite: z.boolean().optional(),
  disponibilidade: z.string().optional(),
})
type MotoboysPropsSchema = z.infer<typeof formSchema>
export function Form() {
  const { registerNewMotoboy, selectedMotoboy, motoboys, updateMotoboy } =
    useContext(MotoboysContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<MotoboysPropsSchema>({
    resolver: zodResolver(formSchema),
  })
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
    navigate('/table')
  }
  console.log(isValid)
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
    })
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
          errorVariant={errors.nome ? 'error' : ''}
          errorMessage={errors.nome ? 'Nome obrigatório!' : ''}
        />
        <InputTemplate
          id="email"
          type="email"
          content="Email"
          register={register}
          errorVariant={errors.nome ? 'error' : ''}
          errorMessage={errors.nome ? 'Email obrigatório!' : ''}
        />
        <InputTemplate
          id="telefone"
          type="tel"
          content="Telefone"
          register={register}
          errorVariant={errors.nome ? 'error' : ''}
          errorMessage={errors.nome ? 'Telefone obrigatório!' : ''}
        />
        <InputTemplate
          id="dataNascimento"
          type="date"
          content="Data de nascimento"
          register={register}
          errorVariant={errors.nome ? 'error' : ''}
          errorMessage={errors.nome ? 'Data de nascimento obrigatória!' : ''}
        />
        <InputTemplate
          id="cpf"
          type="text"
          content="CPF"
          register={register}
          errorVariant={errors.nome ? 'error' : ''}
          errorMessage={errors.nome ? 'CPF obrigatório!' : ''}
        />

        <InputTemplate
          id="cnh"
          type="text"
          content="CNH"
          register={register}
          errorVariant={errors.nome ? 'error' : ''}
          errorMessage={errors.nome ? 'CNH obrigatório!' : ''}
        />
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
