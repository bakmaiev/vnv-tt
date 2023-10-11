import React from "react";
import {
  StyledDescr,
  StyledDescrLink,
  StyledSocialList,
} from "./SocialList.styled";
import {
  FaMailBulk,
  FaTelegramPlane,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa";

const SocialList = ({ iconSize }) => {
  return (
    <StyledSocialList>
      <StyledDescr>
        <StyledDescrLink target="_blank" href="mailto:team@vnv.solutions">
          <FaMailBulk size={iconSize} />
        </StyledDescrLink>
      </StyledDescr>
      <StyledDescr>
        <StyledDescrLink target="_blank" href="https://t.me/vnv_solutions">
          <FaTelegramPlane size={iconSize} />
        </StyledDescrLink>
      </StyledDescr>
      <StyledDescr>
        <StyledDescrLink target="_blank" href="https://t.me/vnv_solutions">
          <FaViber size={iconSize} />
        </StyledDescrLink>
      </StyledDescr>
      <StyledDescr>
        <StyledDescrLink target="_blank" href="https://t.me/vnv_solutions">
          <FaWhatsapp size={iconSize} />
        </StyledDescrLink>
      </StyledDescr>
    </StyledSocialList>
  );
};

export default SocialList;
