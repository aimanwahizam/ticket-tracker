import React, { useState } from "react";
import "./Counter.scss";
import Button from "../Button/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <div className="counter__buttons">
        <div onClick={decreaseCounter}>
          <Button buttonText="-" />
        </div>
        <div onClick={increaseCounter}>
          <Button buttonText="+" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
