import React from 'react';
import Homepage from './Home';
import Cuisine from './Cuisine';
import Search from './SearchPage';
import Recipe from './RecipeDetails';
import { Route, Routes as RouterRoutes } from "react-router-dom";


function Pages() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:search" element={<Search />} />
      <Route path="/recipe/:name" element={<Recipe /> } />
    </RouterRoutes>
  );
}

export default Pages