import { styled } from 'styled-components'

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  /* width: 100%;
  max-width: 1080px; */
  height: 100%;
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  button {
    width: 18rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    outline: none;
    font-weight: bold;
    margin-top: 3rem;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: #551a8b;
    color: #fff;
    transition: background 0.2s ease-in-out;
    &:hover {
      background-color: #391b54;
    }
  }
`
export const FormContent = styled.form`
  /* background-color: #ccc; */
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;
    height: 3rem;
    margin-bottom: 1.2rem;
    width: 45%;
    label {
      text-align: left;
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.2rem;
      position: relative;
      &:not(.checkbox div label)::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: -0.5rem;
        width: 2rem;
        height: 2px;
        background-color: #551a8b;
      }
    }
    input[type='text'],
    input[type='tel'],
    input[type='date'],
    input[type='email'] {
      background-color: #202024;
      color: #fff;
      width: 100%;
      height: 2rem;
      padding: 0.5rem;
      line-height: 1.25;
      font-size: 1rem;
      border: 0;
      border-bottom: 1px solid #d7d7d7;
      border-radius: 3px;
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
  .checkbox {
    div {
      margin-bottom: 0;
      gap: 1rem;
      justify-content: flex-end;
      input {
        width: 1rem;
        border-radius: 4px;
        height: 1rem;
      }
      label {
        width: auto;
      }
    }
  }
`
