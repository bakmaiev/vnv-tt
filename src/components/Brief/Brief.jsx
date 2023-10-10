import React from "react";
import {
  StyledBrief,
  StyledDescr,
  StyledImgWrapp,
  StyledSubTitle,
  StyledTitle,
} from "./Brief.styled";
import Button from "../Button/Button";

const Brief = () => {
  return (
    <StyledBrief>
      <StyledTitle>Заповнення брифу</StyledTitle>

      <StyledSubTitle>Що таке бриф?</StyledSubTitle>
      <StyledImgWrapp>
        <img src={require("../../images/brief.svg").default} alt="Бриф" />
      </StyledImgWrapp>
      <StyledDescr>
        Якщо ви шукаєте найкращий спосіб розробити свій ідеальний додаток, ми
        готові допомогти. Наш бриф - це ключ до реалізації вашої ідеї. Цей
        короткий документ допоможе нам зрозуміти ваші потреби та вимоги, і
        почати роботу над унікальним рішенням, яке відповідає вашим очікуванням.
        Не гайте час - натискайте "Заповнити зараз" та допоможіть нам розпочати
        роботу над вашим проєктом вже сьогодні!
      </StyledDescr>

      <Button>Заповнити зараз</Button>
    </StyledBrief>
  );
};

export default Brief;
