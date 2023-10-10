import React from "react";
import {
  StyledFaq,
  StyledFaqAnswear,
  StyledFaqAnswearWrapp,
  StyledFaqBtn,
  StyledFaqCard,
  StyledFaqList,
  StyledFaqQuestion,
  StyledFaqWrapp,
  StyledIconWrapp,
  StyledTitle,
} from "./Faq.styled";
import { FiChevronUp } from "react-icons/fi";
import { useState } from "react";

const faqData = [
  {
    title: "Чи потрібно підписувати контракт перед роботою?",
    description:
      "Так, після обговорення плану роботи ми разом підписуємо контракт за допомогою цифрового підпису. Контракт регулює весь процес роботи, виплати, будь-які непередбачувані обставини та інші важливі частини проєкту. Даний документ захищає обидві сторони – як замовника, так і виконавця.",
  },
  {
    title: "Чи можна повернути кошти після оплати?",
    description:
      "Так, можна. Як це працює: в будь-якому випадку з суми повернення утримується 5% та комісія банку. Повертаються кошти лише за ті етапи проєкту, які не були розпочаті. Вся робота, яка була виконана та оплачена, надсилається замовнику. Етапи, які були розпочаті, завжди доводяться до кінця (за бажанням замовника).",
  },
  {
    title: "Яким чином проводиться оплата?",
    description:
      "Є два варіанти оплати: повна передплата та поетапна передплата. Повна передплата передбачає переказ всієї суми за проєкт одразу на початку співпраці. Поетапна передплата передбачає оплату частинами за кожен етап (або декілька). До кожної платіжної операції прикріплюється інвойс (чек) з інформацією про оплачену послугу або етап.",
  },

  {
    title: "Чи можна допрацювати вже наявний проєкт?",
    description:
      "Ні, лише створити продукт з нуля. Наявний рішення можна використати як приклад для дизайну, контенту та інш., проте це не передбачає зменшення вартості послуги.",
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleFaqCard = (index) => {
    isOpen === index ? setIsOpen(null) : setIsOpen(index);
  };

  return (
    <StyledFaq id="faq">
      <StyledFaqWrapp>
        <StyledTitle>FAQ</StyledTitle>
        <StyledFaqList>
          {faqData.map((faqItem, index) => (
            <StyledFaqCard key={index}>
              <StyledFaqBtn onClick={() => toggleFaqCard(index)}>
                <StyledFaqQuestion>{faqItem.title}</StyledFaqQuestion>
                <StyledIconWrapp>
                  <FiChevronUp
                    className={isOpen === index ? "icon" : ""}
                    size={30}
                  />
                </StyledIconWrapp>
              </StyledFaqBtn>
              <StyledFaqAnswearWrapp
                className={isOpen === index ? "active" : ""}
              >
                <StyledFaqAnswear>{faqItem.description}</StyledFaqAnswear>
              </StyledFaqAnswearWrapp>
            </StyledFaqCard>
          ))}
        </StyledFaqList>
      </StyledFaqWrapp>
    </StyledFaq>
  );
};

export default Faq;
