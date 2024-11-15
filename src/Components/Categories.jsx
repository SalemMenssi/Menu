import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Categories = () => {
  const { id } = useParams(); // Get the category id from the URL
  const navigate = useNavigate();

  // Mock data for category elements
  const categoryElements = [
    {
      name: "Espresso",
      image: require("../assests/images/316403627_11354821.png"),
      price: "$3",
    },
    {
      name: "Latte",
      image: require("../assests/images/316403627_11354821.png"),
      price: "$4",
    },
    {
      name: "Cappuccino",
      image: require("../assests/images/316403627_11354821.png"),
      price: "$4.5",
    },
  ];

  return (
    <div className="categories-page">
      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>
      <h1>{id} Items</h1>
      <div className="categories-container">
        {categoryElements.map((item, index) => (
          <div
            key={index}
            className="category-item-card"
            onClick={() => navigate(`/categorie/${id}/${item.name}`)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
