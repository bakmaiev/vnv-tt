import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../Button/Button";
import { StyledForm, StyledSubTitle } from "./Form.styled";

const Form = () => {
  const { control, handleSubmit, watch, setValue, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const contactMethod = watch("contactMethod");

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledSubTitle>Форма зворотнього зв'язку</StyledSubTitle>
      <div>
        <label>Ім'я:</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: true, pattern: /^[a-zA-Zа-яА-ЯіЇєЄ]+$/ }}
          render={({ field }) => (
            <input {...field} placeholder="Введіть ім'я" />
          )}
        />
      </div>
      <div>
        <label>Спосіб зв'язку:</label>
        <Controller
          name="contactMethod"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field}>
              <option disabled value="">
                Оберіть спосіб зв'язку...
              </option>
              <option value="email">E-mail</option>
              <option value="telegram">Telegram</option>
              <option value="phone">Viber</option>
              <option value="phone">WhatsApp</option>
            </select>
          )}
        />
      </div>
      {contactMethod === "email" && (
        <div>
          <label>E-mail:</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            }}
            render={({ field }) => (
              <input {...field} type="email" placeholder="Введіть пошту" />
            )}
          />
        </div>
      )}
      {contactMethod === "telegram" && (
        <div>
          <label>Нікнейм:</label>
          <Controller
            name="nickname"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^@/ }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Введіть нікнейм"
                type="text"
                onChange={(e) => {
                  const value = e.target.value;
                  setValue(
                    "nickname",
                    value.startsWith("@") ? value : `@${value}`
                  );
                }}
              />
            )}
          />
        </div>
      )}
      {contactMethod === "phone" && (
        <div>
          <label>Номер телефону:</label>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Введіть номер телефону"
                type="tel"
              />
            )}
          />
        </div>
      )}
      <div>
        <label>Повідомлення:</label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: true, maxLength: 150 }}
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Що вас цікавить?"
              maxLength={150}
            />
          )}
        />
      </div>
      <Button type="submit">Надіслати</Button>
    </StyledForm>
  );
};

export default Form;
