import React, { useState } from "react";
import {
  StyledInfoWrapp,
  StyledProjects,
  StyledProjectsImg,
  StyledProjectsInfo,
  StyledProjectsVideo,
  StyledSubTitle,
  StyledTitle,
  StyledTitleWrapp,
} from "./Projects.styled";

const projectsData = [
  {
    id: 1,
    title: "Marketplace",
    image: require("../../images/projects1.jpg"),
    video: require("../../videos/projects1.mp4"),
  },
  {
    id: 2,
    title: "Web-Service",
    image: require("../../images/projects2.jpg"),
    video: require("../../videos/projects2.mp4"),
  },
  {
    id: 3,
    title: "Delivery Service",
    image: require("../../images/projects3.jpg"),
    video: require("../../videos/projects3.mp4"),
  },
];

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <StyledTitleWrapp>
        <StyledTitle>Наші проєкти</StyledTitle>
      </StyledTitleWrapp>
      <StyledInfoWrapp>
        {projectsData.map((project) => (
          <StyledProjectsInfo key={project.id}>
            <StyledSubTitle>{project.title}</StyledSubTitle>
            <StyledProjectsImg src={project.image} alt={project.title} />
            <StyledProjectsVideo controls poster={project.image}>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </StyledProjectsVideo>
          </StyledProjectsInfo>
        ))}
      </StyledInfoWrapp>
    </StyledProjects>
  );
};

export default Projects;
