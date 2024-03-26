import React, { useState } from "react";
import RecipeCard from "./recipeCard";
import "../../App.css";

import { CiStar } from "react-icons/ci";

const RecipeSearch = ({ recipes, selectedCategory }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="listContainer">
      <input
        className="search"
        type="text"
        placeholder=" Search by category..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="recipeList ">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <img src={recipe.imageUrl} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <div className="cardTexts">
              <div className="cardRating">
                <CiStar  style={{ color: "#FFD43B" }} />
                <p>{recipe.rating}</p>
              </div>
              <p>{recipe.chef}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
