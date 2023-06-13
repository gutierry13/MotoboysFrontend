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
}
export default function InputTemplate({
  id,
  type,
  content,
  register,
}: InputTemplateProps) {
  return (
    <div>
      <label htmlFor={id}>{content}</label>
      <input type={type} id={id} {...register(id)} />
    </div>
  )
}
