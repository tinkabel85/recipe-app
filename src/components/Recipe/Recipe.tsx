import React from "react";
import "./Recipe.scss";
type RecipeProps = {
  recipe: {
    id: number;
    title: string;
    instructions: string;
    readyInMinutes: number;
    image?: string;
  };
};

function Recipe({ recipe }: RecipeProps) {
  return (
    <div className="Recipe">
      <div className="Recipe__image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="Recipe__info">
        <p className="Recipe__info__title">{recipe.title}</p>
        {/* <div className="Recipe__info__time">{recipe.readyInMinutes}</div> */}
        <div
          className="Recipe__info__text"
          dangerouslySetInnerHTML={{ __html: recipe.instructions}}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default Recipe;
