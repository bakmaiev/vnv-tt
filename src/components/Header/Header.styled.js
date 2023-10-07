import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 10;
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

export const StyledNavItem = styled.li``;

export const StyledNavLink = styled(Link)``;

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
