import styled from "styled-components";

export const DivLogin = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;

  h1 {
    font-size: 2.8em;
    font-family: neo;
  }

  .flex {
    width: 100%;
  }

  form {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }

  label {
    display: block;
    text-transform: capitalize;
    font-size: 1.5rem;
    margin-top: 20px;
  }

  input,
  button {
    outline: none;
    margin: 0.5rem 0;
  }
  input::placeholder {
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    height: 30px;
    background-color: transparent;
    border: none;
    padding: 0 0.5rem;
    font-size: 1.5rem;
  }

  .title {
    text-align: center;
  }

  .input {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #010937;
  }

  h1 {
    color: #1c31a5;
  }

  .forgotPass {
    text-align: right;
    width: 100%;
    margin: 5px 0;
    font-size: 1.1rem;
  }
`;
