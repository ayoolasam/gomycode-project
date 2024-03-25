import React from "react";
import "../../App.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
//import { recipes } from '../../db/recipe';

const RecipeCard = ({ imageUrl, chef, title, rating }) => {
  return (
    <div className="card" style={{ marginLeft: "50px", marginBottom: "30px" }}>
      <img src={imageUrl} alt="Egusi" width="200px" height="200px" />
      <h3>{title} </h3>
      <div className="cardTexts">
        <div className="cardRating">
          {/* <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /> */}
          <p>{rating}</p>
        </div>
        <p className="cardChef">{chef}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
