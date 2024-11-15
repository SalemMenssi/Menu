import React from "react";
import Cards from "./Cards";

const Home = () => {
  const coffeeCategories = [
    {
      name: "Espresso",
      image: require("../assests/images/316403627_11354821.png"),
    },
    {
      name: "Latte",
      image: require("../assests/images/316403627_11354821.png"),
    },
    {
      name: "Cappuccino",
      image: require("../assests/images/316403627_11354821.png"),
    },
    {
      name: "Americano",
      image: require("../assests/images/316403627_11354821.png"),
    },
    {
      name: "Mocha",
      image: require("../assests/images/316403627_11354821.png"),
    },
    {
      name: "Macchiato",
      image: require("../assests/images/316403627_11354821.png"),
    },
    {
      name: "Flat White",
      image: require("../assests/images/316403627_11354821.png"),
    },
    {
      name: "Cold Brew",
      image: require("../assests/images/316403627_11354821.png"),
    },
  ];

  return (
    <div className="home">
      <div className="header">
        <h1>Coffe Menu</h1>
      </div>
      <div className="elements">
        {coffeeCategories.map((e, i) => (
          <Cards key={i} img={e.image} name={e.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
