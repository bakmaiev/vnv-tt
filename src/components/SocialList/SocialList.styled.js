import styled from "styled-components";

export const StyledSocialList = styled.ul`
  width: 100%;
  display: flex;
  gap: 6px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledDescr = styled.li`
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

export const StyledDescrLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
