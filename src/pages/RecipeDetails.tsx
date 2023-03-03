import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetails.scss";
type RecipeDetails = {
  title: string;
  instructions: string;
  readyInMinutes: number;
  image?: string;
};

function RecipeDetails() {
  let params = useParams();
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetails | null>(
    null
  );

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const details = await data.json();
      console.log(details);
      setRecipeDetails(details);
    };

    getDetails();
  }, [params.name]);

  if (recipeDetails === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="RecipeDetails">
      <div className="RecipeDetails__image">
        <img src={recipeDetails.image} alt={recipeDetails.title} />
      </div>
      <div className="RecipeDetails__info">
        <p className="RecipeDetails__info__title">{recipeDetails.title}</p>
        <div className="RecipeDetails__info__time">
          {recipeDetails.readyInMinutes} minutes to prepare.
        </div>
        <div
          className="RecipeDetails__info__text"
          dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default RecipeDetails;
