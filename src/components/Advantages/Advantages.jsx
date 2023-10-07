import React from "react";
import {
  StyledAdvantages,
  StyledAdvantagesCard,
  StyledAdvantagesWrapp,
  StyledDescr,
  StyledTitle,
} from "./Advantages.styled";

import {
  FaMoneyBillAlt,
  FaLinode,
  FaMedapps,
  FaGripfire,
  FaChartBar,
  FaInfinity,
} from "react-icons/fa";
import Button from "../Button/Button";

const iconComponents = {
  FaMoneyBillAlt,
  FaLinode,
  FaMedapps,
  FaGripfire,
  FaChartBar,
  FaInfinity,
};

const advantagesData = [
  {
    icon: "FaMoneyBillAlt",
    description:
      "Наші додатки – це не просто гарна картинка, а повноцінний канал продажів, який постійно приводить нових клієнтів",
  },
  {
    icon: "FaLinode",
    description:
      "Разом із додатком ви отримуєте готовий фундамент для просування в інтернеті завдяки SEO та аналітиці",
  },
  {
    icon: "FaMedapps",
    description:
      "Співпраця з нами – це не лише стандартна розробка, а й обговорення десятків нових ідей для розвитку вашого бізнесу",
  },
  {
    icon: "FaGripfire",
    description:
      "Ми не використовуємо конструктори (Redymag, Webflow, etc.), тому у нас тільки якісні додатки",
  },
  {
    icon: "FaChartBar",
    description:
      "Ви замовляєте цілісний продукт, адже ми беремо на себе всі етапи роботи – від аналізу вашого бізнесу до запуску готового сайту",
  },
  {
    icon: "FaInfinity",
    description:
      "Для нас не буває колишніх клієнтів, тому, одного разу замовивши у нас додаток, ви назавжди отримуєте нашу підтримку",
  },
];

const Advantages = () => {
  return (
    <StyledAdvantages>
      <StyledTitle>Чому ми?</StyledTitle>
      <StyledAdvantagesWrapp>
        {advantagesData.map((advantage, index) => {
          const IconComponent = iconComponents[advantage.icon];
          return (
            <StyledAdvantagesCard key={index}>
              {IconComponent && <IconComponent size={80} />}
              <StyledDescr>{advantage.description}</StyledDescr>
            </StyledAdvantagesCard>
          );
        })}
      </StyledAdvantagesWrapp>
      <Button>Замовити</Button>
    </StyledAdvantages>
  );
};

export default Advantages;
