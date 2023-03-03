import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipesList.scss";
import { NavLink } from "react-router-dom";

function RecipesList() {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("recipes");

    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=25`
      );
      const data = await api.json();
      localStorage.setItem("recipes", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setRecipes(data.recipes);
    }
  };

  return (
    <div className="RecipesList">
      <Splide
        options={{
          perPage: 3,
          pagination: false,
          drag: "free",
          gap: "5rem",
          width: "100%",
        }}
      >
        {recipes.map((recipe) => (
          <SplideSlide>
            <NavLink to= {'/recipe/'+ recipe.id}>
              <Recipe key={recipe.id} recipe={recipe} />
            </NavLink>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default RecipesList;
