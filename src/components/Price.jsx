import classes from "./GiftCardModal.module.css";


const Price = ({amounts, setSelectedAmount, selectedAmount}) =>{
    console.log(amounts)
    return(
        <div>
            <h2>Выберите номинал</h2>
          <div className={classes.giftCardModalAmountScroll}>
            {amounts.map((amount) => (
              <div
                key={amount}
                className={`${classes.giftCardModalAmountCard} ${
                  selectedAmount === amount
                    ? classes.giftCardModalAmountCardSelected
                    : ""
                }`}
                onClick={() => setSelectedAmount(amount)}
              >
                {amount} ₽
              </div>
            ))}
          </div>
        </div>
    )
}

export default Price;