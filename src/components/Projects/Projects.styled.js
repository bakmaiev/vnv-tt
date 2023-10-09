import styled from "styled-components";

export const StyledProjects = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  //   padding: 16px;
`;

export const StyledTitleWrapp = styled.div`
  max-width: 1200px;
  width: -webkit-fill-available;
  margin: 0 auto;
`;

export const StyledInfoWrapp = styled.div`
  & > :nth-child(2n) {
    background-color: #fff;
    color: #000;
  }
`;

export const StyledTitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 16px;
  @media screen and (min-width: 1200px) {
    margin: 16px 0;
  }
`;

export const StyledProjectsInfo = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  background: #000;
  padding: 16px;
`;

export const StyledSubTitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  font-size: 20px;
`;

export const StyledProjectsImg = styled.img`
  width: 100%;
  max-width: 1200px;
  opacity: 0.6;
  height: 100px;
  object-fit: cover;
`;

export const StyledProjectsVideo = styled.video`
  width: 100%;
  max-width: 1200px;
  height: 300px;
  object-fit: cover;
  & > img {
    opacity: 0.5;
  }
`;
