import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../api/axios'
interface MotoboysContextProviderProps {
  children: ReactNode
}
interface MotoboysProps {
  codigo?: string
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
  selectedMotoboy: string
  changeSelectedMotoboy: (motoboy: string) => void
  updateMotoboy: (data: MotoboysProps) => void
}
export const MotoboysContext = createContext({} as MotoboysContextType)
export function MotoboysContextProvider({
  children,
}: MotoboysContextProviderProps) {
  const [motoboys, setMotoboys] = useState<MotoboysProps[]>([])
  const [selectedMotoboy, setSelectedMotoboy] = useState('')
  function changeSelectedMotoboy(motoboy: string) {
    setSelectedMotoboy(motoboy)
  }
  async function getMotoboys() {
    const response = await api.get('/motoboys')
    setMotoboys(response.data)
  }
  useEffect(() => {
    getMotoboys()
  }, [])
  async function registerNewMotoboy(dataMotoboy: MotoboysProps): Promise<void> {
    const response = await api.post('/motoboys', dataMotoboy)
    const { data } = response.config
    setMotoboys([...motoboys, JSON.parse(data)])
    getMotoboys()
  }
  async function updateMotoboy(dataMotoboy: MotoboysProps) {
    const response = await api.put('/motoboys', dataMotoboy)
    const { data } = response.config
    setMotoboys(
      motoboys.map((motoboy) => {
        if (motoboy.codigo === dataMotoboy.codigo) {
          return JSON.parse(data)
        }
        return motoboy
      }),
    )
  }
  return (
    <MotoboysContext.Provider
      value={{
        motoboys,
        registerNewMotoboy,
        selectedMotoboy,
        changeSelectedMotoboy,
        updateMotoboy,
      }}
    >
      {children}
    </MotoboysContext.Provider>
  )
}
