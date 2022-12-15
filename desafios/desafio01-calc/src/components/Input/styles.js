import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #aaffaa;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: "Roboto";

  input {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 75px;
    background-color: #aaffaa;
    border: 0;
    padding: 0 20px;
    font-size: 24px;
    font-family: "Roboto";
  }
  input:focus-visible {
    border: 0;
  }
`;
