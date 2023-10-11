import styled from "styled-components";

export const StyledFaq = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;

export const StyledTitle = styled.h2`
  max-width: 1200px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 16px 0;
  border-bottom: 1px solid #a1a4af20;
`;

export const StyledFaqList = styled.ul`
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  color: #000;
  background-color: transparent;
  margin-bottom: 32px;
`;

export const StyledFaqWrapp = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

export const StyledFaqCard = styled.li`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 16px;
  border-radius: 32px;
  // border-top-left-radius: 32px;
  // border-bottom-right-radius: 32px;

  @media screen and (min-width: 1024px) {
    width: calc((100% - 32px) / 2);
  }
`;

export const StyledFaqBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  cursor: pointer;

  & svg {
    transition: transform 0.5s ease-in-out;
  }

  & .icon {
    transform: rotate(180deg);
    transition: transform 0.5s ease-in-out;
  }
`;

export const StyledFaqQuestion = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const StyledFaqAnswearWrapp = styled.div`
  height: 0;
  padding: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  background: linear-gradient(
    39deg,
    rgba(120, 137, 153, 0.106516106442577) 0%,
    rgba(140, 150, 164, 0.10211834733893552) 26%,
    rgba(161, 164, 175, 0.1211834733893552) 50%
  );

  &.active {
    height: auto;
    padding: 16px;
    margin-top: 16px;
  }
`;

export const StyledFaqAnswear = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  color: #fff;
`;

export const StyledIconWrapp = styled.div`
  margin-left: 16px;
`;
