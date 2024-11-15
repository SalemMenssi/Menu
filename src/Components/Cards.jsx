import React from "react";

const Cards = ({ img, name }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Cards;
