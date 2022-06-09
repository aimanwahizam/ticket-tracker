import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { buttonText, handleClick } = props;

  return (
    <div onClick={handleClick}>
      <button className="button">{buttonText}</button>
    </div>
  );
};

export default Button;
