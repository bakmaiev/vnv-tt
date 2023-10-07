import styled from "styled-components";

export const StyledHero = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 16px;
  background-image: linear-gradient(
    39deg,
    rgba(120, 137, 153, 0.106516106442577) 0%,
    rgba(140, 150, 164, 0.10211834733893552) 26%,
    rgba(161, 164, 175, 0.10211834733893552) 50%,
    rgba(186, 181, 188, 0.10211834733893552) 80%,
    rgba(216, 202, 204, 0.10931722689075626) 91%
  );
  background: url{require(../../)};
`;

export const StyledTitle = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
`;
