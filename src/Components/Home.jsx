import React from "react";
import Cards from "./Cards";

const Home = () => {
  const coffeeCategories = [
    {
      name: "Espresso ",
      image: require("../assests/images/espresso-based.webp"),
      categoryElements: [
        {
          price: "4.50 ",
          name: "Espresso",
          image: require("../assests/images/espresso.webp"),
          composant: "Espresso shot",
        },
        {
          price: "5.00 ",
          name: "Americano",
          image: require("../assests/images/americano.webp"),
          composant: "Espresso, hot water",
        },
        {
          price: "7.00 ",
          name: "Cappuccino",
          image: require("../assests/images/cappuccino.webp"),
          composant: "Espresso, steamed milk, milk foam",
        },
        {
          price: "7.50 ",
          name: "Latte",
          image: require("../assests/images/latte.webp"),
          composant: "Espresso, steamed milk, milk foam",
        },
        {
          price: "6.00 ",
          name: "Macchiato",
          image: require("../assests/images/macchiato.webp"),
          composant: "Espresso, milk foam",
        },
      ],
    },
    {
      name: "Cold Coffee ",
      image: require("../assests/images/cold-coffee.webp"),
      categoryElements: [
        {
          price: "5.50 ",
          name: "Iced Americano",
          image: require("../assests/images/iced-americano.webp"),
          composant: "Espresso, cold water, ice",
        },
        {
          price: "7.50 ",
          name: "Iced Latte",
          image: require("../assests/images/iced-latte.webp"),
          composant: "Espresso, cold milk, ice",
        },
        {
          price: "8.50 ",
          name: "Frappe",
          image: require("../assests/images/frappe.webp"),
          composant: "Coffee, milk, sugar, ice",
        },
        {
          price: "6.50 ",
          name: "Cold Brew",
          image: require("../assests/images/cold-brew.webp"),
          composant: "Coarse-ground coffee, cold water, ice",
        },
      ],
    },
    {
      name: "Specialty ",
      image: require("../assests/images/specialty.webp"),
      categoryElements: [
        {
          price: "8.00 ",
          name: "Mocha",
          image: require("../assests/images/mocha.webp"),
          composant: "Espresso, steamed milk, chocolate syrup, whipped cream",
        },
        {
          price: "8.50 ",
          name: "Caramel Latte",
          image: require("../assests/images/caramel-latte.webp"),
          composant: "Espresso, steamed milk, caramel syrup, whipped cream",
        },
        {
          price: "9.00 ",
          name: "Affogato",
          image: require("../assests/images/affogato.webp"),
          composant: "Espresso, vanilla ice cream",
        },
        {
          price: "10.00 ",
          name: "Irish Coffee",
          image: require("../assests/images/irish-coffee.webp"),
          composant: "Coffee, brown sugar, cream topping",
        },
      ],
    },

    {
      name: "Desserts",
      image: require("../assests/images/snacks-desserts.webp"),
      categoryElements: [
        {
          price: "3.50 ",
          name: "Croissant",
          image: require("../assests/images/croissant.webp"),
          composant: "Butter, flour, sugar",
        },
        {
          price: "4.00 ",
          name: "Muffin",
          image: require("../assests/images/muffin.webp"),
          composant: "Flour, eggs, sugar, chocolate chips (or other flavors)",
        },
        {
          price: "9.00 ",
          name: "Tiramisu",
          image: require("../assests/images/tiramisu.webp"),
          composant: "Mascarpone cheese, coffee, ladyfingers, cocoa powder",
        },
        {
          price: "5.50 ",
          name: "Brownie",
          image: require("../assests/images/brownie.webp"),
          composant: "Cocoa powder, butter, sugar, eggs",
        },
      ],
    },
    {
      name: "Tea-Based ",
      image: require("../assests/images/tea-drinks.webp"),
      categoryElements: [
        {
          price: "4.00 ",
          name: "Green Tea",
          image: require("../assests/images/green-tea.webp"),
          composant: "Green tea leaves, hot water",
        },
        {
          price: "4.50 ",
          name: "Earl Grey",
          image: require("../assests/images/earl-grey.webp"),
          composant: "Black tea, bergamot essence",
        },
        {
          price: "5.00 ",
          name: "Lemon Tea",
          image: require("../assests/images/lemon-tea.webp"),
          composant: "Black tea, lemon, sugar",
        },
      ],
    },
    {
      name: "Smoothies",
      image: require("../assests/images/smoothies.webp"),
      categoryElements: [
        {
          price: "6.50 ",
          name: "Berry Smoothie",
          image: require("../assests/images/berry-smoothie.webp"),
          composant: "Berries, yogurt, milk, honey",
        },
        {
          price: "7.00 ",
          name: "Mango Smoothie",
          image: require("../assests/images/mango-smoothie.webp"),
          composant: "Mango, yogurt, milk, sugar",
        },
        {
          price: "6.00 ",
          name: "Banana Smoothie",
          image: require("../assests/images/banana-smoothie.webp"),
          composant: "Banana, milk, sugar, ice",
        },
      ],
    },
    {
      name: "Breakfast ",
      image: require("../assests/images/breakfast.webp"),
      categoryElements: [
        {
          price: "7.50 ",
          name: "Pancakes",
          image: require("../assests/images/pancakes.webp"),
          composant: "Flour, milk, eggs, syrup",
        },
        {
          price: "8.00 ",
          name: " Toast",
          image: require("../assests/images/french-toast.webp"),
          composant: "Bread, eggs, milk, cinnamon",
        },
        {
          price: "6.00 ",
          name: "Omelette",
          image: require("../assests/images/omelette.webp"),
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
