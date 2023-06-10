interface InputTemplateProps {
  id: string
  type: string
  content: string
  value?: string
}
export default function InputTemplate({
  id,
  type,
  content,
  ...props
}: InputTemplateProps) {
  return (
    <div>
      <label htmlFor={id}>{content}</label>
      <input type={type} name={id} {...props} />
    </div>
  )
}
