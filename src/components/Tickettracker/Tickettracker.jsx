import React from "react";
import "./TicketTracker.scss";
import CardTop from "../CardTop/CardTop";
import Counter from "../Counter/Counter.jsx";

const TicketTracker = (props) => {
  const { name, role, id } = props;

  return (
    <div className="card">
      <CardTop name={name} role={role} id={id} />
      <Counter />
    </div>
  );
};

export default TicketTracker;
