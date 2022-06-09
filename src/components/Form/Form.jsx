import React from "react";
import LabelInput from "../LabelInput/LabelInput";
import "./Form.scss";

const Form = (props) => {
  const {submitForm} = props;

  return (
    <form onSubmit={submitForm}>
      <h2>Enter a New Ticket Tracker</h2>
      <LabelInput labelText="Employee Name" id="fullName" type="text" />
      <LabelInput labelText="Employee Role" id="role" type="text" />
      <input type="submit" />
    </form>
  );
};

export default Form;
