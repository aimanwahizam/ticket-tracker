import React from 'react';
import "./Counter.scss";
import Button from '../Button/Button';

const Counter = () => {
  return (
    <div className="counter">
    <h3>Counter</h3>
    <h3>0</h3>
    <div className="counter__buttons">
        <Button buttonText="-"/>
        <Button buttonText="+"/>
    </div>
  </div>
  )
}

export default Counter