import styled from "styled-components";

export const StyledHero = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  padding: 16px;
  margin-bottom: 16px;
  background: linear-gradient(
    39deg,
    rgba(120, 137, 153, 0.196516106442577) 0%,
    rgba(140, 150, 164, 0.20211834733893552) 26%,
    rgba(161, 164, 175, 0.20211834733893552) 50%,
    rgba(186, 181, 188, 0.20211834733893552) 80%,
    rgba(216, 202, 204, 0.19931722689075626) 91%
  );
`;

export const StyledTitle = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
`;
