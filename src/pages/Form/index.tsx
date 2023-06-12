import InputTemplate from '../../Components/input'
import { FormContainer, FormContent } from './styles'

export function Form() {
  return (
    <FormContainer>
      <FormContent>
        <InputTemplate id="name" type="text" content="Nome" />
        <InputTemplate id="email" type="email" content="Email" />
        <InputTemplate id="telefone" type="tel" content="Telefone" />
        <InputTemplate
          id="dtNascimento"
          type="date"
          content="Data de nascimento"
        />
        <InputTemplate id="cpf" type="text" content="CPF" />
        <InputTemplate id="cnh" type="text" content="CNH" />
        <div className="checkbox">
          <label htmlFor="disp">Disponibilidade</label>
          <InputTemplate id="dia" type="checkbox" content="Dia" value="dia" />
          <InputTemplate
            id="tarde"
            type="checkbox"
            content="Tarde"
            value="tarde"
          />
          <InputTemplate
            id="noite"
            type="checkbox"
            content="Noite"
            value="noite"
          />
        </div>
      </FormContent>
      <button type="submit">Cadastrar</button>
    </FormContainer>
  )
}
