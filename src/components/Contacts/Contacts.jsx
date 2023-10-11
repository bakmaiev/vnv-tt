import React from "react";
import {
  StyledContactFormWrapp,
  StyledContacts,
  StyledContactsBlock,
  StyledContactsInfo,
  StyledContactsWrapp,
  StyledDescr,
  StyledDescrLink,
  StyledDescrList,
  StyledImgWrapp,
  StyledTitle,
} from "./Contacts.styled";
import {
  FaMailBulk,
  FaTelegramPlane,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa";
import Form from "../Form/Form";

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
              <StyledDescrList>
                <StyledDescr>
                  <StyledDescrLink
                    target="_blank"
                    href="mailto:team@vnv.solutions"
                  >
                    <FaMailBulk size={30} />
                  </StyledDescrLink>
                </StyledDescr>
                <StyledDescr>
                  <StyledDescrLink
                    target="_blank"
                    href="https://t.me/vnv_solutions"
                  >
                    <FaTelegramPlane size={30} />
                  </StyledDescrLink>
                </StyledDescr>
                <StyledDescr>
                  <StyledDescrLink
                    target="_blank"
                    href="https://t.me/vnv_solutions"
                  >
                    <FaViber size={30} />
                  </StyledDescrLink>
                </StyledDescr>
                <StyledDescr>
                  <StyledDescrLink
                    target="_blank"
                    href="https://t.me/vnv_solutions"
                  >
                    <FaWhatsapp size={30} />
                  </StyledDescrLink>
                </StyledDescr>
              </StyledDescrList>
            </StyledContactsInfo>
          </StyledContactsBlock>
          <Form />
        </StyledContactFormWrapp>
      </StyledContactsWrapp>
    </StyledContacts>
  );
};

export default Contacts;
