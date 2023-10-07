import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const StyledHeader = styled.header`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-top: -100px;
  height: 100px;
  background-color: #000;
  border-bottom: 1px solid #a1a4af20;
`;

export const StyledNav = styled.nav`
  box-sizing: border-box;
  max-width: 1200px;
  padding: 0 16px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavList = styled.ul`
  display: flex;
  gap: 32px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const StyledNavItem = styled.li`
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    color: #a1a4af;
  }
`;

export const StyledNavLink = styled(NavLink)``;

export const StyledIcon = styled(FaBars)`
  color: #fff;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    color: #a1a4af;
    scale: 0.9;
  }
`;

export const StyledMobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;

    cursor: pointer;
  }
`;

export const StyledLogoWrapp = styled.div`
  width: 100px;
`;
