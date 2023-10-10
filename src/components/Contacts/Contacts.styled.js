import styled from "styled-components";

export const StyledContacts = styled.section`
  max-width: 1200px;
  height: 600px;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledTitleWrapp = styled.div`
  max-width: 1200px;
  width: -webkit-fill-available;
  margin: 0 auto;
`;

export const StyledInfoWrapp = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  & > :nth-child(2n) {
    background-color: #fff;
    color: #000;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledTitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 16px;
  border-bottom: 1px solid #a1a4af20;

  @media screen and (min-width: 1200px) {
    margin: 16px 0;
  }
`;
