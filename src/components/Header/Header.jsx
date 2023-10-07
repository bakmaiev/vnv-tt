import React from "react";
import {
  StyledHeader,
  StyledLogoWrapp,
  StyledMobileIcon,
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledNavList,
} from "./Header.styled";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogoWrapp>
          <StyledNavLink to="/">
            <img
              src={require("../../images/vnv-logo.png")}
              alt="Vnv-solutions"
            />
          </StyledNavLink>
        </StyledLogoWrapp>
        <StyledMobileIcon>
          <FaBars size={32} />
        </StyledMobileIcon>
        <StyledNavList>
          <StyledNavItem>
            <StyledNavLink to="services">Послуги</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink to="projects">Проєкти</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink to="faq">FAQ</StyledNavLink>
          </StyledNavItem>
        </StyledNavList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
