import React, { useState } from "react";
import "./Counter.scss";
import Button from "../Button/Button";

const Counter = () => {
  const [counter, setCounter] = useState(Math.floor(Math.random() * 20));

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    counter == 0 ? setCounter(0) : setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <h3>Counter</h3>
      <h3 className="counter__value">{counter}</h3>
      <div className="counter__buttons">
          <Button buttonText="-" handleClick={decreaseCounter}/>
          <Button buttonText="+" handleClick={increaseCounter}/>
      </div>
    </div>
  );
};

export default Counter;
