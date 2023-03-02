import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipesList.scss";

function RecipesList() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [query, setQuery] = useState("chicken");

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
          type: "loop",
          pagination: false,
          drag: "free",
          gap: "5rem",
          width: "100%",
        }}
      >
        {recipes.map((recipe) => (
          <SplideSlide >
            <Recipe key={recipe.id} recipe={recipe} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default RecipesList;
