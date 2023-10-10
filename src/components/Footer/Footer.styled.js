import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const StyledFooterContacts = styled.ul`
  display: flex;
  gap: 16px;
`;

export const StyledIconWrapp = styled.li`
  cursor: pointer;
  border: 1px solid #a1a4af;
  border-radius: 100px;
  padding: 10px;
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
    border: 1px solid #fff;
  }
`;

export const StyledIconLink = styled.a``;

export const StyledCopyrightsWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCopyrights = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
`;
