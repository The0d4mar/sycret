import React, { useState } from "react";
import InputMask from "react-input-mask"; 
import classes from "../../GiftCardModal.module.css";
import { validateForm } from '../Validation/Validation'; // Убедитесь, что путь к файлу правильный

const Form = ({ selectedAmount, setStep }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePayment = () => {
    if (validateForm(formData, setError)) {
      setStep(3); // Переход на шаг подтверждения
    }
  };

  return (
    <div className={classes.giftCardModalStep}>
      <div className={classes.giftCardModalCertificate}>
        <h3 className={classes.giftCardModalCertificateTitle}>
          Сертификат
        </h3>
        <p>{selectedAmount} ₽</p>
      </div>
      <div>
        <h2>Кому подарок</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleInputChange}
          />
          <InputMask
            mask="+7 (999) 999-99-99"
            value={formData.phone}
            onChange={handleInputChange}
            maskPlaceholder="+7 (___) ___-__-__"
          >
            {() => (
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                className={classes.giftCardModalInput}
              />
            )}
          </InputMask>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </form>
        {error && <p className={classes.giftCardModalError}>{error}</p>}
        <div>
          <button
            className={`${classes.giftCardModalBtn} ${classes.giftCardModalBtnSecondary}`}
            onClick={() => setStep(1)}
          >
            Назад
          </button>
          <button
            className={`${classes.giftCardModalBtn} ${classes.giftCardModalBtnPrimary}`}
            onClick={handlePayment}
          >
            Оплатить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
