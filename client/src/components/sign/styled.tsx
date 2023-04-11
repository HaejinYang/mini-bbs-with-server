import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: white;
  background-image: linear-gradient(79deg, #7439db, #c66fbc 48%, #f7944d);
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;
  border: 1px solid white;
  border-radius: 10px;
  
  label {
    text-align: left;
    padding: 0.5rem 0;
  }
  
  input {
    padding: 1rem;
    border: none;
    border-radius: 10px;
  }
  
  input[type="submit"], button {
    margin-top: 0.5rem;
    background-color: white;
    cursor: pointer;
    padding: 1rem;
    border: none;
    border-radius: 10px;
    color: #7439db;
  }
  
  button {
    background: none;
    color: white;
    text-decoration: underline;
  }
`

export {Container, FormContainer};