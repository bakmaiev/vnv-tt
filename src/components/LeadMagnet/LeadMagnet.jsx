import React from "react";
import SocialList from "../SocialList/SocialList";
import {
  StyledLeadMagnet,
  StyledSubTitle,
  StyledTitle,
  StyledWrapp,
} from "./LeadMagnet.styled";

const LeadMagnet = () => {
  return (
    <StyledLeadMagnet>
      <StyledTitle>Отримайте найкращу пропозицію!</StyledTitle>
      <StyledWrapp>
        <StyledSubTitle>
          Напишіть нам в соціальних мережах або на пошту.
        </StyledSubTitle>
        <SocialList iconSize={20} />
      </StyledWrapp>
    </StyledLeadMagnet>
  );
};

export default LeadMagnet;
