import React from "react";
import Button from "../Button/Button";
import { StyledHero, StyledTitle } from "./Hero.styled";

const Hero = () => {
  return (
    <StyledHero>
      <StyledTitle>
        Easy, quality, IT - winning solutions for your business
      </StyledTitle>
      <Button />
    </StyledHero>
  );
};

export default Hero;
