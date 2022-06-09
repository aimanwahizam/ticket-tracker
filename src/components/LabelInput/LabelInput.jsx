import React from "react";

const LabelInput = (props) => {
  const { labelText, id, type } = props;

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} />
    </div>
  );
};

export default LabelInput;
