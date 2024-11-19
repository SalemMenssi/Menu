import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const ElementDetails = () => {
  const { id, elementName } = useParams(); // Extracting category and item name
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state || {};

  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <div className="home">
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className="element-details-container">
        <div className="element-details-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>
            <strong>Components:</strong> {item.composant}
          </p>
          <p>
            <strong>Price:</strong> {item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElementDetails;
