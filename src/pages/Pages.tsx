import React from 'react';
import Homepage from './Home';
import Cuisine from './Cuisine';
import { Route, Routes as RouterRoutes } from "react-router-dom";


function Pages() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </RouterRoutes>
  );
}

export default Pages