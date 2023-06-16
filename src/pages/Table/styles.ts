import { styled } from 'styled-components'

export const TableContainer = styled.section`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
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
      /* margin: 0; */
      /* padding: 0; */
    }
  }
`
