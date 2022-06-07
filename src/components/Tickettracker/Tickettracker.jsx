import React from "react";
import "./Tickettracker.scss";

const Tickettracker = (props) => {
  const { employeeArray } = props;

  const ticketTrackerJSX = employeeArray.map((employee) => {
    const { name, role } = employee;

    return (
      <div className="card">
        <div className="card__top">
          <h2 className="card__text">{name}</h2>
          <h2 className="card__text">{role}</h2>
        </div>

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
  });

  return <div className="main__trackers">{ticketTrackerJSX}</div>;
};

export default Tickettracker;
