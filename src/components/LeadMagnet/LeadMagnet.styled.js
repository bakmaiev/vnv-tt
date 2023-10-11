import styled from "styled-components";

export const StyledLeadMagnet = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    padding: 16px 0;
  }
`;

export const StyledWrapp = styled.div`
  display: flex;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

export const StyledTitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #a1a4af20;
  margin: 0 0 16px;
`;

export const StyledSubTitle = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  padding: 0 8px 0 0;
`;
