import React from 'react';
import Homepage from './Home';
import Cuisine from './Cuisine/Cuisine';
import Search from './SearchPage/SearchPage';
import Recipe from './RecipeDetails/RecipeDetails';
import { Route, Routes as RouterRoutes } from "react-router-dom";


function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:search" element={<Search />} />
      <Route path="/recipe/:name" element={<Recipe /> } />
    </RouterRoutes>
  );
}

export default Routes;