import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../../components/Recipe/Recipe";
import "./Cuisine.scss";

function Cuisine() {
  const [cuisine, setCuisine] = useState<any[]>([]);
  let params = useParams();

  const getCuisine = async (name: string) => {
    const check = localStorage.getItem(name);
    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&cuisine=${name}`
      );
      const recipes = await data.json();
      localStorage.setItem(name, JSON.stringify(recipes.results));
      console.log(recipes);
      setCuisine(recipes.results);
    }
  };

  useEffect(() => {
    if (params.type) {
      getCuisine(params.type);
    }
  }, [params.type]);

  return (
    <div className="Cuisine">
      {cuisine.map((item) => (
        <Recipe key={item.id} recipe={item} />
      ))}
    </div>
  );
}

export default Cuisine;
