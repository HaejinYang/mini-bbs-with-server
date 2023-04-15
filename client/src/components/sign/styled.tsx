import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50%;
  border-radius: 10px;
  color: black;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 2px 5px;
  
  & > button {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    margin-right: 5px;
    align-self: end;
    border-radius: 50px;
    border: 0px;
    width: 30px;
    height: 30px;
    background-color: white;
    cursor: pointer;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 3rem;
  border: 1px solid white;
  border-radius: 10px;
  
  label {
    color: gray;
    text-align: left;
    padding: 0.5rem 0;
  }
  
  input {
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 2px;
  }
  
  input[type="submit"], button {
    margin-top: 0.5rem;
    background-color: #e60023;
    cursor: pointer;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    box-shadow: none;
  }
  
  button {
    background-color: rgb(24, 119, 242);
  }
  
  input[type="submit"]:hover, button:hover {
    filter: brightness(0.9);
  }
`;

const CursorSpan = styled.span`
  text-align: left;
  color: black;
  padding: 0.5rem 0;
  cursor: pointer;
`;

const CenteredSpan = styled.span`
  color: gray;
  text-align: center;
`;

const FocusSpan = styled.span`
  text-align: center;
  font-weight: bold;
`

export {Container, FormContainer, FocusSpan, CenteredSpan, CursorSpan};