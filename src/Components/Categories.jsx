import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Categories = () => {
  const { id } = useParams();
  const location = useLocation();
  const { elements } = location.state || {};
  const navigate = useNavigate();
  const categoryElements = [
    {
      price: "3 DT",
      name: "Espresso",
      image: require("../assests/images/150929101049-black-coffee-stock.jpg"),
      composant: "Espresso",
    },
    {
      price: "3 DT",
      name: "Latte",
      image: require("../assests/images/Cup-Of-Creamy-Coffee.png"),
      composant: "Espresso, Steamed Milk, Foam",
    },
    {
      price: "3 DT",
      name: "Cappuccino",
      image: require("../assests/images/feshly-brewed--latte-coffee-on-a-white-table-1434303312-4d24a51e3bc748d68553a836499d0100.jpg"),
      composant: "Espresso, Steamed Milk, Foam",
    },
    {
      price: "3 DT",
      name: "Americano",
      image: require("../assests/images/150929101049-black-coffee-stock.jpg"),
      composant: "Espresso, Hot Water",
    },
    {
      price: "3 DT",
      name: "Mocha",
      image: require("../assests/images/Cup-Of-Creamy-Coffee.png"),
      composant: "Espresso, Chocolate, Steamed Milk, Whipped Cream",
    },
    {
      price: "3 DT",
      name: "Macchiato",
      image: require("../assests/images/feshly-brewed--latte-coffee-on-a-white-table-1434303312-4d24a51e3bc748d68553a836499d0100.jpg"),
      composant: "Espresso, Foam",
    },
    {
      price: "3 DT",
      name: "Flat White",
      image: require("../assests/images/150929101049-black-coffee-stock.jpg"),
      composant: "Espresso, Steamed Milk",
    },
    {
      price: "3 DT",
      name: "Cold Brew",
      image: require("../assests/images/Cup-Of-Creamy-Coffee.png"),
      composant: "Cold Brew Coffee, Ice, Optional Milk or Cream",
    },
  ];

  return (
    <div className="home">
      <div className="header">
        <button className="back-button" onClick={() => navigate("/")}>
          Back
        </button>
        <h1>{id} Items</h1>
      </div>

      <div className="elements">
        {elements.map((item, index) => (
          <div
            className="card"
            onClick={() =>
              navigate(`/categorie/${id}/${item.name}`, { state: { item } })
            }
            style={{ cursor: "pointer" }}
            key={index}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
