import React from "react";
import {
  StyledHeader,
  StyledIcon,
  StyledLogoWrapp,
  StyledMobileIcon,
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledNavList,
} from "./Header.styled";

const Header = ({ toggle }) => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogoWrapp>
          <StyledNavLink
            to="root"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img
              src={require("../../images/vnv-logo.png")}
              alt="Vnv-solutions"
            />
          </StyledNavLink>
        </StyledLogoWrapp>
        <StyledMobileIcon onClick={toggle}>
          <StyledIcon size={32} />
        </StyledMobileIcon>
        <StyledNavList>
          <StyledNavItem>
            <StyledNavLink
              to="services"
              smooth={true}
              offset={-100}
              duration={500}
            >
              Послуги
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink
              to="projects"
              smooth={true}
              offset={-100}
              duration={500}
            >
              Проєкти
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink to="faq" smooth={true} offset={50} duration={500}>
              FAQ
            </StyledNavLink>
          </StyledNavItem>
        </StyledNavList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
