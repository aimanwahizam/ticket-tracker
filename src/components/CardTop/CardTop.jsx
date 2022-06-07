import React from "react";
import "./CardTop.scss";

const CardTop = (props) => {
  const { name, role, id } = props;

    return (
      <div className="card-top" key={id}>
        <h2 className="card-top__text">{name}</h2>
        <h2 className="card-top__text">{role}</h2>
      </div>
    );
};

export default CardTop;
