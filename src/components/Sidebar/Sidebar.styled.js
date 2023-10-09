import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import styled from "styled-components";

export const StyledSidebar = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  opacity: 0;
  top: -100%;
  &.active {
    opacity: 1;
    top: 0;
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  top: 34px;
  right: 16px;
  background: transparent;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #a1a4af;
  }
`;

export const StyledCloseIcon = styled(FaTimes)`
  color: #fff;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    color: #a1a4af;
    scale: 0.9;
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evanly;
`;

export const StyledLogoWrapp = styled.div`
  width: 180px;
  margin-bottom: 128px;
`;

export const StyledNavItem = styled.li`
  font-family: "Nunito Sans", sans-serif;
  color: #fff;
  font-size: 32px;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    color: #a1a4af;
    scale: 0.9;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

export const StyledNavLink = styled(Link)`
  cursor: pointer;
`;
