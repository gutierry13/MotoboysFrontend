import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/router'
import { GlobalStyle } from './styles/globalStyle'

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
