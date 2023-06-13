import { RegisterOptions } from 'react-hook-form'

interface InputTemplateProps {
  id: string
  type: string
  content: string
  register: (rules?: RegisterOptions) => void
}
export default function InputTemplate({
  id,
  type,
  content,
  register,
  ...props
}: InputTemplateProps) {
  console.log(props)
  return (
    <div>
      <label htmlFor={id}>{content}</label>
      <input type={type} id={id} {...register(id)} />
    </div>
  )
}
