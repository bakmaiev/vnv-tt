import React from "react";
import { StyledHeader, StyledImgWrapp } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledImgWrapp>
        <img src={require("../../images/vnv-logo.png")} alt="Vnv-solutions" />
      </StyledImgWrapp>
      <nav>
        <ul>
          <li>
            <a href="/">Послуги</a>
          </li>
          <li>
            <a href="/">Проєкти</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
