import React from "react";
import RecipeListComponent from "../components/recipe/recipeComponent";
// import RecipeSearch from "../components/recipe/SearchCategory";


const RecipeList = () => {
    return (

    <div className="recipeCatAndList">
      {/* <RecipeSearch /> */}
      <RecipeListComponent />
    </div>
  );
};

export default RecipeList;
