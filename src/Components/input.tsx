import {
  /* RegisterOptions, */ UseFormRegister,
  FieldValues,
} from 'react-hook-form'

interface InputTemplateProps {
  id: string
  type: string
  content: string
  value?: string
  // register: (rules?: RegisterOptions) => {}
  register: UseFormRegister<FieldValues>
  errorVariant?: string
  errorMessage?: string
}
export default function InputTemplate({
  id,
  type,
  content,
  register,
  errorMessage,
  errorVariant,
}: InputTemplateProps) {
  return (
    <div>
      <label htmlFor={id}>{content}</label>
      <input
        type={type}
        id={id}
        {...register(id)}
        style={errorVariant ? { borderColor: 'red' } : { borderColor: 'white' }}
      />
      <span>{errorMessage}</span>
    </div>
  )
}
