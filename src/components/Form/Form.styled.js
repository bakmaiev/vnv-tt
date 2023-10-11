import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #a1a4af;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  button {
    margin: 0 auto;
  }

  div {
    margin-bottom: 16px;
    label {
      font-family: "Nunito Sans", sans-serif;
      font-size: 16px;
      font-weight: bold;
      display: block;
      margin-bottom: 6px;
    }
    input,
    select,
    textarea {
      width: -webkit-fill-available;
      padding: 8px;
      font-family: "Nunito Sans", sans-serif;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 6px;
      outline: none;
    }

    select {
      option {
        font-family: "Nunito Sans", sans-serif;
        font-size: 16px;
        font-weight: bold;
        display: block;
        margin-bottom: 6px;
      }
    }

    textarea {
      resize: none;
      height: 150px;
    }
  }
`;

export const StyledSubTitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-bottom: 16px;
`;
