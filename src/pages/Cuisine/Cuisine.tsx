import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../../components/Recipe/Recipe";
import Actions from "../../state/Actions";
import initialState from "../../state/models/initialState";
import stateReducer from "../../state/reducer/stateReducer";
import "./Cuisine.scss";

function Cuisine() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const { cuisine } = state;
  const params = useParams<{ type?: string }>();

  useEffect(() => {
    dispatch({ type: Actions.getCuisine, payload: params.type });
    const cuisineType = params.type;


    if (cuisineType) {
      const check = localStorage.getItem(cuisineType);
      if (check) {
        dispatch({
          type: Actions.setCuisine,
          payload: JSON.parse(check)
        })
      } else {
        (async (name: string) => {
          const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&cuisine=${name}`
          );
          const recipes = await data.json();
          localStorage.setItem(name, JSON.stringify(recipes.results));
          console.log(recipes);
          dispatch({ type: Actions.setCuisine, payload: recipes.results });
        })(cuisineType);
      }
    }
  }, [params.type]);



  return (
    <div className="Cuisine">
      {cuisine.map((item: any) => (
        <Recipe key={item.id} recipe={item} />
      ))}
    </div>
  );
}

export default Cuisine;
