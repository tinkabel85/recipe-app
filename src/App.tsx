import React from 'react';
import './App.scss';
import Pages from './pages/Pages';
import Category from './components/Category/Category';
import Search from './components/Search/Search';
import { NavLink } from "react-router-dom";


type AppProps = {
  title?: string;
};

function App(props: AppProps) {
  return (
    <div className="App">
      {props.title}
      <NavLink to={"/"}>
        <h1>Eat Delicious</h1>
      </NavLink>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
