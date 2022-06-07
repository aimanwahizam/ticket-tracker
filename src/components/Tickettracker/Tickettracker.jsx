import React from "react";
import "./TicketTracker.scss";
import CardTop from "../CardTop/CardTop";
import Counter from "../Counter/Counter.jsx";
import employees from "../../data/employees.js";

const TicketTracker = () => {

  const TicketTrackerJSX = employees.map((employee) => {
    const { name, role, id } = employee;

    return (
      <div className="card">
        <CardTop name={name} role={role} id={id} />
        <Counter />
      </div>
    );
  });

  return <div className="main__trackers">{TicketTrackerJSX}</div>;
};

export default TicketTracker;
