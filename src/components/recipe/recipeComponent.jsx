import React from "react";
import { RecipeData } from "../../db/RecipeData";
import RecipeCard from "./recipeCard";
import { Link } from "react-router-dom";
import Hero from "../hero/Hero";


const RecipeListComponent = () => {
  return (
    <div  style={{width:"80%"}}className="listContainer ">
      {/* <RecipeSearch recipes={RecipeData} /> */}
<Hero/>

      <div  className=" gap-5 flex flex-wrap  items-center justify-around pl-none" style={{ marginTop: "80px" }}>
        {RecipeData.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <RecipeCard
                title={recipe.title}
                imageUrl={recipe.image}
                rating={recipe.ratings}
                chef={recipe.chef}
              />
            </Link>
          </div>
        ))}
      </div>
  </div>
  );
};

export default RecipeListComponent;
