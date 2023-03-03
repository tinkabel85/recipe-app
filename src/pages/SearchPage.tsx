import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../components/Recipe/Recipe";
import './SearchPage.scss'

function SearchPage() {
  const [searchedRecipes, setSearchedRecipes] = useState<any[]>([]);
  let params = useParams();

  const getSearch = async (name: string) => {
    const check = localStorage.getItem(name);
    if (check) {
      setSearchedRecipes(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&query=${name}`
      );
      const recipes = await data.json();
      localStorage.setItem(name, JSON.stringify(recipes.results));
      console.log(recipes);
      setSearchedRecipes(recipes.results);
    }
  };

  useEffect(() => {
    if (params.search) {
      getSearch(params.search);
    }
  }, [params.search]);


  return (
    <div className="SearchPage">
      {searchedRecipes.map((item) => (
        <Recipe key={item.id} recipe={item} />
      ))}
    </div>
  );
}

export default SearchPage;
