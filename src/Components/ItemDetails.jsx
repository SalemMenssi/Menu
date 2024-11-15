import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ElementDetails = () => {
  const { id, elementName } = useParams(); // Extracting category and item name
  const navigate = useNavigate();

  // Mock data for element details
  const itemDetails = {
    name: elementName,
    image: require("../assests/images/316403627_11354821.png"),
    components: "Water, Coffee Beans, Sugar",
    price: "$5",
  };

  return (
    <div className="element-details-page">
      <h1>{itemDetails.name}</h1>
      <div className="element-details-container">
        <div className="element-details-card">
          <img src={itemDetails.image} alt={itemDetails.name} />
          <h3>{itemDetails.name}</h3>
          <p><strong>Components:</strong> {itemDetails.components}</p>
          <p><strong>Price:</strong> {itemDetails.price}</p>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ElementDetails;
