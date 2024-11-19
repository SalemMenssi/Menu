import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ img, name, elements }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categorie/${name}`, { state: { elements } });
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Cards;
