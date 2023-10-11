import React from "react";
import {
  StyledCloseIcon,
  StyledIcon,
  StyledLogoWrapp,
  StyledMenu,
  StyledNavItem,
  StyledNavLink,
  StyledNavList,
  StyledSidebar,
} from "./Sidebar.styled";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <StyledSidebar className={isOpen ? "active" : ""}>
      <StyledIcon onClick={toggle}>
        <StyledCloseIcon size={32} />
      </StyledIcon>
      <StyledMenu>
        <StyledLogoWrapp>
          <StyledNavLink
            to="root"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={toggle}
          >
            <img
              src={require("../../images/vnv-logo.png")}
              alt="Vnv-solutions"
            />
          </StyledNavLink>
        </StyledLogoWrapp>
        <StyledNavList>
          <StyledNavItem>
            <StyledNavLink
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={toggle}
            >
              Послуги
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={toggle}
            >
              Проєкти
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink
              to="faq"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={toggle}
            >
              FAQ
            </StyledNavLink>
          </StyledNavItem>
        </StyledNavList>
      </StyledMenu>
    </StyledSidebar>
  );
};

export default Sidebar;
