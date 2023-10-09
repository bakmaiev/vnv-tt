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
          <StyledNavLink to="root" onClick={toggle}>
            <img
              src={require("../../images/vnv-logo.png")}
              alt="Vnv-solutions"
            />
          </StyledNavLink>
        </StyledLogoWrapp>
        <StyledNavList>
          <StyledNavItem>
            <StyledNavLink to="services" onClick={toggle}>
              Послуги
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink to="projects" onClick={toggle}>
              Проєкти
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink to="faq" onClick={toggle}>
              FAQ
            </StyledNavLink>
          </StyledNavItem>
        </StyledNavList>
      </StyledMenu>
    </StyledSidebar>
  );
};

export default Sidebar;
