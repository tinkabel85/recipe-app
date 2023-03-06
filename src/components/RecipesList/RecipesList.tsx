import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useReducer } from "react";
import { NavLink } from "react-router-dom";
import Actions from "../../state/Actions";
import initialState from "../../state/models/initialState";
import stateReducer from "../../state/reducer/stateReducer";
import Recipe from "../Recipe/Recipe";
import "./RecipesList.scss";

function RecipesList() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  useEffect(() => {
    dispatch({ type: Actions.getRecipes });
    const check = localStorage.getItem("recipes");
    
    if (check) {
      dispatch({
        type: Actions.setRecipes,
        payload: JSON.parse(check)
      })
    } else {
      (async () => {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=25`
        );
        const data = await api.json();
        localStorage.setItem("recipes", JSON.stringify(data.recipes));
        console.log(data.recipes);
        dispatch({ type: Actions.setRecipes, payload: data.recipes });
      })();
    }
  }, []);
  const { recipes } = state;

  return (
    <div className="RecipesList">
      <Splide
        options={{
          perPage: 3,
          pagination: false,
          drag: "free",
          gap: "4rem",
          width: "100%",
        }}
      >
        {recipes.map((recipe: any) => (
          <SplideSlide key={recipe.id}>
            <NavLink to={`/recipe/${recipe.id}`}>
              <Recipe key={recipe.id} recipe={recipe} />
            </NavLink>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default RecipesList;
