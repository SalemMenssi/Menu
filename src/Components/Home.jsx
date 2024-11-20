import React from "react";
import Cards from "./Cards";

const Home = () => {
  const coffeeCategories = [
    {
      name: "Espresso ",
      image: require("../assests/images/espresso-based.jpg"),
      categoryElements: [
        {
          price: "4.50 ",
          name: "Espresso",
          image: require("../assests/images/espresso.jpg"),
          composant: "Espresso shot",
        },
        {
          price: "5.00 ",
          name: "Americano",
          image: require("../assests/images/americano.jpg"),
          composant: "Espresso, hot water",
        },
        {
          price: "7.00 ",
          name: "Cappuccino",
          image: require("../assests/images/cappuccino.jpg"),
          composant: "Espresso, steamed milk, milk foam",
        },
        {
          price: "7.50 ",
          name: "Latte",
          image: require("../assests/images/latte.jpg"),
          composant: "Espresso, steamed milk, milk foam",
        },
        {
          price: "6.00 ",
          name: "Macchiato",
          image: require("../assests/images/macchiato.jpg"),
          composant: "Espresso, milk foam",
        },
      ],
    },
    {
      name: "Cold Coffee ",
      image: require("../assests/images/cold-coffee.jpg"),
      categoryElements: [
        {
          price: "5.50 ",
          name: "Iced Americano",
          image: require("../assests/images/iced-americano.jpg"),
          composant: "Espresso, cold water, ice",
        },
        {
          price: "7.50 ",
          name: "Iced Latte",
          image: require("../assests/images/iced-latte.jpg"),
          composant: "Espresso, cold milk, ice",
        },
        {
          price: "8.50 ",
          name: "Frappe",
          image: require("../assests/images/frappe.jpg"),
          composant: "Coffee, milk, sugar, ice",
        },
        {
          price: "6.50 ",
          name: "Cold Brew",
          image: require("../assests/images/cold-brew.jpg"),
          composant: "Coarse-ground coffee, cold water, ice",
        },
      ],
    },
    {
      name: "Specialty ",
      image: require("../assests/images/specialty.jpg"),
      categoryElements: [
        {
          price: "8.00 ",
          name: "Mocha",
          image: require("../assests/images/mocha.jpg"),
          composant: "Espresso, steamed milk, chocolate syrup, whipped cream",
        },
        {
          price: "8.50 ",
          name: "Caramel Latte",
          image: require("../assests/images/caramel-latte.jpg"),
          composant: "Espresso, steamed milk, caramel syrup, whipped cream",
        },
        {
          price: "9.00 ",
          name: "Affogato",
          image: require("../assests/images/affogato.jpg"),
          composant: "Espresso, vanilla ice cream",
        },
        {
          price: "10.00 ",
          name: "Irish Coffee",
          image: require("../assests/images/irish-coffee.jpg"),
          composant: "Coffee, brown sugar, cream topping",
        },
      ],
    },

    {
      name: "Desserts",
      image: require("../assests/images/snacks-desserts.jpg"),
      categoryElements: [
        {
          price: "3.50 ",
          name: "Croissant",
          image: require("../assests/images/croissant.jpg"),
          composant: "Butter, flour, sugar",
        },
        {
          price: "4.00 ",
          name: "Muffin",
          image: require("../assests/images/muffin.jpg"),
          composant: "Flour, eggs, sugar, chocolate chips (or other flavors)",
        },
        {
          price: "9.00 ",
          name: "Tiramisu",
          image: require("../assests/images/tiramisu.jpg"),
          composant: "Mascarpone cheese, coffee, ladyfingers, cocoa powder",
        },
        {
          price: "5.50 ",
          name: "Brownie",
          image: require("../assests/images/brownie.jpg"),
          composant: "Cocoa powder, butter, sugar, eggs",
        },
      ],
    },
    {
      name: "Tea-Based ",
      image: require("../assests/images/tea-drinks.jpg"),
      categoryElements: [
        {
          price: "4.00 ",
          name: "Green Tea",
          image: require("../assests/images/green-tea.jpg"),
          composant: "Green tea leaves, hot water",
        },
        {
          price: "4.50 ",
          name: "Earl Grey",
          image: require("../assests/images/earl-grey.jpg"),
          composant: "Black tea, bergamot essence",
        },
        {
          price: "5.00 ",
          name: "Lemon Tea",
          image: require("../assests/images/lemon-tea.jpg"),
          composant: "Black tea, lemon, sugar",
        },
      ],
    },
    {
      name: "Smoothies",
      image: require("../assests/images/smoothies.jpg"),
      categoryElements: [
        {
          price: "6.50 ",
          name: "Berry Smoothie",
          image: require("../assests/images/berry-smoothie.jpg"),
          composant: "Berries, yogurt, milk, honey",
        },
        {
          price: "7.00 ",
          name: "Mango Smoothie",
          image: require("../assests/images/mango-smoothie.jpg"),
          composant: "Mango, yogurt, milk, sugar",
        },
        {
          price: "6.00 ",
          name: "Banana Smoothie",
          image: require("../assests/images/banana-smoothie.jpg"),
          composant: "Banana, milk, sugar, ice",
        },
      ],
    },
    {
      name: "Breakfast ",
      image: require("../assests/images/breakfast.jpg"),
      categoryElements: [
        {
          price: "7.50 ",
          name: "Pancakes",
          image: require("../assests/images/pancakes.jpg"),
          composant: "Flour, milk, eggs, syrup",
        },
        {
          price: "8.00 ",
          name: " Toast",
          image: require("../assests/images/french-toast.jpg"),
          composant: "Bread, eggs, milk, cinnamon",
        },
        {
          price: "6.00 ",
          name: "Omelette",
          image: require("../assests/images/omelette.jpg"),
          composant: "Eggs, cheese, vegetables",
        },
      ],
    },
  ];

  return (
    <div className="home">
      <div className="header">
        <h1 style={{ width: "100%", fontSize: "2.5rem" }}>Coffe Menu</h1>
      </div>
      <div className="elements">
        {coffeeCategories.map((e, i) => (
          <Cards
            key={i}
            elements={e.categoryElements}
            img={e.image}
            name={e.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
