import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../styles/DefaultLayout'
import { Form } from '../pages/Form'
import { Table } from '../pages/Table'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Route>
    </Routes>
  )
}
