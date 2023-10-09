import styled from "styled-components";

export const StyledServices = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background: linear-gradient(
    39deg,
    rgba(120, 137, 153, 0.106516106442577) 0%,
    rgba(140, 150, 164, 0.10211834733893552) 26%,
    rgba(161, 164, 175, 0.1211834733893552) 50%
  );
`;

export const StyledServicesMenu = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 32px;
  padding: 0 0 8px 0;

  &::-webkit-scrollbar {
    width: 16px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a1a4af;
  }

  &::-webkit-scrollbar-track {
    background: linear-gradient(
      39deg,
      rgba(120, 137, 153, 0.106516106442577) 0%,
      rgba(140, 150, 164, 0.10211834733893552) 26%,
      rgba(161, 164, 175, 0.1211834733893552) 50%
    );
  }
`;

export const StyledServicesWrapp = styled.div`
  max-width: 1200px;
  width: -webkit-fill-available;
  margin: 0 auto;
`;

export const StyledBtnService = styled.button`
  position: relative;
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  transition: all 0.25s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    box-sizing: border-box;
    transition: all 0.25s ease-in-out;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &::before {
    opacity: 0;
    background: linear-gradient(
      39deg,
      rgba(120, 137, 153, 0.106516106442577) 0%,
      rgba(140, 150, 164, 0.10211834733893552) 26%,
      rgba(161, 164, 175, 0.1211834733893552) 50%
    );
    transform: scale(0.1, 0.1);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }

  @media screen and (min-width: 1200px) {
    width: calc((1200px - 96px) / 4);
  }
`;

export const StyledServicesInfo = styled.div`
  max-width: 100%;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: #000;
  padding: 32px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    height: 300px;
  }
`;

export const StyledServicesText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const StyledServicesAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const StyledTitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 16px;
`;

export const StyledSubTitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const StyledDescr = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: medium;
  text-align: center;
  color: #fff;
`;

export const StyledServicesImg = styled.img`
  max-width: 400px;
  width: 100%;
  height: fit-content;
  object-fit: contain;
`;
