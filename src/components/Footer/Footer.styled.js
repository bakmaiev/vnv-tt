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
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledIconWrapp = styled.li`
  position: relative;
  overflow: hidden;

  cursor: pointer;
  border: 1px solid #a1a4af;
  border-radius: 100px;
  padding: 10px;
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 1px 1px 25px 5px #a1a4af20;
    transform: scale(1.1);
    border: 1px solid #fff;
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
