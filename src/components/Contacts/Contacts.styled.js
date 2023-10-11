import styled from "styled-components";

export const StyledContacts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background: linear-gradient(
    39deg,
    rgba(120, 137, 153, 0.106516106442577) 0%,
    rgba(140, 150, 164, 0.10211834733893552) 26%,
    rgba(161, 164, 175, 0.1211834733893552) 50%
  );
`;

export const StyledContactsWrapp = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledContactFormWrapp = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const StyledContactsBlock = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const StyledContactsInfo = styled.div`
  max-width: 350px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #a1a4af20;
  margin: 0 0 16px;
`;

export const StyledSubTitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-bottom: 16px;
`;

export const StyledImgWrapp = styled.div`
  max-width: 350px;
  margin: 0 auto 16px;
`;
