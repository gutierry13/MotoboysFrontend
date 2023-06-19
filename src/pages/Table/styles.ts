import { styled } from 'styled-components'

export const TableContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3.6rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  input {
    width: 28rem;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #d7d7d7;
    margin: 0 auto;
    padding: 0.4rem 0.8rem;
    color: white;
  }
`
export const TableContent = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    th {
      text-align: left;
      padding: 1.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
    }
    td {
      text-align: left;
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      border-top: 1px solid #551a8b;
    }
    .button {
      svg {
        cursor: pointer;
      }
    }
  }
`
