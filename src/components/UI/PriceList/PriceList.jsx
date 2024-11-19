import React from 'react';
import Price from "../../Price";

const PriceList = ({ amounts, setSelectedAmount, selectedAmount }) => {
  return (
    <Price amounts={amounts} setSelectedAmount={setSelectedAmount} selectedAmount={selectedAmount} />
  );
};

export default PriceList;
