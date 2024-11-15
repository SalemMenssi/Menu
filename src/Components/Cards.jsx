import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ img, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categorie/${name}`);
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Cards;
