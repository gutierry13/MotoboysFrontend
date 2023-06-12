import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/router'
import { GlobalStyle } from './styles/globalStyle'
import { MotoboysContextProvider } from './context/motoboysContext'

function App() {
  return (
    <BrowserRouter>
      <MotoboysContextProvider>
        <Router />
      </MotoboysContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
