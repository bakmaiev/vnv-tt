import styled from "styled-components";

export const StyledHero = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #000;
  z-index: 1;
`;

export const StyledHeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const StyledVideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
`;

export const StyledGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: linear-gradient(
    39deg,
    rgba(120, 137, 153, 0.106516106442577) 0%,
    rgba(140, 150, 164, 0.10211834733893552) 26%,
    rgba(161, 164, 175, 0.1211834733893552) 50%
  );
`;

export const StyledContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const StyledQuote = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: medium;
  text-align: center;
  margin-bottom: 32px;
`;
