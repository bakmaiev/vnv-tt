import styled from "styled-components";

export const StyledAdvantages = styled.section`
  max-width: 1200px;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledTitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 16px 0;
  border-bottom: 1px solid #a1a4af20;
`;

export const StyledDescr = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: medium;
  text-align: center;
`;

export const StyledAdvantagesWrapp = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  color: #000;
  background-color: transparent;
  margin-bottom: 32px;
`;

export const StyledAdvantagesCard = styled.li`
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(
    39deg,
    rgba(120, 137, 153, 0.106516106442577) 0%,
    rgba(140, 150, 164, 0.10211834733893552) 26%,
    rgba(161, 164, 175, 0.1211834733893552) 50%
  );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #a1a4af;
  border-radius: 6px;
  max-height: 340px;
  padding: 16px;
  box-shadow: 1px 1px 25px 5px #a1a4af20;
  transition: all 0.5s ease-in-out;
  cursor: default;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: calc((100% - 64px) / 3);
    height: 250px;
  }
`;
