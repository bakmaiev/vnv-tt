import React from "react";
import {
  StyledContactFormWrapp,
  StyledContacts,
  StyledContactsBlock,
  StyledContactsInfo,
  StyledContactsWrapp,
  StyledImgWrapp,
  StyledTitle,
} from "./Contacts.styled";

import Form from "../Form/Form";
import SocialList from "../SocialList/SocialList";

const Contacts = () => {
  return (
    <StyledContacts>
      <StyledContactsWrapp>
        <StyledTitle>Зв'яжіться з нами</StyledTitle>
        <StyledContactFormWrapp>
          <StyledContactsBlock>
            <StyledContactsInfo>
              <StyledImgWrapp>
                <img
                  src={require("../../images/contacts.svg").default}
                  alt="Контакти"
                />
              </StyledImgWrapp>
              <SocialList iconSize={30} />
            </StyledContactsInfo>
          </StyledContactsBlock>
          <Form />
        </StyledContactFormWrapp>
      </StyledContactsWrapp>
    </StyledContacts>
  );
};

export default Contacts;
