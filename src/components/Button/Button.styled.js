import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  max-width: 250px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  transition: all 0.5s ease-in-out;
  position: relative;
  overflow: hidden;
  border: 1px solid #a1a4af;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  margin: 0 auto 32px;

  &:hover,
  &:focus {
    box-shadow: 1px 1px 25px 5px #a1a4af20;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, #a1a4af80, transparent);
    transition: all 0.5s ease-in-out;
  }

  &:hover:before,
  &:focus:before {
    left: 100%;
  }
`;
