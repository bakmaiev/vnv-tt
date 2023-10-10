import React from "react";
import {
  StyledCopyrights,
  StyledCopyrightsWrapp,
  StyledFooter,
  StyledFooterContacts,
  StyledIconLink,
  StyledIconWrapp,
} from "./Footer.styled";
import {
  FaTiktok,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCopyrightsWrapp>
        <StyledCopyrights>VNV Solutions</StyledCopyrights>
      </StyledCopyrightsWrapp>
      <StyledFooterContacts>
        <StyledIconWrapp>
          <StyledIconLink
            target="_blank"
            href="https://www.instagram.com/vnv_solutions"
          >
            <FaInstagram size={20} />
          </StyledIconLink>
        </StyledIconWrapp>
        <StyledIconWrapp>
          <StyledIconLink
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100088433736254"
          >
            <FaFacebookF size={20} />
          </StyledIconLink>
        </StyledIconWrapp>
        <StyledIconWrapp>
          <StyledIconLink target="_blank" href="https://t.me/vnv_solutions">
            <FaTelegramPlane size={20} />
          </StyledIconLink>
        </StyledIconWrapp>
        <StyledIconWrapp>
          <StyledIconLink
            target="_blank"
            href="https://www.linkedin.com/company/vnv-tech"
          >
            <FaLinkedinIn size={20} />
          </StyledIconLink>
        </StyledIconWrapp>
        <StyledIconWrapp>
          <StyledIconLink
            target="_blank"
            href="https://www.tiktok.com/@vnvsolutions"
          >
            <FaTiktok size={20} />
          </StyledIconLink>
        </StyledIconWrapp>
      </StyledFooterContacts>
    </StyledFooter>
  );
};

export default Footer;
