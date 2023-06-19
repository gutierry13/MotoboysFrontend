import { UseFormRegister } from 'react-hook-form'
interface InputTemplateProps {
  id: string
  type: string
  content: string
  value?: string
  register: UseFormRegister<any>
  errorVariant?: string
  errorMessage?: string
  disabled?: boolean
}

export default function InputTemplate({
  id,
  type,
  content,
  register,
  errorMessage,
  errorVariant,
  ...props
}: InputTemplateProps) {
  return (
    <div>
      <label htmlFor={id}>{content}</label>
      <input
        type={type}
        id={id}
        {...register(id)}
        style={errorVariant ? { borderColor: 'red' } : undefined}
        disabled={props.disabled}
      />
      <span>{errorMessage}</span>
    </div>
  )
}
