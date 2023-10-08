import React, { useState } from "react";
import Button from "../Button/Button";
import {
  StyledBtnService,
  StyledDescr,
  StyledServices,
  StyledServicesAction,
  StyledServicesImg,
  StyledServicesInfo,
  StyledServicesMenu,
  StyledServicesText,
  StyledServicesWrapp,
  StyledSubTitle,
  StyledTitle,
} from "./Services.styled";

const servicesData = [
  {
    id: 1,
    title: "Розробка ПЗ",
    description:
      "Наша досвідчена команда може розробити програмне забезпечення для широкого кола галузей промисловості та застосувань, зокрема сільського господарства, фінансів, охорони здоров’я та логістики тощо.",
    image: require("../../images/service1.svg"),
  },
  {
    id: 2,
    title: "Створення ERP систем",
    description:
      "Розробка індивідуальних систем ERP (Enterprise Resource Planning) - системи, які оптимізують ваші бізнес-операції, покращують зв’язок між відділами та автоматизують процеси.",
    image: require("../../images/service2.svg"),
  },
  {
    id: 3,
    title: "Створення інтернет магазину",
    description:
      "Ми пропонуємо послуги з розробки інтернет-магазину для клієнтів, які хочуть створити онлайн-версію свого бізнесу.",
    image: require("../../images/service3.svg"),
  },

  {
    id: 4,
    title: "Підтримка та оновлення",
    description:
      "Ми пропонуємо постійну підтримку та оновлення, щоб гарантувати, що ваші програмні рішення залишаються актуальними та повністю функціональними.",
    image: require("../../images/service4.svg"),
  },

  {
    id: 5,
    title: "Розробка ботів",
    description:
      "Ми спеціалізуємося на розробці індивідуальних ботів, які можуть автоматизувати завдання та підвищити ефективність.",
    image: require("../../images/service5.svg"),
  },

  {
    id: 6,
    title: "Перенесення сайтів",
    description:
      "Ми пропонуємо послуги перенесення веб-сайту для клієнтів, які хочуть перенести свій веб-сайт з однієї платформи на іншу.",
    image: require("../../images/service6.svg"),
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  const handleServiceClick = (serviceId) => {
    const service = servicesData.find((service) => service.id === serviceId);
    setSelectedService(service);
  };

  return (
    <StyledServices>
      <StyledServicesWrapp>
        <StyledTitle>Послуги</StyledTitle>
        <StyledServicesMenu>
          {servicesData.map((service) => (
            <li key={service.id} onClick={() => handleServiceClick(service.id)}>
              <StyledBtnService type="button">{service.title}</StyledBtnService>
            </li>
          ))}
        </StyledServicesMenu>
        <StyledServicesInfo>
          <StyledServicesText>
            <StyledSubTitle>{selectedService.title}</StyledSubTitle>
            <StyledDescr>{selectedService.description}</StyledDescr>
            <Button>Хочу</Button>
          </StyledServicesText>
          <StyledServicesAction>
            <StyledServicesImg
              src={selectedService.image.default}
              alt={selectedService.title}
            ></StyledServicesImg>
          </StyledServicesAction>
        </StyledServicesInfo>
      </StyledServicesWrapp>
    </StyledServices>
  );
};

export default Services;
