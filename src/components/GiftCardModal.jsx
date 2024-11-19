import React, { useEffect, useState } from "react";
import classes from "./GiftCardModal.module.css";
import fetchPrice from './fetchUser/fetchPrice';
import { useFetching } from "../hooks/useFetching";
import PriceList from "./UI/PriceList/PriceList";
import Form from "./UI/Form/Form";
import Loader from "./UI/Loader/Loader";

const GiftCardModal = () => {
  const [step, setStep] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState();
  const [amounts, setAmounts] = useState([]);

  const [fetchPosts, isPostsLoading] = useFetching(async () => {
    const response = await fetchPrice.getAll();
    setAmounts(response.data);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlesetSelectedAmount = (amount) => {
    setSelectedAmount(amount);
  };

  return (
    <div className={classes.giftCardModal}>
      {step === 1 && (
        <div className={classes.giftCardModalStep}>
          {isPostsLoading ? (
            <Loader />
          ) : (
            <PriceList amounts={amounts} setSelectedAmount={handlesetSelectedAmount} selectedAmount={selectedAmount} />
          )}
          <button
            className={`${classes.giftCardModalBtn} ${classes.giftCardModalBtnPrimary}`}
            onClick={() => setStep(2)}
          >
            Купить
          </button>
        </div>
      )}
      {step === 2 && (
        <Form 
          selectedAmount={selectedAmount}
          setStep={setStep}
        />
      )}

      {step === 3 && (
        <div className={classes.giftCardModalStep}>
          <h2>Спасибо за ваш заказ!</h2>
          <p>
            Ваш сертификат номиналом {selectedAmount} ₽ скоро будет доставлен.
          </p>
          <button
            className={`${classes.giftCardModalBtn} ${classes.giftCardModalBtnPrimary}`}
            onClick={() => setStep(1)}
          >
            Вернуться к выбору
          </button>
        </div>
      )}
    </div>
  );
};

export default GiftCardModal;
