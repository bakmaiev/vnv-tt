import React, { useState } from "react";
import { StyledContacts, StyledTitle } from "./Contacts.styled";

const Contacts = () => {
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [viber, setViber] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут ви можете відправити дані на сервер або обробити їх локально
    console.log("Дані форми:", {
      name,
      contactMethod,
      email,
      telegram,
      whatsapp,
      viber,
      additionalInfo,
    });
  };

  return (
    <StyledContacts>
      <StyledTitle>Зв'яжіться з нами</StyledTitle>
      <form onSubmit={handleSubmit}>
        <label>Ім'я:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Спосіб зв'язку:</label>
        <select
          value={contactMethod}
          onChange={(e) => setContactMethod(e.target.value)}
          required
        >
          <option value="">Оберіть спосіб зв'язку</option>
          <option value="email">E-mail</option>
          <option value="telegram">Telegram</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="viber">Viber</option>
        </select>

        {(contactMethod === "email" ||
          contactMethod === "telegram" ||
          contactMethod === "whatsapp" ||
          contactMethod === "viber") && <label>Контактна інформація:</label>}

        {contactMethod === "email" && (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}
        {contactMethod === "telegram" && (
          <input
            type="text"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            required
          />
        )}
        {contactMethod === "whatsapp" && (
          <input
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />
        )}
        {contactMethod === "viber" && (
          <input
            type="text"
            value={viber}
            onChange={(e) => setViber(e.target.value)}
            required
          />
        )}

        <label>Додаткова інформація:</label>
        <textarea
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />

        <button type="submit">Надіслати</button>
      </form>
    </StyledContacts>
  );
};

export default Contacts;
