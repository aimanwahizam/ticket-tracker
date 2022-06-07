import React from "react";
import "./Tickettracker.scss";

const Tickettracker = (props) => {
  const { employeeArray } = props;

  return (
    <div className="card">
      <h2 className="card__text">Name</h2>
      <h2 className="card__text">Role</h2>
      <div className="card__counter">
        <h3>Counter</h3>
        <h3>0</h3>
        <div className="card__buttons">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default Tickettracker;
