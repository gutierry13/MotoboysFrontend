import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body{
  background: #312e38;
  color: #FFF;
  -webkit-font-smoothing: antialiased;
}
body,text-area,input,button{
  font-family: 'Roboto' , sans-serif;
  font-size: 16px;
  font-weight: 400;
}
`
