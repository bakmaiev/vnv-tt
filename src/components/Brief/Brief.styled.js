import styled from "styled-components";

export const StyledBrief = styled.section`
  box-sizing: border-box;
  max-width: 1200px;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;

export const StyledTitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 16px 0;
  border-bottom: 1px solid #a1a4af20;
`;

export const StyledSubTitle = styled.h3`
  margin-bottom: 16px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  text-align: center;
`;

export const StyledDescr = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: medium;
  padding: 0 16px;
  margin-bottom: 32px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

export const StyledImgWrapp = styled.div`
  width: 200px;
  margin: 0 auto 16px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
