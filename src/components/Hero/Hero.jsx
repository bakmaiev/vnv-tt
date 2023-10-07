import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import {
  StyledContent,
  StyledGradientOverlay,
  StyledHero,
  StyledHeroBg,
  StyledQuote,
  StyledTitle,
  StyledVideoBg,
} from "./Hero.styled";
import Video from "../../videos/hero.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <StyledHero>
      <StyledHeroBg>
        <StyledVideoBg ref={videoRef} loop muted>
          <source src={Video} type="video/mp4" />
        </StyledVideoBg>
        <StyledGradientOverlay />
      </StyledHeroBg>
      <StyledContent>
        <StyledTitle>VNV SOLUTIONS</StyledTitle>
        <StyledQuote>
          Easy, quality, IT - winning solutions for your business
        </StyledQuote>
        <Button>Замовити</Button>
      </StyledContent>
    </StyledHero>
  );
};

export default Hero;
