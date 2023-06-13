import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../api/axios'
interface MotoboysContextProviderProps {
  children: ReactNode
}
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
interface MotoboysContextType {
  motoboys: MotoboysProps[]
  registerNewMotoboy: (data: MotoboysProps) => void
}
export const MotoboysContext = createContext({} as MotoboysContextType)
export function MotoboysContextProvider({
  children,
}: MotoboysContextProviderProps) {
  const [motoboys, setMotoboys] = useState<MotoboysProps[]>([])
  async function getMotoboys() {
    const response = await api.get('/motoboys')
    setMotoboys(response.data)
  }
  useEffect(() => {
    getMotoboys()
  }, [])
  async function registerNewMotoboy(data: MotoboysProps): Promise<void> {
    const response = await api.post('/motoboys', data)
    setMotoboys([...motoboys, response.data])
  }
  return (
    <MotoboysContext.Provider value={{ motoboys, registerNewMotoboy }}>
      {children}
    </MotoboysContext.Provider>
  )
}
