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

  return (
    <MotoboysContext.Provider value={{ motoboys }}>
      {children}
    </MotoboysContext.Provider>
  )
}
